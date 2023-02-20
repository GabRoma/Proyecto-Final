from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Tabla User
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    direccion_de_entrega = db.Column(db.String(250), unique=False, nullable=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    celular = db.Column(db.Integer, unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    favoritos = db.relationship("Favoritos", backref='user' )
    metodosDePagos = db.relationship("MetodosDePagos", backref='user')
    carrito = db.relationship("Carrito", backref='user')

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "is_active": self.is_active,
            "direccion_de_entrega": self.direccion_de_entrega,
            "apellido" : self.apellido,
            "celular": self.celular,


            # do not serialize the password, its a security breach
        }


# Tabla Favoritos
class Favoritos (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    producto_sku = db.Column(db.String(120), db.ForeignKey('producto.sku'), nullable=True )
    


    def __repr__(self):
        return '<Favoritos %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "producto_sku": self.producto_sku,
            
        }

#Tabla Metodos de Pago
class MetodosDePagos (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    

    def __repr__(self):
        return '<MetodosDePagos %r>' % self.id

    def serialize(self):
        return {
        "id": self.id,
        "user_id": self.user_id,
        
        }

#Tabla de Carrito
class Carrito(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    producto_sku = db.Column(db.String(120), db.ForeignKey('producto.sku'),nullable=False )

    def __repr__(self):
        return '<Carrito %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "producto_sku": self.producto_sku,
        }


class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sku = db.Column(db.String(12000), unique=True, nullable=False)
    name = db.Column(db.String(12000), unique=False, nullable=False)
    product_url = db.Column(db.String(12000), unique=False, nullable=False)
    keywords = db.Column(db.String(24000), unique=False, nullable=False)
    brand = db.Column(db.String(12000), unique=False, nullable=False)
    sell_on_amazon = db.Column(db.Boolean(), unique=False, nullable=False)
    category = db.Column(db.String(12000), unique=False, nullable=False)
    price = db.Column(db.String(12000), unique=False, nullable=False)
    currency = db.Column(db.String(12000), unique=False, nullable=False)
    description = db.Column(db.String(200000), unique=False, nullable=True)
    rating = db.Column(db.String(24000), unique=False, nullable=True)
    imagenes =  db.Column(db.String(10000), unique=False, nullable=True)
    peso = db.Column(db.String(240000), unique=False, nullable=True)
    manufacturer = db.Column(db.String(12000), unique=False, nullable=True)
    dimensions = db.Column(db.String(12000), unique=False, nullable=True)
    carrito = db.relationship("Carrito", backref='producto')
    favoritos = db.relationship("Favoritos", backref='producto')


    def __repr__(self):
        return '<Producto %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "sku": self.sku,
            "name": self.name,
            "product_url": self. product_url,
            "keywords": self. keywords,
            "brand": self. brand,
            "sell_on_amazon": self.sell_on_amazon,
            "category": self.category,
            "price": self.price,
            "currency": self.currency,
            "description" : self.description,
            "rating": self.rating,
            "imagenes": self.imagenes,
            "peso": self.peso,
            "manufacturer": self.manufacturer,
            "dimensions": self.dimensions           
        }