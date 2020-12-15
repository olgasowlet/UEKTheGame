import React from "react";
import { Div, Title, Form, Button } from "./style";
import Label from "./Label";

const Auth = (props) => {
    return (
        <Div>
            <Title>
                {props.title}
            </Title>
            <Form>
                <Label label="Nazwa użytkownika: " placeholder="Nazwa użytkownika" />
                <Label label="Hasło: " placeholder="Hasło" />
                {props.title === "Rejestracja" ? (
                    <><Label label="Imię: " placeholder="Imię" />
                        <Label label="Nazwisko: " placeholder="Nazwisko" />
                        <Label label="E-mail: " placeholder="email" />
                    </>
                ) : ""}
                <Button>Zatwierdź</Button>
            </Form>
        </Div>
    )
};

export default Auth;