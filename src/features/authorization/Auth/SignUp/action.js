import * as Yup from 'yup';
import { registerUser } from "../../../../fetchAPI";

export const initialValues = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
};

export const validationSchema = Yup.object({
    username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required('Required'),
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
});

export const onSubmit = (values) => {

    console.log("button submitted");
    // console.log(values);

    // registerUser(values).then(resp => console.log(resp));
};