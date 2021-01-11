import React from "react";
import { Formik, Form } from 'formik';
import { Div, Title, Button } from "../style";
import { MyTextInput } from "../../FormElements";
import { initialValues, validationSchema, onSubmit } from "./action";

const SignIn = (props) => {
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
                        label="Nazwa: "
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
                    <Button type="submit">Zatwierdź</Button>
                </Form>
            </Formik>
        </Div>
    )
};

export default SignIn;