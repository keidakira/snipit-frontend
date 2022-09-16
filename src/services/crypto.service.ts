import CryptoJS from "crypto-js";

const decryptUserSnippet = (base64Code: string): string => {
    const parsedWordArray = CryptoJS.enc.Base64.parse(base64Code);
    return parsedWordArray.toString(CryptoJS.enc.Utf8);
}

const encryptUserSnippet = (plainCode: string): string => {
    const wordArray = CryptoJS.enc.Utf8.parse(plainCode);
    return CryptoJS.enc.Base64.stringify(wordArray);
}

const hashPassword = (plainPassword: string): string => {
    const wordArray = CryptoJS.enc.Utf8.parse(plainPassword);
    return CryptoJS.SHA256(wordArray).toString(CryptoJS.enc.Utf8);
}

export {
    decryptUserSnippet,
    encryptUserSnippet,
    hashPassword
}