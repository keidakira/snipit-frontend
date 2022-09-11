import {apiInstance} from "./index";
import {AxiosError, AxiosInstance} from "axios";
import Snippet from "../models/snippet.model";

import {DeletedSnippetResponse, ListOfSnippetResponse, SingleSnippetResponse} from "./snippet.responses";

const API: AxiosInstance = apiInstance;
const baseUrl = API.getUri();
const urls = {
    CREATE_SNIPPET: baseUrl + "/snippet",
    GET_ALL_SNIPPETS: baseUrl + "/snippet",
    DELETE_A_SNIPPET: baseUrl + "/snippet/",
}

const createSnippet = async (name: string, code: string, url ?: string): Promise<SingleSnippetResponse> => {
    const snippet: Snippet = {
        name, code, url
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
        const response = await API.get(urls.GET_ALL_SNIPPETS);

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