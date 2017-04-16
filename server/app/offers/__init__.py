from ..api import api
from .resources import (
    OfferList,
    OfferAccept,
    OfferConfirm,
    OfferComplete
)


api.add_resource(OfferList, '/api/v1/offers')
api.add_resource(OfferAccept, '/api/v1/offers/<int:id>/accept')
api.add_resource(OfferConfirm, '/api/v1/offers/<int:id>/confirm')
api.add_resource(OfferComplete, '/api/v1/offers/<int:id>/complete')
