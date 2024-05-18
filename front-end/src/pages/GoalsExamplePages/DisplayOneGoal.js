import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readGoal } from "../../utils/api";
import ExampleGoal from "./ExampleGoal";

function DisplayOneGoal() {
    const { userId, goalId } = useParams();
    const [goal, setGoal] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchGoal() {
            try {
                const response = await readGoal(
                    userId,
                    goalId,
                    abortController.signal
                );
                setGoal(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchGoal();

        return () => abortController.abort();
    }, [userId, goalId]);

    if (!goal) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ExampleGoal goal={goal} />
        </div>
    );
}

export default DisplayOneGoal;
