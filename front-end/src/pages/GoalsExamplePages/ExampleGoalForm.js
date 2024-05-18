import React from "react";

function GoalForm({ handleSubmit, handleChange, formData }) {
    return (
        <form onSubmit={handleSubmit} className="pb-3 pt-2 px-2">
            <div className="form-group">
                <label htmlFor="goal_name" className="form-label mr-2">
                    Goal Name:
                </label>
                <input
                    id="goal_name"
                    name="goal_name"
                    type="text"
                    required={true}
                    value={formData.goal_name}
                    maxLength="100"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="goal_statement" className="form-label mr-2">
                    Goal Statement
                </label>
                <input
                    id="goal_statement"
                    name="goal_statement"
                    type="text"
                    required={true}
                    value={formData.goal_statement}
                    maxLength="100"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label
                    htmlFor="years_to_invest_for"
                    className="form-label mr-2"
                >
                    Years to Invest For:
                </label>
                <input
                    id="years_to_invest_for"
                    name="years_to_invest_for"
                    type="number"
                    required={true}
                    value={formData.years_to_invest_for}
                    maxLength="12"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="risk_comfort_level" className="form-label mr-2">
                    Risk comfort level:
                </label>
                <input
                    id="risk_comfort_level"
                    name="risk_comfort_level"
                    type="text"
                    required={true}
                    value={formData.risk_comfort_level}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label
                    htmlFor="starting_amount_to_invest"
                    className="form-label mr-2"
                >
                    Starting amount to invest:
                </label>
                <input
                    id="starting_amount_to_invest"
                    name="starting_amount_to_invest"
                    type="number"
                    required={true}
                    value={formData.starting_amount_to_invest}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default GoalForm;
