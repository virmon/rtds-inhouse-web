import { rejects } from "assert";
import { resolve } from "path";

export function PostData(type, userData) {

    let BaseUrl = "https://reqres.in/api/";

    return new Promise((resolve, reject) => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: userData
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        });
    });
}