from app.users.models import User


def test_user_create(session):
    user_email = 'rysev-a@yandex.ru'
    user = User(email=user_email, password='P@ssword')
    session.add(user)
    session.commit()

    new_user = User.query.filter_by(email=user_email).first()
    assert new_user.email == user_email
