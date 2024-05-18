import React from "react";

function ExampleGoal({ goal }) {
    return (
        <div>
            <h1>{goal.goal_id}</h1>
            <h4>goal_name: {goal.goal_name}</h4>
            <h4>goal_statement: {goal.goal_statement}</h4>
            <h4>years_to_invest_for: {goal.years_to_invest_for}</h4>
            <h4>risk_comfort_level: {goal.risk_comfort_level}</h4>
            <h4>starting_amount_to_invest: {goal.starting_amount_to_invest}</h4>
        </div>
    );
}

export default ExampleGoal;
