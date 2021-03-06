import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from 'formik';
import { Div, Title, Button } from "./style";
import { MyTextInput } from "../../molecules/FormElements/FormElements";
import { initialValues, validationSchema } from "./SignInAction";
import { addToken } from "../../../hooks/authorization/authSlice";
import { loginUser } from "../../../hooks/Auth/authService";

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
                onSubmit={(values) => {
                    loginUser(values).then(resposne => dispatch(addToken(resposne)))
                }}
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