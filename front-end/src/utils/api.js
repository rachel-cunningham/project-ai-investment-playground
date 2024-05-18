const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001"


const headers = new Headers()
headers.append("Content-Type", "application/json")

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, {
            ...options,
            credentials: 'include'
        })

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

// userLogin takes a username(string) and password(string) and if credentials are valid stores the returned auth token in a cookie
// returns the authenticated user's info
export async function userLogin(username, password, signal) {
    const url = `${API_BASE_URL}/login`
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ username: username, password: password }),
        signal,
    }

    const { user } = await fetchJson(url, options)

    return user
}

// Returns a single user with the matching userId(number)
// "user: <username> does not exist" if not logged in or if user does not exist
export async function readUserByUsername(username, signal) {
    const url = `${API_BASE_URL}/users/${username}`
    const options = {
        method: "GET",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}

// Currently needs an entire user object with the following properties: "first_name", "last_name", "username", "email", "age", "occupation"
// returns a copy of the updated user object
// "user: <username> does not exist" if not logged in or if user does not exist
export async function updateUser(updatedUser, signal) {
    const url = `${API_BASE_URL}/users/${updatedUser.username}`
    const options = {
        method: "PUT",
        body: JSON.stringify({ data: updatedUser }),
        signal,
    }

    return await fetchJson(url, options)
}

// Takes a username, returns status 204 if successful or "user: <username> does not exist" if not logged in or if user does not exist
export async function deleteUser(username, signal) {
    const url = `${API_BASE_URL}/users/${username}`
    const options = {
        method: "DELETE",
        headers,
        signal,
    }

    return await fetchJson(url, options)
}