import React from "react";

import "./ListBudgets.css";

import ListBudgetsItem from "../components/ListBudgetsItem.js";
import CustomSpinner from "../components/CustomSpinner.js";

export default function ListBudgets(props) {
	return (
		<div className="list-budgets">
			{props.isLoaded ? (
				<ul>
					{props.budgets !== null ? (
						props.budgets.map((budget, index) => {
							return (
								<li key={index}>
									<ListBudgetsItem
										index={index}
										budget={budget}
										SetShowAddBtn={props.SetShowAddBtn}
										BudgetUpdate={props.BudgetUpdate}
										BudgetDelete={props.BudgetDelete}
									/>
								</li>
							);
						})
					) : (
						<p>Add a Budget</p>
					)}
				</ul>
			) : (
				<div>
					<CustomSpinner className="spinner spinner-style-budgets-view" />
					<span>Loading...</span>
				</div>
			)}
		</div>
	);
}
