/*
    API Calls!
    use ctrl/cmd + f and type in the name of the function that you want to jump to
    instructions for calling the function are commented above each


    TABLE OF CONTENTS:

    listUsers --- no login necessary, will return all users

    userLogin --- takes user credentials and returns the matching user, sets cookie to say basically "<this user> is logged in"

    readUserByUsername --- takes a username and returns the matching user

    createGoal --- takes a goal object and a userId and returns the newly created goal

    listGoals --- takes a userId and returns all of that user's goals

    readGoal --- takes a userId and a goalId and returns that one single specific goal

    createUser --- takes a user object and returns a newly created user

    updateUser --- takes a user object and returns the updated user

    deleteUser --- takes a username and deletes the user + all that user's goals. returns 204 no content

    patchUser --- takes a username and a user property object and returns the patched user

*/

// Will be either https://wealthifyai-backend.onrender.com or http://localhost:5001
const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

// Just a couple necessary request headers
const headers = new Headers();
headers.append("Content-Type", "application/json");

// Utility function, configured and called by the other functions in this file
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



/*
    How to call userLogin function:
    const responseFromAPI = await userLogin(username, password, signal)
    Where username and password are strings and signal is an abortController.signal

    Will return the authenticated user's info:
    {
        "data": {
            "user_id": 1,
            "created_at": "2024-05-18T18:57:39.767Z",
            "updated_at": "2024-05-18T18:57:39.767Z",
            "first_name": "John",
            "last_name": "Smith",
            "username": "jsmith",
            "email": "johnsmith@email.com",
            "password_hash": "$2a$10$0F73jgnHZczW8XzFHkLCTOgjaPUqtYlVuF49n7G.iivWvhN7FHjhC",
            "age": 30,
            "occupation": "Cook",
            "img_src": null
        }
    }

    ...or nothing if the credentials are wrong

    A cookie for this user will be set in your browser and automatically sent with subsequent requests, 
    make sure you're logged in to the user that you're requesting!

    One may find the seeded users' credentials in back-end/src/db/seeds/seededUserCredentials.txt
*/
export async function userLogin(username, password, signal) {
    const url = `${API_BASE_URL}/login`;
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: { username: username, password: password } }),
        signal,
    };

    const { user } = await fetchJson(url, options);

    return user;
}



/* 
    How to call readUserByUsername function:
    const responseFromAPI = await readUserByUsername(username, signal)
    Where username is a string and signal is an abortController.signal

    Will return the user with matching username:
    {
        "data": {
            "user_id": 1,
            "created_at": "2024-05-18T18:57:39.767Z",
            "updated_at": "2024-05-18T18:57:39.767Z",
            "first_name": "John",
            "last_name": "Smith",
            "username": "jsmith",
            "email": "johnsmith@email.com",
            "password_hash": "$2a$10$0F73jgnHZczW8XzFHkLCTOgjaPUqtYlVuF49n7G.iivWvhN7FHjhC",
            "age": 30,
            "occupation": "Cook",
            "img_src": null
        }
    }

    ...or "user: <username> does not exist" if not logged in or if user does not exist
*/
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



/*
    How to call creatUser function:
    const responseFromAPI = await createUser(user, signal)
    where user is an object with these properties:
    {
        first_name: "string" 50 char max,
        last_name: "string" 50 char max,
        username: "string" 50 char max,
        password: "string" 50 char max,
        email: "string" 50 char max,
        age: number or "string" < 200,
        occupation: "string" 50 char max,
        img_src: "string" 100 char max
    }

    ...and signal is an abortController.signal

    if successful, the newly created user will be returned:
    {
        "data": {
            "user_id": 1,
            "created_at": "2024-05-18T18:57:39.767Z",
            "updated_at": "2024-05-18T18:57:39.767Z",
            "first_name": "John",
            "last_name": "Smith",
            "username": "jsmith",
            "email": "johnsmith@email.com",
            "password_hash": "$2a$10$0F73jgnHZczW8XzFHkLCTOgjaPUqtYlVuF49n7G.iivWvhN7FHjhC",
            "age": 30,
            "occupation": "Cook",
            "img_src": null
        }
    }
    
    ...or an error describing why the request failed will be returned
*/
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



/*
    How to call updateUser function:
    const responseFromAPI = updateUser(updatedUser, signal)
        where user is an object with these properties:
    {
        first_name: "string" 50 char max,
        last_name: "string" 50 char max,
        username: "string" 50 char max,
        password: "string" 50 char max,
        email: "string" 50 char max,
        age: number or "string" < 200,
        occupation: "string" 50 char max,
        img_src: "string" 100 char max
    }

    ...and signal is an abortController.signal
    
    if successful, the updated user will be returned:
    {
        "data": {
            "user_id": 1,
            "created_at": "2024-05-18T18:57:39.767Z",
            "updated_at": "2024-05-18T18:57:39.767Z",
            "first_name": "John",
            "last_name": "Smith",
            "username": "jsmith",
            "email": "johnsmith@email.com",
            "password_hash": "$2a$10$0F73jgnHZczW8XzFHkLCTOgjaPUqtYlVuF49n7G.iivWvhN7FHjhC",
            "age": 30,
            "occupation": "Cook",
            "img_src": null
        }
    }
    
    ...or an error describing why the request failed will be returned
*/
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



/*
    How to call deleteUser function:
    const responseFromAPI = await deleteUser(username, signal)
    Where username is a string and signal is an abortController.signal

    Will return status 204 if successful or "user: <username> does not exist" if not logged in or if user does not exist
*/
export async function deleteUser(username, signal) {
    const url = `${API_BASE_URL}/users/${username}`;
    const options = {
        method: "DELETE",
        headers,
        signal,
    };

    return await fetchJson(url, options);
}



/* 
    How to call patchUser function:
    const responseFromAPI = await patchUser(username, patch, signal)
    where username is a string, patch is an object with one or more of these properties: "first_name", "last_name", "username", "email", "age", "occupation, img_src",
    and signal is an abortController.signal

    patch should look like this:
    { age: 30 } 
    or:
    { occupation: "president", email: "potus@whitehouse.gov"}
    etc...

    Will return the updated user:
    {
        "data": {
            "user_id": 1,
            "created_at": "2024-05-18T18:57:39.767Z",
            "updated_at": "2024-05-18T18:57:39.767Z",
            "first_name": "John",
            "last_name": "Smith",
            "username": "jsmith",
            "email": "johnsmith@email.com",
            "password_hash": "$2a$10$0F73jgnHZczW8XzFHkLCTOgjaPUqtYlVuF49n7G.iivWvhN7FHjhC",
            "age": 30,
            "occupation": "Cook",
            "img_src": null
        }
    }

    ...or an error describing why the request failed will be returned
*/
export async function patchUser(username, patch, signal) {
    const url = `${API_BASE_URL}/users/${username}`
    const options = {
        method: "PATCH",
        headers,
        body: JSON.stringify(patch),
        signal
    }

    return await fetchJson(url, options);
}