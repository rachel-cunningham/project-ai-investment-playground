import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createGoal } from "../../utils/api";
import ExampleGoalForm from "./ExampleGoalForm";

function CreateGoal() {
    // set initial empty form data
    const initialFormDate = {
        goal_name: "",
        goal_statement: "",
        years_to_invest_for: 1,
        risk_comfort_level: "",
        starting_amount_to_invest: 0,
    };

    const [formData, setFormData] = useState({ ...initialFormDate });
    const [error, setError] = useState(null);

    function handleChange(event) {
        event.preventDefault();

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const params = useParams();
    const userId = params.userId;

    async function handleSubmit(event) {
        //on submit, prevent page from reloading
        event.preventDefault();

        const abortController = new AbortController();

        try {
            //make call to API with POST method to create a new goal with the form data
            await createGoal(formData, userId, abortController.signal);
            console.log("Goal created!");
        } catch (error) {
            setError(error);
        }

        return () => abortController.abort;
    }

    return (
        <div>
            <div className="pt-3 px-2">
                <h1>Create a New Goal</h1>
            </div>

            <hr className="bg-dark"></hr>

            <p>{error}</p>

            <div>
                <ExampleGoalForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                />
                <Link to={`/dashboard/${userId}/goals`}>
                    <button type="submit">Go to goals</button>
                </Link>
            </div>
        </div>
    );
}

export default CreateGoal;
