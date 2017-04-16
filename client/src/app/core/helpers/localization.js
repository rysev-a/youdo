const unpackError = (errorData)=> {
  if (Array.isArray(errorData)) {
    return errorData.join(', ');
  }

  return errorData;
};

const translateError = (errorContent)=> {

  let errors = {
    'This field is required.': 'Необходимо заполнить данное поле',
    'Already exists.': 'Данное значение уже занято',
    'Еmail not found.': 'Пользователь с таким email не найден',
    'Invalid password.': 'Неверный пароль',
    'Invalid email address.': 'Неверный формат email'
  };

  return errors[errorContent] || errorContent;
};

export const getErrorText = (errorData)=> {
  return translateError(unpackError(errorData));
};


export const getStatusText = (status) => {
  const statuses = {
    waiting: 'Поиск заказчика',
    accepted: 'Выбор заказчика',
    running: 'Заказчик определен',
    completed: 'Задача выполнена'
  };

  return statuses[status];
};
