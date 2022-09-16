import {UserModel} from "../models/user.model";

interface UserLoginResponse {
    data: UserModel,
    message: string,
    error: boolean
}


export type {
    UserLoginResponse
}