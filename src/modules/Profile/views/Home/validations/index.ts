import Yup from '../../../../../shared/utils/yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Too short')
    .max(20, 'Too long')
    .required('This field is required'),

  age: Yup.string().min(1, 'Invalid age').max(3, 'Invalid age').required(),

  favBook: Yup.string()
    .min(5, 'Too short')
    .max(20, 'Too long')
    .required('This field is required'),

  currentlyReading: Yup.string()
    .min(5, 'Too short')
    .max(20, 'Too long')
    .required('This field is required'),

  image: Yup.string(),
});

export default validationSchema;
