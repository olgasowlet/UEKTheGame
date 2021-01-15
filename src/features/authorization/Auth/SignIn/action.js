import * as Yup from 'yup';
import { loginUser } from "../../../../fetchAPI";

export const initialValues = {
    nickname: '',
    password: '',
};

export const validationSchema = Yup.object({
    nickname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    password: Yup.string()
        .min(2, "Must be more than 8 characters")
        .required('Required'),
});

export const signIn = (values) => {

    console.log("button submitted");

    loginUser(values.nickname, values.password).then(resp => localStorage.setItem('user', JSON.stringify(resp)));
};