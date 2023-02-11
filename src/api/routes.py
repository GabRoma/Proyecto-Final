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
    return jsonify(access_token=access_token)


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/perfil", methods=["GET"])
@jwt_required()
def get_perfildatospersonales():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    response_body = {
        "msg":"ok",
        "user":user.serialize()
        }
    return jsonify(response_body), 200


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

#terminamos de trabajar aca    

#Favoritos

#Agregar a Favoritos
@api.route("/user/<int:user_id>/favoritos", methods=["POST"])
def add_favorito(user_id):
    request_body = request.get_json()
    fav = Favoritos.query.filter_by(user_id=user_id, producto_sku=request_body["producto_sku"]).first()
    if fav is None:
        newFav = Favorites(
            user_id=user_id, producto_sku=request_body["producto_sku"])
        db.session.add(newFav)
        db.session.commit()
        return jsonify("Producto añadido a tu lista de favoritos"), 200
    else:
        return jsonify("Este producto ya se encuentra en tu lista de favoritos"), 400

#Eliminar de Favoritos
@api.route("/user/<int:user_id>/favoritos", methods=["DELETE"])
def del_favorito(user_id):
    request_body = request.get_json()
    unFav = Favoritos.query.filter_by(user_id=user_id, producto_sku=request_body["producto_sku"]).first()
    if unFav is None:
        raise APIException("No hemos podido encontrar este producto en tu lista de favoritos", status_code=404)
    db.session.delete(unFav)
    db.session.commit()
    return jsonify("El producto ha sido eliminado de tu lista de favoritos"), 200

#Carrito

#Agregar a Carrito
@api.route("/user/<int:user_id>/carrito", methods=["POST"])
def add_carrito(user_id):
    request_body = request.get_json()
    prod = Carrito.query.filter_by(user_id=user_id, producto_sku=request_body["producto_sku"]).first()
    if prod is None:
        newProd = Carrito(
            user_id=user_id, producto_sku=request_body["producto_sku"])
        db.session.add(newProd)
        db.session.commit()
        return jsonify("Producto añadido a tu carrito"), 200
    else:
        return jsonify("Este producto ya se encuentra en tu carrito"), 400

#Eliminar de Carrito
@api.route("/user/<int:user_id>/carrito", methods=["DELETE"])
def del_carrito(user_id):
    request_body = request.get_json()
    unProd = Carrito.query.filter_by(user_id=user_id, producto_sku=request_body["producto_sku"]).first()
    if unProd is None:
        raise APIException("No hemos podido encontrar este producto en tu carrito", status_code=404)
    db.session.delete(unProd)
    db.session.commit()
    return jsonify("El producto ha sido eliminado de tu carrito"), 200