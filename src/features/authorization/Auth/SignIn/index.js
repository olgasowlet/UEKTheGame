import React from "react";
import { Formik, Form } from 'formik';
import { Div, Title, Button } from "../style";
import { MyTextInput } from "../../FormElements";
import { initialValues, validationSchema, fetchToken, displayValues } from "./action";
import { fetchUserToken, signIn } from "../../authSlice";
import { useDispatch } from "react-redux";
import { loginUser } from "../authService";

const SignIn = (props) => {

    const dispatch = useDispatch();

    return (
        <Div>
            <Title>
                {props.title}
            </Title>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => dispatch(signIn(values))}
            >
                <Form>
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
                    <Button type="submit">Zatwierdź</Button>
                </Form>
            </Formik>
        </Div>
    )
};

export default SignIn;