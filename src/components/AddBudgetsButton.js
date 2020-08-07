import React from "react";

import "./AddBudgetsButton.css";

import AddBudgetsForm from "./AddBudgetsForm.js";

export default function AddBudget(props) {
	return (
		<div>
			{props.showAddBtn && (
				<div className="budget-new-container">
					<button
						className="budget-new-container-btn"
						onClick={(e) => {
							e.preventDefault();
							props.setAddMode(true);
							props.SetShowAddBtn(false);
						}}
					>
						+
					</button>
				</div>
			)}
			{props.addMode && (
				<AddBudgetsForm
					setAddMode={props.setAddMode}
					userInfo={props.userInfo}
					isUserLogin={props.isUserLogin}
					BudgetAdd={props.BudgetAdd}
					budgetStatus={props.budgetStatus}
					budgetMsg={props.budgetMsg}
					SetShowAddBtn={props.SetShowAddBtn}
				/>
			)}
		</div>
	);
}
