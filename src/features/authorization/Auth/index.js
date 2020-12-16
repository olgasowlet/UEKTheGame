import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Div, Title, Button } from "./style";
import { MyTextInput } from "../FormElements";

const Auth = (props) => {
    return (
        <Div>
            <Title>
                {props.title}
            </Title>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    nickname: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('*'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('*'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('*'),
                    nickname: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('*'),
                    password: Yup.string()
                        .min(8, "Must be more than 8 characters")
                        .required('*'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <MyTextInput
                        label="Nazwa użytkownika: "
                        name="nickname"
                        type="text"
                        placeholder="np. robszy"
                    />
                    <MyTextInput
                        label="Hasło: "
                        name="password"
                        type="password"
                        placeholder="xxxxxxxxx"
                    />
                    {props.title === "Rejestracja" ? (
                        <>
                            <MyTextInput
                                label="Imię: "
                                name="firstName"
                                type="text"
                                placeholder="np. Robert"
                            />
                            <MyTextInput
                                label="Nazwisko: "
                                name="lastName"
                                type="text"
                                placeholder="np. Szydło"
                            />
                            <MyTextInput
                                label="E-mail: "
                                name="email"
                                type="text"
                                placeholder="np. xxxxxx@gmail.com"
                            />
                        </>
                    ) : ""}
                    <Button>Zatwierdź</Button>
                </Form>
            </Formik>
        </Div>
    )
};

export default Auth;