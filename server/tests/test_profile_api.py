import json
from flask_login import login_user
from app.users.models import User


def test_user_api_login_success(session, client):
    login_user = User(email='login_user@mail.ru', password='pass')
    session.add(login_user)
    session.commit()
    request = client.post('/api/v1/profile/login',
                data=json.dumps({'email': 'login_user@mail.ru', 'password': 'pass'}),
                content_type='application/json')
    assert request.json.get('email') == 'login_user@mail.ru'
    assert request.status == '200 OK'

def test_user_api_login_email_error(session, client):
    login_user = User(email='login_user@mail.ru', password='pass')
    session.add(login_user)
    session.commit()
    request = client.post('/api/v1/profile/login',
                data=json.dumps({'email': 'login_user2@mail.ru', 'password': 'pass'}),
                content_type='application/json')
    assert request.json.get('status') == 'not found'
    assert request.status == '400 BAD REQUEST'

def test_user_api_login_password_error(session, client):
    login_user = User(email='login_user@mail.ru', password='pass')
    session.add(login_user)
    session.commit()
    request = client.post('/api/v1/profile/login',
                data=json.dumps({'email': 'login_user@mail.ru', 'password': 'pass2'}),
                content_type='application/json')
    assert request.json.get('status') == 'invalid password'
    assert request.status == '400 BAD REQUEST'
