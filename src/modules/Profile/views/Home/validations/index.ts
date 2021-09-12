import Yup from '../../../../../shared/utils/yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Too short')
    .max(20, 'Too long')
    .required('Required'),

  age: Yup.string()
    .min(1, 'Invalid age')
    .max(3, 'Invalid age')
    .required()
    .label('Senha'),

  favBook: Yup.string()
    .min(5, 'Too short')
    .max(20, 'Too long')
    .required('Required'),

  currentlyReading: Yup.string()
    .min(5, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
});

export default validationSchema;
