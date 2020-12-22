import * as Yup from 'yup';

export const initialValues={
    firstName: '',
    lastName: '',
    email: '',
    nickname: '',
    password: '',
};

export const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    nickname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required('Required'),
});

export const onSubmit=(values, { setSubmitting }) => {
    if (values.password) {
        values.password = require('password-hash').generate(values.password);
    }

    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 400);
};