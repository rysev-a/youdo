"""empty message

Revision ID: 9f1423459845
Revises: cd0b0d45bb33
Create Date: 2017-04-16 23:17:03.367782

"""

# revision identifiers, used by Alembic.
revision = '9f1423459845'
down_revision = 'cd0b0d45bb33'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('notifications', sa.Column('task_id', sa.Integer(), nullable=True))
    op.add_column('notifications', sa.Column('user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'notifications', 'tasks', ['task_id'], ['id'])
    op.create_foreign_key(None, 'notifications', 'users', ['user_id'], ['id'])
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'notifications', type_='foreignkey')
    op.drop_constraint(None, 'notifications', type_='foreignkey')
    op.drop_column('notifications', 'user_id')
    op.drop_column('notifications', 'task_id')
    ### end Alembic commands ###
