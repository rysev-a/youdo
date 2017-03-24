"""empty message

Revision ID: 69c5ce6692a6
Revises: 58c17b67c08d
Create Date: 2017-03-24 21:26:55.379538

"""

# revision identifiers, used by Alembic.
revision = '69c5ce6692a6'
down_revision = '58c17b67c08d'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('messages', sa.Column('content', sa.String(length=500), nullable=True))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('messages', 'content')
    ### end Alembic commands ###
