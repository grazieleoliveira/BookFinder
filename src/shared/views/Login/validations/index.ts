import Yup from '../../../utils/yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Your username is too short')
    .max(20, 'Your username is too long')
    .required('Required'),

  password: Yup.string()
    .min(5, 'Your password is too short')
    .max(20, 'Your password is too long')
    .required()
    .label('Senha'),
});

export default validationSchema;
