import { API_ENDPOINT } from "../constants";

export async function signUpCheckEmail(data) {
    const url = `${API_ENDPOINT}/auth/sign-up/check-email`;
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}