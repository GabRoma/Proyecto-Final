"""empty message

Revision ID: e446f7ff9047
Revises: 
Create Date: 2023-02-26 22:28:38.939081

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e446f7ff9047'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sku', sa.String(length=12000), nullable=False),
    sa.Column('name', sa.String(length=12000), nullable=False),
    sa.Column('product_url', sa.String(length=12000), nullable=False),
    sa.Column('keywords', sa.String(length=24000), nullable=False),
    sa.Column('brand', sa.String(length=12000), nullable=False),
    sa.Column('sell_on_amazon', sa.Boolean(), nullable=False),
    sa.Column('category', sa.String(length=12000), nullable=False),
    sa.Column('price', sa.String(length=12000), nullable=False),
    sa.Column('currency', sa.String(length=12000), nullable=False),
    sa.Column('description', sa.String(length=200000), nullable=True),
    sa.Column('rating', sa.String(length=24000), nullable=True),
    sa.Column('imagenes', sa.String(length=10000), nullable=True),
    sa.Column('peso', sa.String(length=240000), nullable=True),
    sa.Column('manufacturer', sa.String(length=12000), nullable=True),
    sa.Column('dimensions', sa.String(length=12000), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('sku')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('direccion_de_entrega', sa.String(length=250), nullable=True),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('apellido', sa.String(length=120), nullable=False),
    sa.Column('celular', sa.Integer(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('carrito',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('producto_sku', sa.String(length=120), nullable=False),
    sa.Column('estado', sa.Boolean(create_constraint=True), nullable=False),
    sa.Column('name', sa.String(length=12000), nullable=False),
    sa.Column('price', sa.String(length=12000), nullable=False),
    sa.Column('imagenes', sa.String(length=10000), nullable=True),
    sa.Column('cantidad', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=200000), nullable=True),
    sa.ForeignKeyConstraint(['producto_sku'], ['producto.sku'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favoritos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('producto_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['producto_id'], ['producto.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('metodos_de_pagos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('orden',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('orden_number', sa.String(length=12000), nullable=False),
    sa.Column('total_amount', sa.Integer(), nullable=False),
    sa.Column('fecha', sa.Integer(), nullable=False),
    sa.Column('estado', sa.String(length=12000), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('orden_number')
    )
    op.create_table('orden_detail',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('carrito_id', sa.Integer(), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['carrito_id'], ['carrito.id'], ),
    sa.ForeignKeyConstraint(['order_id'], ['orden.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('orden_detail')
    op.drop_table('orden')
    op.drop_table('metodos_de_pagos')
    op.drop_table('favoritos')
    op.drop_table('carrito')
    op.drop_table('user')
    op.drop_table('producto')
    # ### end Alembic commands ###
