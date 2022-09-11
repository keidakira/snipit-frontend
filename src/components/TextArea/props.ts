import React from "react";

interface TextAreaProps {
    name: string,
    placeholder: string,
    rows?: number,
    cols?: number,
    value?: string,
    onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
    className?: string,
    error?: string
}

export default TextAreaProps;