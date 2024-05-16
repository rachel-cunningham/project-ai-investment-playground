import React, { useState } from "react";
import { userLogin } from "../utils/api";

export default function ExampleLoginPage() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        setCredentials(prevCredentials => ({
          ...prevCredentials,
          [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const abortController = new AbortController(

        )
        try {
            const response = await userLogin(credentials.username, credentials.password, abortController.signal)
            setUser(response)
        } catch (err) {
            console.error(err)
        }
    }

    function generateElements(user) {
        let output = []
        for (const [key, value] of Object.entries(user)) {
            output.push(<><h3>{key}</h3><p>{value}</p></>)
        }

        return output
    }
    
      return (
        <>
        {error ? <h3>{error.message}</h3> : null}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
            {user ? (
            <>
            {generateElements(user)}
            </>
            ) : null}
        </div>
        </>
      )
}