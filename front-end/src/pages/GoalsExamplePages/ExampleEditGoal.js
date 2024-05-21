import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readGoal, updateGoal } from "../../utils/api";
import ExampleGoalForm from "../GoalsExamplePages/ExampleGoalForm";

function EditGoal() {
    const [currentGoal, setCurrentGoal] = useState({});

    const params = useParams();
    // console.log("PARAMS:", params);
    const goalId = params.goalId;
    const userId = params.userId;

    useEffect(() => {
        async function getGoal() {
            const abortController = new AbortController();

            try {
                const response = await readGoal(
                    userId,
                    goalId,
                    abortController.signal
                );

                setCurrentGoal(response.data);
                // console.log("CURRENT GOAL", currentGoal);
                setFormData(response.data);
                // console.log("FORM DATA", formData);
            } catch (error) {
                console.log(error);
            }
        }

        getGoal();
    }, [userId, goalId]);

    const initialFormData = {
        goal_name: "",
        goal_statement: "",
        years_to_invest_for: 1,
        risk_comfort_level: "",
        starting_amount_to_invest: 1,
    };

    const [formData, setFormData] = useState(initialFormData);

    function handleChange(event) {
        event.preventDefault();

        if (
            event.target.name === "years_to_invest_for" ||
            event.target.name === "starting_amount_to_invest"
        ) {
            const newValue = Number(event.target.value);

            setFormData({
                ...formData,
                [event.target.name]: newValue,
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    }

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        const abortController = new AbortController();

        try {
            await updateGoal(formData, abortController.signal);
            console.log("GOAL UPDATED");
            navigate(`/dashboard/${userId}/goals`);
        } catch (error) {
            console.log(error);
        }
    }

    function handleCancel() {
        navigate(-1);
    }

    if (currentGoal.goal_id && currentGoal.user_id) {
        return (
            <div className="pt-3 px-2">
                <div>
                    <h1>Edit Reservation</h1>
                    <hr className="bg-dark"></hr>
                </div>

                <div>
                    <ExampleGoalForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleCancel={handleCancel}
                        formData={formData}
                    />
                </div>
            </div>
        );
    } else {
        return "Loading...";
    }
}

export default EditGoal;
