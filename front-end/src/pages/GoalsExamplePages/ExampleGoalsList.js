import React from "react";
import ExampleGoal from "../GoalsExamplePages/ExampleGoal";

function ExampleGoalsList({ goals }) {
    console.log("GOALSLIST ARRAY", goals);

    return (
        <div>
            {goals.map((goal) => (
                <div>
                    <ExampleGoal key={goal.goal_id} goal={goal} />
                </div>
            ))}
        </div>
    );
}

export default ExampleGoalsList;
