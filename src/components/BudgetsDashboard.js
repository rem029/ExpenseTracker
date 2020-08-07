import React, { useEffect, useState } from "react";

import CustomSpinner from "../components/CustomSpinner.js";

import "./BudgetsDashboard.css";

function BudgetsDashboard(props) {
	const [budgetIncomeTotal, setBudgetIncomeTotal] = useState(0);
	const [budgetExpenseTotal, setBudgetExpenseTotal] = useState(0);

	const [username, setUserName] = useState("");
	useEffect(() => {
		if (props.budgets !== null) {
			let incAmt = 0;
			let expAmt = 0;
			setBudgetIncomeTotal(0);
			setBudgetExpenseTotal(0);
			props.budgets.forEach((b) => {
				if (b.type === "income") {
					incAmt = incAmt + Number(b.amount);
					setBudgetIncomeTotal(incAmt);
				} else if (b.type === "expense") {
					expAmt = expAmt + Number(b.amount);
					setBudgetExpenseTotal(Number(expAmt));
				}
			});
		} else {
			setBudgetIncomeTotal(0);
			setBudgetExpenseTotal(0);
		}
		if (props.guestMode) {
			setUserName("Guest");
		} else {
			if (props.userInfo) {
				setUserName(props.userInfo.username);
			} else {
				setUserName("ERROR");
			}
		}
	}, [props.budgets, props.guestMode, props.userInfo]);

	return (
		<div>
			<div className="budget-dashboard-container">
				<h2>
					Hello,{" "}
					<button
						onClick={(e) => {
							e.preventDefault();
							props.SwitchView("Users");
						}}
					>
						{props.isLoaded ? <span>{username}</span> : <CustomSpinner className="spinner spinner-style-dashboard" />}
					</button>
					!
				</h2>
				{props.guestMode && (
					<p>
						<button
							onClick={(e) => {
								e.preventDefault();
								props.SwitchView("Users");
							}}
						>
							Log in or Sign up
						</button>{" "}
						to save your data. <b>Its FREE</b>
					</p>
				)}
			</div>
			<div className="budget-dashboard-box-container">
				<div className="budget-dashboard-box budget-dashboard-box-income">
					<h3>Income</h3>
					<p>{Number(budgetIncomeTotal)}</p>
				</div>
				<div className="budget-dashboard-box budget-dashboard-box-expense">
					<h3>Expense</h3>
					<p>{Number(budgetExpenseTotal)}</p>
				</div>
				<div className="budget-dashboard-box budget-dashboard-box-balance">
					<h3>Balance</h3>
					<p>{Number(budgetIncomeTotal - budgetExpenseTotal)}</p>
				</div>
			</div>
		</div>
	);
}

export default BudgetsDashboard;
