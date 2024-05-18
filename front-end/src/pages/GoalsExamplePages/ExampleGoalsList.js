import React from "react";
import { Link } from "react-router-dom";
import ExampleGoal from "../GoalsExamplePages/ExampleGoal";

function ExampleGoalsList({ goals, userId }) {
    console.log("GOALSLIST ARRAY", goals);

    return (
        <div>
            {goals.map((goal) => (
                <div>
                    <ExampleGoal
                        key={goal.goal_id}
                        goal={goal}
                        userId={userId}
                    />
                    <Link to={`/dashboard/${userId}/goals/${goal.goal_id}`}>
                        <button>Go to goal page</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ExampleGoalsList;
