interface UserModel {
    id: string,
    name: string,
    email: string,
    password?: string
}

interface UserLoginModel {
    email: string,
    password: string
}

interface UserSignupModel {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
}

export type {
    UserModel,
    UserLoginModel,
    UserSignupModel
};