import React, { useState } from "react";

import "./AddBudgetsForm.css";

export default function AddBudgetsForm(props) {
	const [title, setTitle] = useState("");
	const [type, setType] = useState("income");
	const [amount, setAmount] = useState(null);
	const [note, setNote] = useState("");

	// userInfo={props.userInfo}
	// isUserLogin={props.isUserLogin}
	// BudgetAdd={props.BudgetAdd}
	// budgetStatus={props.budgetStatus}
	// budgetMsg={props.budgetMsg}

	return (
		<div className="budget-new-form-bg">
			<div className="budget-new-form">
				<button
					onClick={(e) => {
						e.preventDefault();
						props.setAddMode(false);
						props.SetShowAddBtn(true);
					}}
					className="budget-new-form-btn-close"
				>
					X
				</button>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						props.BudgetAdd({ title: title, type: type, note: note, amount: amount });
						// props.setAddMode(false);
						// props.SetShowAddBtn(true);
					}}
				>
					<div className="budget-new-form-field-container">
						<div className="budget-new-form-field">
							{/* <span>*</span>
							<select
								name="type"
								value={type}
								onChange={(e) => {
									setType(e.target.value);
								}}
							>
								<option value="type">Budget Type</option>
								<option value="income">Income</option>
								<option value="expense">Expense</option>
							</select> */}
							<div className="btn-budget-type-container">
								<button
									type="button"
									className={
										type === "income" ? "btn-budget-type-inc btn-budget-type-inc-active" : "btn-budget-type-inc"
									}
									name="btn-budget-type"
									onClick={(e) => {
										e.preventDefault();
										setType("income");
									}}
								>
									Income
								</button>
								<button
									type="button"
									className={
										type === "expense" ? "btn-budget-type-exp btn-budget-type-exp-active" : "btn-budget-type-exp"
									}
									name="btn-budget-type"
									onClick={(e) => {
										e.preventDefault();
										setType("expense");
									}}
								>
									Expense
								</button>
							</div>
						</div>
						<div className="budget-new-form-field">
							<span>*</span>
							<input
								type="text"
								name="budgetTitle"
								placeholder="Title"
								value={title}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							></input>
						</div>
						<div className="budget-new-form-field">
							<span>*</span>
							<input
								type="number"
								name="budgetAmount"
								placeholder="Enter amount"
								value={Number(amount)}
								onChange={(e) => {
									setAmount(e.target.value);
								}}
							></input>
						</div>
						<div className="budget-new-form-field">
							<textarea
								name="budgetNote"
								placeholder="Note"
								value={note}
								onChange={(e) => {
									setNote(e.target.value);
								}}
							></textarea>
						</div>
						<button type="submit" className="budget-new-form-field-btn-add">
							Add
						</button>
						<p style={props.budgetStatus ? { color: "#fff" } : { color: "#e63946" }}>{props.budgetMsg}</p>
					</div>
				</form>
			</div>
		</div>
	);
}
