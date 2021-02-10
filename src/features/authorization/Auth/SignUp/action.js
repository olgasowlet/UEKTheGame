import * as Yup from 'yup';

export const initialValues = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
};

export const validationSchema = Yup.object({
    username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required('Required'),
    first_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    last_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
});
