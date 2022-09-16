export interface SignupFormProps {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

export interface SignupFormErrorProps {
    email?: string,
    name?: string,
    password?: string,
    confirmPassword?: string,
}