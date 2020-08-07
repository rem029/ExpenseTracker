import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import "./ViewController.css";

export default function ViewController(props) {
	return (
		<div className="view-controller">
			<div
				className={
					props.currentView === "Users"
						? "view-controller-btn-container view-controller-btn-container-active"
						: "view-controller-btn-container"
				}
			>
				<button
					className="view-controller-btn"
					onClick={(e) => {
						e.preventDefault();
						props.SwitchView("Users");
					}}
				>
					<FontAwesomeIcon icon={faUser} />
				</button>
			</div>
			<div
				className={
					props.currentView === "Budgets"
						? "view-controller-btn-container view-controller-btn-container-active"
						: "view-controller-btn-container"
				}
			>
				<button
					className="view-controller-btn"
					onClick={(e) => {
						e.preventDefault();
						props.SwitchView("Budgets");
					}}
				>
					<FontAwesomeIcon icon={faMoneyBill} />
				</button>
			</div>
		</div>
	);
}
