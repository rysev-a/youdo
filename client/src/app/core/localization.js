const unpackError = (errorData)=> {
  if (Array.isArray(errorData)) {
    return errorData.join(', ');
  }

  return errorData;
}

const translateError = (errorContent)=> {

  let errors = {
    'This field is required.': 'Необходимо заполнить данное поле',
    'Already exists.': 'Данное значение уже занято'
  }

  return errors[errorContent] || errorContent;
}

export const getErrorText = (errorData)=> {
  return translateError(unpackError(errorData));
}
