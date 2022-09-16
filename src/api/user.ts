import {apiInstance} from "./index";
import {AxiosError, AxiosInstance} from "axios";

import {UserLoginModel, UserSignupModel} from "../models/user.model";
import {UserLoginResponse} from "./user.responses";

const API: AxiosInstance = apiInstance;
const urls = {
    LOGIN_USER: "/user/login",
    CREATE_USER: "/user/signup"
}

const loginUser = async (email: string, password: string) => {
    try {
        const user: UserLoginModel = {
            email: email,
            password: password
        };

        const userData: string = JSON.stringify(user);

        const response = await API.post(urls.LOGIN_USER, userData);
        const {data, message, error}: UserLoginResponse = response.data;

        window.localStorage.setItem("userId", data.id);

        return {
            data,
            message,
            error
        }
    } catch (e) {
        if (e instanceof AxiosError) {
            const {data} = e.response || {};

            if (data) {
                return data;
            }
        }

        return {
            error: true,
            message: "Unknown error occurred"
        }
    }
}


const createUser = async ({email, name, password, confirmPassword}: UserSignupModel) => {
    try {
        const user: UserSignupModel = {
            email: email,
            name: name,
            password,
            confirmPassword
        }

        const response = await API.post(urls.CREATE_USER, JSON.stringify(user));
        const {data, message, error}: UserLoginResponse = response.data;

        return {
            data,
            message,
            error
        }
    } catch (e) {
        if (e instanceof AxiosError) {
            const {data} = e.response || {};

            if (data) {
                return data;
            }
        }

        return {
            error: true,
            message: "Unknown error occurred"
        }
    }
}


export const UserAPI = {
    loginUser,
    createUser
}