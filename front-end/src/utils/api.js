const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, {
            ...options,
            credentials: "include",
        });

        if (response.status === 204) {
            return null;
        }

        const payload = await response.json();

        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }

        return payload;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }

        return Promise.resolve(onCancel);
    }
}

// Returns an array of all users
export async function listUsers(signal) {
    const url = `${API_BASE_URL}/users`;

    return await fetchJson(url, { headers, signal });
}

// userLogin takes a username(string) and password(string) and if credentials are valid stores the returned auth token in a cookie
// returns the authenticated user's info
export async function userLogin(username, password, signal) {
    const url = `${API_BASE_URL}/login`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ username: username, password: password }),
        signal,
    };

    const { user } = await fetchJson(url, options);

    return user;
}

// Returns a single user with the matching userId(number)
// "user: <username> does not exist" if not logged in or if user does not exist
export async function readUserByUsername(username, signal) {
    const url = `${API_BASE_URL}/users/${username}`;
    const options = {
        method: "GET",
        headers,
        signal,
    };

    return await fetchJson(url, options);
}

/**
 * Saves a new goal to the database.
 * @param newGoal
 *  the new goal to save
 * @param userId
 *  the userId of the user creating the goal
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<deck>}
 *  a promise that resolves the saved Goal, which will now have an `id` property.
 */
export async function createGoal(newGoal, userId, signal) {
    console.log("CREATE GOAL POST REQUEST:", newGoal, userId);
    const url = `${API_BASE_URL}/users/${userId}/goals`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: newGoal }),
        signal,
    };
    return await fetchJson(url, options, newGoal);
}

/**
 * Retrieves all existing goals with matching userId.
 * @returns {Promise<[reservation]>}
 *  a promise that resolves to a possibly empty array of goals saved in the database.
 */
export async function listGoals(userId, signal) {
    const url = new URL(`${API_BASE_URL}/users/${userId}/goals`);
    const options = {
        method: "GET",
        headers,
        signal,
    };
    return await fetchJson(url, options);
}

/**
 * Retrieves the goal with the specified `goalId`
 * @param goalId
 *  the `id` property matching the desired goal.
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<any>}
 *  a promise that resolves to the saved Goal.
 */
export async function readGoal(userId, goalId, signal) {
    const url = `${API_BASE_URL}/users/${userId}/goals/${goalId}`;
    const options = {
        method: "GET",
        headers,
        signal,
    };
    return await fetchJson(url, options);
}

// Creates a new user
// Currently needs user object with the following properties: "first_name", "last_name", "username", "password", "email", "age", "occupation"
export async function createUser(user, signal) {
    const url = `${API_BASE_URL}/users`;
    const userWithNumberAge = {
        ...user,
        age: Number(user.age),
    };
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: userWithNumberAge }),
        signal,
    };

    return await fetchJson(url, options);
}

// Currently needs an entire user object with the following properties: "first_name", "last_name", "username", "email", "age", "occupation"
// returns a copy of the updated user object
// "user: <username> does not exist" if not logged in or if user does not exist
export async function updateUser(updatedUser, signal) {
    const url = `${API_BASE_URL}/users/${updatedUser.username}`;
    //  Make sure the age property is a number
    const updatedUserWithNumberAge = {
        ...updatedUser,
        age: Number(updatedUser.age),
    };
    const options = {
        method: "PUT",
        headers,
        body: JSON.stringify({ data: updatedUserWithNumberAge }),
        signal,
    };

    return await fetchJson(url, options);
}

// Takes a username, returns status 204 if successful or "user: <username> does not exist" if not logged in or if user does not exist
export async function deleteUser(username, signal) {
    const url = `${API_BASE_URL}/users/${username}`;
    const options = {
        method: "DELETE",
        headers,
        signal,
    };

    return await fetchJson(url, options);
}
