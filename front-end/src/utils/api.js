import Cookies from 'js-cookie';

const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001"


const headers = new Headers()
headers.append("Content-Type", "application/json")

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options)

        if (response.status === 204) {
            return null
        }

        const payload = await response.json()

        if (payload.error) {
            return Promise.reject({ message: payload.error })
        }

        return payload
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack)
            throw error
        }

        return Promise.resolve(onCancel)
    }
}

// Returns an array of all users
export async function listUsers(signal) {
    const url = `${API_BASE_URL}/users`

    return await fetchJson(url, { headers, signal })
}

// userLogin takes a username(string) and password(string) and returns an auth token if credentials are valid
export async function userLogin(username, password, signal) {
    const url = `${API_BASE_URL}/login`
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ username: username, password: password }),
        signal,
    }

    const { token, user } = await fetchJson(url, options)
    if (token) {
        Cookies.set('token', token, {
            secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })

        return user
    }
}

// Returns a single user with the matching userId(number)
export async function readUserByUsername(username, signal) {
    const url = `${API_BASE_URL}/users/${username}`
    const options = {
        method: "GET",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}