# """
# This module takes care of starting the API Server, Loading the DB and Adding the endpoints
# """
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Carrito, Favoritos, Producto
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import json
import requests 

api = Blueprint('api', __name__)

#JWT EMPEZAMOS PARTE BACK-END DEL LOGIN, EL REGISTRO ES APARTE

# 1ERO metodo POST para crear usuario, 
@api.route('/signup', methods=['POST'])
def add_user():
    request_body = request.data  #es la informacion que viene del postman la que viene del front end
    decoded_object = json.loads(request_body)  # traduce la informacion, lo pasa a json 
    print(decoded_object) # hace que podamos ver la informacion de manera que la necesitamos
    get_email = User.query.filter_by(email=decoded_object["email"]).first()
    if get_email is None:
            new_user = User(
                apellido=decoded_object["apellido"], 
                name=decoded_object["name"], 
                celular=decoded_object["celular"], 
                email=decoded_object["email"], password=decoded_object["password"])
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"msg":"usuario creado exitosamente"}), 200
    else: 
        return jsonify({"msg":"el email ya existe"}), 400 


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually geneenvrate the JWT.
@api.route("/login", methods=["POST"]) 
def login():
    email = request.json.get("email", None)
    print(email)
    password = request.json.get("password", None)

    #dentro de la propiedad email, vamos a buscar el email que nos mandaron desde el fornt
    user = User.query.filter_by(email=email).first()
    if email != user.email  or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify({"access_token":access_token, "user":user.serialize()})


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/valid-token", methods=["GET"])
@jwt_required()
def valid_token():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    if current_user is None:
        return jsonify({"User not logged yet"}), 422

    elif user is None:
        return jsonify({"status": False}), 404

    response = {
        "msg":"ok",
        "status": True,
        "user":user.serialize()
        }
    return jsonify(response), 200


#JWT TERMINAMOS 


#empezamos a trabjar aca
#este endpoint nos permite traer la informacion de todos los users
@api.route('/user', methods=['GET'])
def handle_hello():
    allusers = User.query.all()
    results = list(map(lambda item: item.serialize(),allusers))
    print(results)
    return jsonify(results), 200

# #aca traemos la informacion de un solo user    
@api.route('/user/<int:user_id>', methods=['GET'])
def handle_singleuser(user_id):
    one_user = User.query.filter_by(id=user_id).first()
    print(one_user)
    if one_user is None:
        return jsonify({"msg":"usuario no existente"}), 404
    else:
        return jsonify(one_user.serialize()), 200

#este endpoint permite al usuario editar la información guardada en user
@api.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    request_body = request.get_json()

    theUser = User.query.get(user_id)
    if theUser is None:
        raise APIException('User not found', status_code=404)
    if "name" in request_body:
        theUser.name = request_body["name"]
    if "email" in request_body:
        theUser.email = request_body["email"]
    if "celular" in request_body:
        theUser.celular = request_body["celular"]
    if "direccion_de_entrega" in request_body:
        theUser.direccion_de_entrega = request_body["direccion_de_entrega"]
    if "password" in request_body:
        theUser.password = request_body["password"]
    db.session.commit()

    return jsonify("User data updated"), 200

#terminamos de trabajar aca    

#Favoritos
#Traer Todos los Favoritos 
@api.route('/user/<int:user_id>/favoritos', methods=['GET'])
def handle_favoritos(user_id):
    all_favoritos = Favoritos.query.filter_by(user_id=user_id).all()
    results = list(map(lambda item: item.serialize(),all_favoritos))

    return jsonify(results), 200

#Traer un Favorito
@api.route('/user/<int:user_id>/favoritos/<int:favorito_id>', methods=['GET'])
def handle_one_favorito(user_id, favorito_id):
    one_favorito = Favoritos.query.filter_by(user_id=user_id, id=favorito_id).first()
    if one_favorito is None:
        return jsonify({"msg":"No hemos podido encontrar este producto en tu lista de favoritos"}), 404
    return jsonify(one_favorito.serialize()), 200

#Agregar a favoritos 
@api.route("/user/<int:user_id>/favoritos/products/<string:producto_sku>", methods=['POST'])
def add_favourite_product(user_id, producto_sku):
    producto = Favoritos.query.filter_by(producto_sku=producto_sku, user_id=user_id).first()
    if producto is None:
        existe = Producto.query.filter_by(sku=producto_sku).first()
        if existe is None:
            response_body = {"msg":"no existe el producto"}
            return jsonify(response_body), 404
        else:
            user = User.query.filter_by(id=user_id).first()
            if user is None:
                response_body = {"msg":"el usuario no existe"}
                return jsonify(response_body),404
            else:
                favorito = Favoritos(producto_sku=producto_sku, user_id=user_id)
                db.session.add(favorito)
                db.session.commit()
                response_body = {"msg":"Se ha agregado el producto a Favoritos"}
                return jsonify(response_body), 200
    else:     
        response_body = {"msg":"El producto ya esta agregado"}
        return jsonify(response_body), 404        

