import React from "react";

import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin";

import "./User.css";

export default function User(props) {
	return (
		<div className="user-view-anim">
			{props.isUserLogin ? (
				<UserInfo
					userInfo={props.userInfo}
					Logout={props.Logout}
					loginStatus={props.loginStatus}
					loginMsg={props.loginMsg}
					userUpdate={props.userUpdate}
					UpdateLoginStatus={props.UpdateLoginStatus}
					isLoaded={props.isLoaded}
				/>
			) : (
				<UserLogin
					Login={props.Login}
					loginStatus={props.loginStatus}
					loginMsg={props.loginMsg}
					isLoaded={props.isLoaded}
					isDisabled={props.isDisabled}
					userInfo={props.userInfo}
					userRegister={props.userRegister}
					UpdateLoginStatus={props.UpdateLoginStatus}
				/>
			)}
		</div>
	);
}
