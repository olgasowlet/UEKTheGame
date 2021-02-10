import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { Div, Title, Button } from "../style";
import { MyTextInput } from "../../FormElements";
import { initialValues, validationSchema } from "./action";
import { registerUser } from "../authService";
import Message from "./Message";

const SignUp = (props) => {

    const [msg, setMsg] = useState('none');

    return (
        <Div>
            <Title>
                {props.title}
            </Title>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => registerUser(values).then(resp => resp ? setMsg('msg') : alert('Użytkownik o takiej nazwie już istnieje'))}
            >
                {msg === 'none' ? <Form>
                    <MyTextInput
                        label="Nazwa: "
                        name="username"
                        type="text"
                        placeholder="np. robszy"
                    />
                    <MyTextInput
                        label="Hasło: "
                        name="password"
                        type="password"
                        placeholder="xxxxxxxxx"
                    />
                    <MyTextInput
                        label="Imię: "
                        name="first_name"
                        type="text"
                        placeholder="np. Robert"
                    />
                    <MyTextInput
                        label="Nazwisko: "
                        name="last_name"
                        type="text"
                        placeholder="np. Szydło"
                    />
                    <MyTextInput
                        label="E-mail: "
                        name="email"
                        type="text"
                        placeholder="np. xxxxxx@gmail.com"
                    />
                    <Button type="submit">Zatwierdź</Button>
                </Form> : <Message/>}
            </Formik>
        </Div>
    )
};

export default SignUp;