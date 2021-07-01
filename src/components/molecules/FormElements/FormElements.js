import React from 'react';
import { useField } from 'formik';
import { Label, Input, Div, SpanError } from "./FormElements.style";

 export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Div>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <SpanError>{meta.error}</SpanError>
            ) : null}
        </Div>
    );
};
