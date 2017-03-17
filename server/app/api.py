from flask_restful import Api
from .users.resources import (UserList, UserItem, 
                              ProfileLogin, ProfileCurrent)


api = Api()

# User API
api.add_resource(UserList, '/api/v1/users')
api.add_resource(UserItem, '/api/v1/users/<int:id>')

# Profile API
api.add_resource(ProfileLogin, '/api/v1/profile/login')
api.add_resource(ProfileCurrent, '/api/v1/profile/current')
