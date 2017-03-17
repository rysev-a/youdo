from flask_script import Manager
from .models import User
from ..database import db



user_manager = Manager()
@user_manager.command
def create_user(email):
    user = User(email=email)
    db.session.add(user)
    db.session.commit()


@user_manager.command
def mock():
    for email in [
        'rysev-a@yandex.ru',
        'penza@allgorod.ru',
        'pk@allgorod.ru',
        'rnd@allgorod.ru',
        'ryazan@allgorod.ru',
        'samara@allgorod.ru',
        'spb@allgorod.ru',
        'saransk@allgorod.ru',
        'saratov@allgorod.ru',
        'sterlitamak@allgorod.ru',
        'surgut@allgorod.ru',
        'tver@allgorod.ru',
        'tolyatti@allgorod.ru',
        'tomsk@allgorod.ru',
        'tula@allgorod.ru',
        'tyumen@allgorod.ru',
        'ulan-ude@allgorod.ru',
        'ul@allgorod.ru',
        'cheb@allgorod.ru',
        'chelyabinsk@allgorod.ru',
        'yaroslavl@allgorod.ru',
        'zakaz-nn@nais.su',
        'feedback@nais.su',
        'kostileva@must.su',
        '4618618@must.su',
        'seohunter02@gmail.com',
        'bns@st-nn.ru',
        'bus@st-nn.ru',
        'ek@mail.ru',
        'belenkoav@king-long.ru',
        'info@iveco.ru',
        'fiat@st-nn.ru',
        'info@bus-studio.ru',
        'dk@mail.ru',
        'sales1@armor-gr.ru',
        'info@audi-saratov.ru',
        'amz@amz.ru',
        'strobe@yandex.ru',
        'zakinyan@dubna.ru',
        'sales@rida-holding.com',
        '61baza@mail.ru',
        'armet@online.ru',
        'bront@r66.ru',
        'localauto2000@gmail.com',
        'nn2@yandex.ru',
        'salon@jeep-auto.ru',
        'autolife59@mail.ru',
        'autofanpenza@mail.ru',
        'ax777@kominet.ru',
        'info@audi-magnitogorsk.su',
        'autosale59@mail.ru',
        'info@a-motors.ru',
        'roboprom@inbox.ru',
        'avers-66@mail.ru',
        'office@tar-ural.ru',
        'info@ast-nn.ru',
        'info@sarus.ru',
        'info@dst-ural.ru',
        'info@258rz.ru',
        'info@vis.infopac',
        'all@amurmotors.ru',
        'russie@renault.com',
        'avtotor@avtotor.ru',
        'mail@amo-zil.ru',
        'bsk@azaltai.ru',
        'info@bronto-psa.ru',
        'market@samosval.ru',
    ]:
        create_user(email)
