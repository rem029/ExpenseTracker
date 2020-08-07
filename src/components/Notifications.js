import React, { useState, useEffect } from "react";

import "./Notifications.css";

export default function Notifications(props) {
	const delayTimeOut = 10000;
	const [style, setStyle] = useState({});

	useEffect(() => {
		setTimeout(() => {
			setStyle({ display: "none" });
		}, delayTimeOut);
	});

	return (
		<div style={style} className="notifications">
			{/* <p>{delaySecs}</p> */}
			<div className="notifications-container">
				<button
					onClick={(e) => {
						e.preventDefault();
						setStyle({ display: "none" });
					}}
					className="notifications-btn-close"
				>
					X
				</button>
			</div>
			<div className="notifications-container-msg">
				<p>This is a experimental web app. Real emails are not required.</p>
				<p>Closing in 10 seconds</p>
			</div>
		</div>
	);
}
