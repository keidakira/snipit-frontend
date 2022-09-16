import {apiInstance} from "./index";
import {AxiosError, AxiosInstance} from "axios";
import Snippet from "../models/snippet.model";

import {DeletedSnippetResponse, ListOfSnippetResponse, SingleSnippetResponse} from "./snippet.responses";
import {encryptUserSnippet} from "../services/crypto.service";
import {configs} from "@typescript-eslint/eslint-plugin";

const API: AxiosInstance = apiInstance;
const baseUrl = API.getUri();
const urls = {
    CREATE_SNIPPET: baseUrl + "/snippet",
    GET_ALL_SNIPPETS: baseUrl + "/snippet",
    DELETE_A_SNIPPET: baseUrl + "/snippet/",
}
const userId = window.localStorage.getItem("userId") || "";

const headers = {
    "owner": userId
};

const createSnippet = async (name: string, code: string, url ?: string): Promise<SingleSnippetResponse> => {
    const encryptedCode = encryptUserSnippet(code);

    const snippet: Snippet = {
        name,
        code: encryptedCode,
        owner: userId,
        url
    };

    const response = await API.post(urls.CREATE_SNIPPET, JSON.stringify(snippet));

    const {data, message, error} = response.data;

    return {
        data,
        message,
        error
    };
};

const getAllSnippets = async (): Promise<ListOfSnippetResponse> => {
    try {
        const response = await API.get(urls.GET_ALL_SNIPPETS, {
            headers: headers
        });

        const {data, message, error} = response.data;

        return {
            data,
            message,
            error
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                error: true,
                message: error.message,
                data: []
            };
        }

        console.log("Unknown error", error);

        return {
            error: true,
            message: "Unknown error",
            data: []
        };
    }
}

const deleteASnippet = async (id: string): Promise<DeletedSnippetResponse> => {
    try {
        const response = await API.delete(urls.DELETE_A_SNIPPET + id);
        const {data, message, error} = response.data;

        return {
            error: error,
            message: message
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                error: true,
                message: error.message,
            };
        }

        console.log("Unknown error", error);

        return {
            error: true,
            message: "Unknown error",
        };
    }
}

export const SnippetAPI = {
    createSnippet,
    getAllSnippets,
    deleteASnippet
}