#Eliminar de favoritos
@api.route('user/<int:user_id>/favoritos/products/<string:producto_sku>', methods=['DELETE'])
def borrar_producto_fav(user_id, producto_sku):
    usuario = User.query.filter_by(id=user_id).first()
    if usuario is None:
        response_body = {"msg": "El usuario ingresado no existe"}
        return jsonify(response_body), 404
    productoexiste = Producto.query.filter_by(sku=producto_sku).first()
    if productoexiste is None:
        response_body = {"msg": "El producto ingresado no existe dentro de favoritos"}
        return jsonify(response_body), 404

    borrar_producto = Favoritos.query.filter_by(user_id=user_id).filter_by(producto_sku=producto_sku).first()
    if borrar_producto is None: 
        response_body = {"msg": "El producto ingresado no existe dentro de favoritos"}
        return jsonify(response_body), 404
        
    db.session.delete(borrar_producto)
    db.session.commit()
    response_body = {"msg": "El producto seleccionado fue borrado con exito"}
    return jsonify(response_body), 200

#Carrito
#Traer Todos los Productos del Carrito
@api.route('/user/<int:user_id>/carrito', methods=['GET'])
def handle_carrito(user_id):
    all_carrito = Carrito.query.filter_by(user_id=user_id).all()
    results = list(map(lambda item: item.serialize(),all_carrito))

    return jsonify(results), 200

#Traer un Producto del Carrito
@api.route('/user/<int:user_id>/carrito/<int:carrito_id>', methods=['GET'])
def handle_one_producto(user_id, carrito_id):
    one_producto = Carrito.query.filter_by(user_id=user_id, id=carrito_id).first()
    if one_producto is None:
        return jsonify({"msg":"No hemos podido encontrar este producto en tu lista de favoritos"}), 404
    return jsonify(one_producto.serialize()), 200

#Agregar a Carrito
@api.route("/user/<int:user_id>/carrito/products/<string:producto_sku>", methods=['POST'])
def add_carrito_product(user_id, producto_sku):
    producto = Carrito.query.filter_by(producto_sku=producto_sku, user_id=user_id).first()
    if producto is None:
        existe = Producto.query.filter_by(sku=producto_sku).first()
        if existe is None:
            response_body = {"msg":"no existe el producto"}
            return jsonify(response_body), 404
        else:
            user = User.query.filter_by(id=user_id).first()
            if user is None:
                response_body = {"msg":"el usuario no existe"}
                return jsonify(response_body),404
            else:
                carrito = Carrito(producto_sku=producto_sku, user_id=user_id)
                db.session.add(carrito)
                db.session.commit()
                response_body = {"msg":"Se ha agregado el producto a Carrito"}
                return jsonify(response_body), 200
    else:        
        response_body = {"msg":"El producto ya esta agregado"}
        return jsonify(response_body), 404        

#Eliminar de carrito
@api.route('user/<int:user_id>/carrito/products/<string:producto_sku>', methods=['DELETE'])
def borrar_producto_carrito(user_id, producto_sku):
    usuario = User.query.filter_by(id=user_id).first()
    if usuario is None:
        response_body = {"msg": "El usuario ingresado no existe"}
        return jsonify(response_body), 404
  
    productoexiste = Producto.query.filter_by(sku=producto_sku).first()
    if productoexiste is None:
        response_body = {"msg": "El producto ingresado no existe dentro de carrito"}
        return jsonify(response_body), 404

    borrar_producto = Carrito.query.filter_by(user_id=user_id).filter_by(producto_sku=producto_sku).first()
    if borrar_producto is None: 
        response_body = {"msg": "El producto ingresado no existe dentro de carrito"}
        return jsonify(response_body), 404
        
    db.session.delete(borrar_producto)
    db.session.commit()
    response_body = {"msg": "El producto seleccionado fue borrado con exito"}
    return jsonify(response_body), 200


#Checkout
#Traer Orden es en plural? traer ordenes
@api.route('/user/<int:user_id>/orden', methods=['GET'])
def handle_orden(user_id):
    all_orden = Orden.query.filter_by(user_id=user_id).all()
    results = list(map(lambda item: item.serialize(),all_orden))

    return jsonify(results), 200

@api.route('/user/<int:user_id>/orden_detail', methods=['GET'])
def handle_orden_detail(user_id):
    all_orden_detail = Orden_detail.query.filter_by(user_id=user_id).all()
    results = list(map(lambda item: item.serialize(),all_orden_detail))

    return jsonify(results), 200

