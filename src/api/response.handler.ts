/*
Handle all kinds of API responses
 */
import {AxiosError, AxiosResponse} from "axios";

// Props
import {ListOfSnippetResponse, SingleSnippetResponse} from "./snippet.responses";

const responseCodes: {[key: string]: number} = {
    OK: 200,
    CREATED: 201,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    BAD_REQUEST: 400,
    SERVER_ERROR: 500
};


const handleResponse = (response: AxiosResponse): SingleSnippetResponse | ListOfSnippetResponse => {
    console.log(response);
    const {data, message, error} = response.data;

    return {
        data,
        message,
        error
    };
}

const handleError = (error: AxiosError): SingleSnippetResponse | ListOfSnippetResponse => {
    console.error(error);

    return {
        error: true,
        message: error.message,
        data: []
    };
}


export {
    responseCodes,
    handleResponse,
    handleError
};