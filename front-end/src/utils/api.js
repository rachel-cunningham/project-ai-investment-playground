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

    updateGoal --- takes a goal object and returns the updated goal

    deleteGoal --- takes userId and a goalId and deletes the specified goal, returns 204 no content

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

/*
 * USERS API CALLS
 */

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
        body: JSON.stringify({
            data: { username: username, password: password },
        }),
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
    const url = `${API_BASE_URL}/users/${username}`;
    const options = {
        method: "PATCH",
        headers,
        body: JSON.stringify(patch),
        signal,
    };

    return await fetchJson(url, options);
}

/*
 * GOALS API CALLS
 */

/*
    Object returned from createGoal, readGoal, updateGoal, and listGoals will look like this:
    {
        data: {
            goal_id: 23,
            user_id: 1,
            created_at: "2024-05-19T20:38:06.602Z",
            updated_at: "2024-05-19T20:38:06.602Z",
            goal_name: "test goals 1 million",
            "expected_return_on_investment": 10000,
            years_to_invest_for: 30,
            risk_comfort_level: "low",
            starting_amount_to_invest: 10000,
            ai_response: {
                lowRisk: {
                    bondsPercentage: 40,
                    shortTermPercentage: 10,
                    foreignStockPercentage: 20,
                    domesticStockPercentage: 30
                },
                highRisk: {
                    bondsPercentage: 10,
                    shortTermPercentage: 10,
                    foreignStockPercentage: 30,
                    domesticStockPercentage: 50
                },
                mediumRisk: {
                    bondsPercentage: 20,
                    shortTermPercentage: 10,
                    foreignStockPercentage: 30,
                    domesticStockPercentage: 40
                }
            }
        }
    }
*/

/**
 * Saves a new goal to the database.
 * @param newGoal
 *  the new goal to save
 * @param user_id
 *  the userId of the user creating the goal
 * @param signal
 *  optional AbortController.signal
 * @returns {Promise<deck>}
 *  a promise that resolves the saved Goal, which will now have an `id` property.

    Call: const responseFromAPI = await createGoal(newGoal, user_id/userId, signal)

    Method: POST

    JSON body examples:

    *the whole goal data object
        {
            "data": {
                "goal_name": "New goal",
                "expected_return_on_investment": 10000,
                "years_to_invest_for": 5,
                "risk_comfort_level": "medium",
                "starting_amount_to_invest": 30000,
            }
        }
    
    *one property
        {
            "data": {
                "goal_name": "New goal",
            }
        }

    If successful, returns: new goal data object
    {
        "data": {
            "user_id": 2,
            "goal_id": 5,
            "goal_name": "Example New Goal Name",
            "expected_return_on_investment": 1000,
            ...
        }
    }
 */
export async function createGoal(newGoal, user_id, signal) {
    console.log("CREATE GOAL POST REQUEST:", newGoal, user_id);

    const url = `${API_BASE_URL}/users/${user_id}/goals`;

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
 * @param user_id
 *  the userId of the user creating the goal
 
    Call: const responseFromAPI = await listGoals(user_id/userId, signal)

    Method: GET
    
    JSON body: N/A, no body necessary

    If successful, returns: data object with an array of goal objects for the specified user
    {
        "data": [
            { ...goal1 }, 
            { ...goal2 }, 
            { ...goal3 }, 
            ...
        ]
    }
 */
export async function listGoals(user_id, signal) {
    const url = new URL(`${API_BASE_URL}/users/${user_id}/goals`);

    const options = {
        method: "GET",
        headers,
        signal,
    };

    return await fetchJson(url, options);
}

/**
 * Retrieves the goal with the specified "goal_id" from the user with specified "user_id"
 * @param user_id
 *  the id of the user creating the goal
 * @param goal_id
 *  the "id" property matching the desired goal
 * @param signal
 *  optional AbortController.signal
 
    Call: const responseFromAPI = await readGoal(user_id/userId, goal_id/goalId, signal)

    Method: GET

    JSON body: N/A, no body necessary

    If successful, returns: specified goal data object
    {
        "data": {
            "user_id": 2,
            "goal_id": 5,
            "goal_name": "Example Goal Name",
            "expected_return_on_investment": 1000,
            ...
        }
    }
 */
export async function readGoal(user_id, goal_id, signal) {
    const url = `${API_BASE_URL}/users/${user_id}/goals/${goal_id}`;

    const options = {
        method: "GET",
        headers,
        signal,
    };

    return await fetchJson(url, options);
}

/**
 * Updates an existing goal
 * @param updatedGoal
 *  the new goal to be used to update
 * @param signal
 *  optional AbortController.signal
 
    Call: const responseFromAPI = await updateGoal(updatedGoal, signal)

    Method: PATCH 
    //allows for updating of properties that you send it without interfering with data that is already present

    JSON body examples:

    *the whole goal object
        {
            "data": {
                "goal_name": "New goal",
                "expected_return_on_investment": 10000,
                "years_to_invest_for": 5,
                "risk_comfort_level": "medium",
                "starting_amount_to_invest": 30000,
            }
        }
    
    *one property
        {
            "data": {
                "goal_name": "New goal",
            }
        }

    If successful, returns: updated goal data object with new updated information
    {
        "data": {
            ...updatedGoal
        }
    }
 */
export async function updateGoal(updatedGoal, signal) {
    const { goal_id, user_id } = updatedGoal;

    const url = `${API_BASE_URL}/users/${user_id}/goals/${goal_id}`;
    const options = {
        method: "PATCH",
        body: JSON.stringify({ data: { ...updatedGoal } }),
        headers,
        signal,
    };

    return await fetchJson(url, options, updatedGoal);
}

/**
 * Deletes an existing goal
 * @param user_id
 *  the id of the user to remove the goal from
 * @param goal_id
 *  the id of the goal to remove
 * @param signal
 *  optional AbortController.signal
 
    Call: const responseFromAPI = await deleteGoal(user_id/userId, goal_id/goalId, signal)

    Method: DELETE

    JSON body: N/A, no body necessary

    If successful, returns: N/A, but there is a console log that will return "Goal deleted!"
 */

export async function deleteGoal(user_id, goal_id, signal) {
    const url = `${API_BASE_URL}/users/${user_id}/goals/${goal_id}`;

    const options = {
        method: "DELETE",
        headers,
        signal,
    };

    return await fetchJson(url, options);
}
