import React from "react";

interface TextInputProps {
    name: string,
    placeholder: string,
    type: string,
    value?: string,
    autofocus?: boolean,
    onChange: (event: React.FormEvent<HTMLInputElement>) => void,
    className?: string,
    error?: string
}

export default TextInputProps;