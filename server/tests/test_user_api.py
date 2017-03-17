import json
from app.users.models import User


def test_user_api_create(session, client):
    user_data = {
        'email': 'rysev-a@yandex.ru',
        'password': 'P@ssw0rd'
    }
    response = client.post('/api/v1/users',
                           data=json.dumps(user_data),
                           content_type='application/json')

    user = User.query.get(response.json.get('id'))
    assert user.email == user_data.get('email')

def test_user_api_delete(session, client):
    new_user = User(email='new_user@mail.com', password='pass')
    session.add(new_user)
    session.commit()
    response = client.delete('/api/v1/users/{}'.format(new_user.id))
    session.rollback()

    assert User.query.get(new_user.id) == None

def test_user_api_update(session, client):
    update_user = User(email='update_user@mail.com', password='pass')
    session.add(update_user)
    session.commit()
    response = client.put('/api/v1/users/{}'.format(update_user.id),
        data=json.dumps({'email': 'updating_user@mail.com'}),
        content_type='application/json')
    session.rollback()
    
    assert User.query.get(update_user.id).email == 'updating_user@mail.com'
