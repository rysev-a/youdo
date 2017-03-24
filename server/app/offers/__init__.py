from ..api import api
from .resources import (
    OfferList
)

# Offer API
api.add_resource(OfferList, '/api/v1/offers')

