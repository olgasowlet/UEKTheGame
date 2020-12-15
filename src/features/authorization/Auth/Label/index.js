import React from "react";
import { Label, Input } from "./style";

export default (props) => {
    return (
        <Label>
            {props.label}
            <Input placeholder={props.placeholder} />
        </Label>
    )
}