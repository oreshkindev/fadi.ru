const getProcessedErrorMessage = (responseErrorMessage) => {
  switch(responseErrorMessage) {
    case 'Заказ с таким номером уже обработан':
      return 'Заказ с таким номером уже обработан, нажмите конпку оплатить ещё раз';
    case 'Неверный номер заказа':
      return 'Неверный номер заказа, нажмите конпку оплатить ещё раз';

    case 'Системная ошибка':
      return 'Системная ошибка на стороне платежного сервиса, попробуйте позднее'
  }
};

export { getProcessedErrorMessage };