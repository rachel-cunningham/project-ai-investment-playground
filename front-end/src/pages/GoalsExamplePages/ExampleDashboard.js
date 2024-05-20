import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listGoals } from "../../utils/api";
import ExampleGoalsList from "../GoalsExamplePages/ExampleGoalsList";

function ExampleDashboard() {
    const [goals, setGoals] = useState([]);
    console.log(goals);

    const params = useParams();
    console.log("PARAMS", params);
    const userId = params.userId;

    useEffect(() => {
        async function loadDashboard() {
            const abortController = new AbortController();
            try {
                const response = await listGoals(
                    userId,
                    abortController.signal
                );
                console.log("RESPONSE", response.data);

                // response returns {data: []}
                setGoals(response.data);
            } catch (error) {
                console.log(error);
            }
            return () => abortController.abort();
        }
        loadDashboard();
    }, [userId]);

    return <div>{<ExampleGoalsList goals={goals} userId={userId} />}</div>;
}

export default ExampleDashboard;
