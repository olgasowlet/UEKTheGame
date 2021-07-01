import * as Yup from 'yup';

export const initialValues = {
    username: '',
    password: '',
};

export const validationSchema = Yup.object({
    username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    password: Yup.string()
        .min(2, "Must be more than 8 characters")
        .required('Required'),
});
