import React from "react";
import { Formik, Form } from 'formik';
import { Div, Title, Button } from "./style";
import { MyTextInput } from "../FormElements";
import { initialValues, validationSchema, onSubmit } from "./formikValues";

const Auth = (props) => {
    return (
        <Div>
            <Title>
                {props.title}
            </Title>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
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