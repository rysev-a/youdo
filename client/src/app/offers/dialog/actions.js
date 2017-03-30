import constants from 'app/constants'


export default {
  update: (field, value)=> ({
    type: constants.UPDATE_OFFER_DIALOG,
    payload: {field, value}
  }),
  init: (data)=> ({
    type: constants.INIT_OFFER_DIALOG,
    payload: data
  }),
  open: ()=> ({
    type: constants.OPEN_OFFER_DIALOG
  }),
  close: ()=> ({
    type: constants.CLOSE_OFFER_DIALOG
  })
}
