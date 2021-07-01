import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "./style";
import {toSignIn} from "../../../routes";

const Message = () => {

    const [redirect, setRedirect] = useState(false);
    return (
        <>
            { redirect ? <Redirect to={toSignIn()} /> :
                <>
                    <div>
                        Gratulację! Od dołączenia do UEK The Game dzieli Cię już tylko logowanie!<br /> Nie czekaj - dołącz do gry! 😃
                    </div>
                    <Button onClick={() => setRedirect(true)}>Zaloguj się</Button> 
                </>
            }
        </>

    )
};

export default Message;