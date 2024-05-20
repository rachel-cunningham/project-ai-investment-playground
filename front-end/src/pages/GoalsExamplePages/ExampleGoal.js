import React from "react";
import { Link } from "react-router-dom";
import { deleteGoal } from "../../utils/api";

function ExampleGoal({ goal }) {
    async function onClickDelete() {
        try {
            await deleteGoal(goal.user_id, goal.goal_id);
            console.log("Goal deleted!");
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>{goal.goal_id}</h1>
            <h4>goal_name: {goal.goal_name}</h4>
            <h4>goal_statement: {goal.goal_statement}</h4>
            <h4>years_to_invest_for: {goal.years_to_invest_for}</h4>
            <h4>risk_comfort_level: {goal.risk_comfort_level}</h4>
            <h4>starting_amount_to_invest: {goal.starting_amount_to_invest}</h4>
            <Link to={`/dashboard/${goal.user_id}/goals/${goal.goal_id}`}>
                <button>Go to goal page</button>
            </Link>
            <Link to={`/dashboard/${goal.user_id}/goals/${goal.goal_id}/edit`}>
                <button>Edit goal</button>
            </Link>
            <button onClick={onClickDelete}>Delete goal</button>
        </div>
    );
}

export default ExampleGoal;
