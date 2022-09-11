import SnippetProps from "../components/Snippet/props";

export interface SingleSnippetResponse {
    data: SnippetProps,
    error: boolean,
    message: string,
}

export interface ListOfSnippetResponse {
    data: [SnippetProps] | [],
    error: boolean,
    message: string,
}

export interface DeletedSnippetResponse {
    error: boolean,
    message: string
}