from ..api import api
from .resources import (
    UserList,
    UserItem,
    ProfileLogin,
    ProfileCurrent,
    ProfileRegister,
    ProfileLogout,
    ProfileEdit
)

# User API
api.add_resource(UserList, '/api/v1/users')
api.add_resource(UserItem, '/api/v1/users/<int:id>')

# Profile API
api.add_resource(ProfileLogin, '/api/v1/profile/login')
api.add_resource(ProfileCurrent, '/api/v1/profile/current')
api.add_resource(ProfileRegister, '/api/v1/profile/register')
api.add_resource(ProfileLogout, '/api/v1/profile/logout')
api.add_resource(ProfileEdit, '/api/v1/profile/edit')

print('init users')
