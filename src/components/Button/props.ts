import React from "react";

interface ButtonProps {
    title: string,
    isPrimary: boolean,
    loadingText?: string,
    onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

export default ButtonProps;