#Agregar orden
@api.route("/user/<int:user_id>/carrito/orden", methods=['POST'])
def add_orden(user_id):
    request_body = request.data  
    decoded_object = json.loads(request_body)  
    print(decoded_object) 
    user = User.query.filter_by(id=user_id).first()
    if user is None:
            response_body = {"msg":"el usuario no existe"}
            return jsonify(response_body),404
    else:
            orden = Orden(user_id=user_id, orden_number= decoded_object["orden_number"],total_amount= decoded_object["total_amount"],fecha= decoded_object["fecha"],estado= decoded_object["estado"])
            db.session.add(orden)
            db.session.commit()
            # response_body = {"msg":"Se ha agregado los datos a la orden"}
            print(orden.serialize())
            return jsonify(orden.serialize()), 200     


@api.route("/user/<int:user_id>/carrito/orden_detail", methods=['POST'])
def add_orden_detail(user_id):
    request_body = request.data  
    decoded_object = json.loads(request_body)
    print(decoded_object)  
    elementos_orden =  Orden_detail(user_id=user_id, carrito_id=decoded_object["carrito_id"], order_id=decoded_object["order_id"])
    print(elementos_orden.serialize())
    db.session.add(elementos_orden)
    db.session.commit()
    elementosdelaorden = Orden_detail.query.filter_by(user_id=user_id).all()
    print(elementosdelaorden)
    results = list(map(lambda item: item.serialize(),elementosdelaorden))
    print(results)
    # user = Orden_detail.query.filter_by(id=user_id).first()
    # if user is None:
    #     response_body = {"msg":"el usuario ya existe"}
    #     return jsonify(response_body),404
    return jsonify(results), 200 


#borrar todos los elementos del carrito
@api.route('user/<int:user_id>/carrito', methods=['PUT'])
def editar_estado_carrito(user_id ):

    editar_estado = Carrito.query.filter_by(user_id=user_id).all()
    print(editar_estado)
    request_body = request.data  
    decoded_object = json.loads(request_body)
    print(decoded_object) 
    for producto in editar_estado:
        producto.estado = decoded_object["estado"]
        db.session.commit()  
    return jsonify("funciona"), 200 


@api.route('/productos/api', methods=['GET'])
def handle_productos():
        api_key = "67229083677942669F18CCBE03F90B9D"
        category_id = "281052"
        api_url_category = f"https://api.rainforestapi.com/request?api_key={api_key}&type=category&amazon_domain=amazon.com&category_id={category_id}"
        response_category = requests.get(api_url_category).json()
        for item in response_category["category_results"]:
            asin = item.get("asin")
            api_url_id = f"https://api.rainforestapi.com/request?api_key={api_key}&type=product&amazon_domain=amazon.com&asin={asin}"
            response_id = requests.get(api_url_id).json()
            if "product" in response_id:
                product = response_id["product"]
                if Producto.query.filter_by(sku=product["asin"]).first() is None:
                    newProd = Producto(
                    sku=product["asin"],
                    name=product["title"],
                    product_url=product["link"],
                    keywords = product["keywords"].lower() + product["categories"][0]["name"],
                    brand=product["brand"] if "brand" in item else "Generico",
                    sell_on_amazon=True,
                    category=product["categories"][0]["name"],
                    price = (item["price"]["value"]
                    if "price" in item
                     else (product["more_buying_choices"][0]["price"]["value"]
                    if ("more_buying_choices" in product
                    and len(product["more_buying_choices"]) > 0
                    and "price" in product["more_buying_choices"][0])
                    else (product["buybox_winner"]["price"]["value"]
                    if "buybox_winner" in product and "price" in product["buybox_winner"]
                    else "No disponible"))),
                    currency = "USD",
                    description = product["feature_bullets_flat"] if "feature_bullets_flat" in product else "Información no disponible",
                    rating=product["rating"] if "rating" in product else 3.5,
                    imagenes=product["images_flat"] if "images_flat" in product else "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png",
                    peso=product["weight"] if "weight" in product else "59"
                    # manufacturer=product["manufacturer"],
                    # dimensions=product["dimensions"]
                    )
                    db.session.add(newProd)
                    db.session.commit()
        return jsonify("ok"), 200

#aca traemos la informacion de un solo producto    
@api.route('/products/<sku>', methods=['GET'])
def handle_one_product(sku):
    one_product = Producto.query.filter_by(sku=sku).first()
    if one_product is None:
        return jsonify({"msg":"producto no existente"}), 404
    else:
        return jsonify(one_product.serialize()), 200


#aca traemos a todos los productos
@api.route('/products', methods=['GET'])
def handle_products():
    all_products = Producto.query.all()
    results = list(map(lambda item: item.serialize(),all_products))
    return jsonify(results), 200    

    