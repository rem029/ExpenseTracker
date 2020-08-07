import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./UserLogin.css";

import CustomSpinner from "../components/CustomSpinner.js";

function UserLogin(props) {
	const [uName, setUName] = useState("");
	const [pWord, setPword] = useState("");
	const [cpWord, setCPword] = useState("");
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [email, setEmail] = useState("");

	const [isSignIn, setIsSign] = useState(true);

	const [loginShowPW, setLoginShowPW] = useState(false);

	const [SignUpShowPW, setSignUpShowPW] = useState(false);
	const [SignUpShowCPW, setSignUpShowCPW] = useState(false);

	const userReg = () => {
		props.userRegister({
			username: uName,
			email: email,
			password: pWord,
			cpassword: cpWord,
			firstName: fName,
			lastName: lName,
		});
	};

	const userLogin = () => {
		props.Login(uName, pWord);
	};

	return (
		<div>
			<form
				className="user-form"
				onSubmit={(e) => {
					e.preventDefault();
					if (isSignIn) {
						userLogin();
					} else {
						userReg();
					}
				}}
			>
				<div className="user-form-title">
					<h3>XT</h3>
					<p>Manage your personal expense</p>
				</div>
				<div className="user-selection">
					<button
						className={isSignIn ? "user-selection-btn user-selection-btn-active" : "user-selection-btn"}
						onClick={(e) => {
							e.preventDefault();
							setIsSign(true);
						}}
					>
						Sign in
					</button>
					<button
						className={isSignIn ? "user-selection-btn" : "user-selection-btn user-selection-btn-active"}
						onClick={(e) => {
							e.preventDefault();
							setIsSign(false);
						}}
					>
						Sign up
					</button>
				</div>
				<div className="user-selection-anim">
					<div
						className={
							isSignIn ? "user-selection-anim-orig" : "user-selection-anim-orig user-selection-anim-orig-right"
						}
					></div>
				</div>
				{isSignIn ? (
					<div className="user-login-form">
						<div className="user-login-form-input-style-username">
							<span className="user-login-form-input-style-username-icon">
								<FontAwesomeIcon icon={faUser} />
							</span>
							<input
								type="text"
								value={uName}
								name="username"
								disabled={props.isDisabled}
								placeholder="Username"
								tabIndex={1}
								onChange={(e) => {
									setUName(e.target.value);
								}}
							/>
						</div>
						<div className="user-login-form-input-style-password">
							<span className="user-login-form-input-style-password-icon">
								<FontAwesomeIcon icon={faLock} />
							</span>
							<input
								type={loginShowPW ? "type" : "password"}
								name="password"
								disabled={props.isDisabled}
								value={pWord}
								placeholder="Password"
								tabIndex={2}
								onChange={(e) => {
									setPword(e.target.value);
								}}
							/>
							<button
								onClick={(e) => {
									e.preventDefault();
									setLoginShowPW(!loginShowPW);
								}}
							>
								{loginShowPW ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
							</button>
						</div>
						<button type="submit" className="user-login-form-btn" tabIndex={3}>
							{props.isLoaded ? (
								<span>SIGN IN</span>
							) : (
								<span>
									<CustomSpinner className="spinner spinner-style-login" />
									Loading...
								</span>
							)}
						</button>
					</div>
				) : (
					<div className="user-signup-form">
						<div className="user-signup-form-input-info">Fields with (*) are required.</div>
						<label>Username *</label>
						<div className="user-signup-form-input-style">
							<input
								type="text"
								value={uName}
								name="username"
								placeholder="Username"
								disabled={props.isDisabled}
								onChange={(e) => {
									setUName(e.target.value);
								}}
							/>
						</div>
						<label>Email *</label>
						<div className="user-signup-form-input-style">
							<input
								type="email"
								value={email}
								name="email"
								placeholder="username@example.com"
								disabled={props.isDisabled}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						<label>Password *</label>
						<div className="user-signup-form-input-style">
							<input
								type={SignUpShowPW ? "text" : "password"}
								value={pWord}
								name="password"
								placeholder="Password"
								disabled={props.isDisabled}
								onChange={(e) => {
									setPword(e.target.value);
								}}
							/>
							<button
								name="btn-showpw"
								onClick={(e) => {
									e.preventDefault();
									setSignUpShowPW(!SignUpShowPW);
								}}
							>
								{SignUpShowPW ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
							</button>
						</div>
						<label>Confirm Password *</label>
						<div className="user-signup-form-input-style">
							<input
								type={SignUpShowCPW ? "text" : "password"}
								value={cpWord}
								name="cpassword"
								placeholder="Confirm Password"
								disabled={props.isDisabled}
								onChange={(e) => {
									setCPword(e.target.value);
								}}
							/>
							<button
								name="btn-showpw"
								onClick={(e) => {
									e.preventDefault();
									setSignUpShowCPW(!SignUpShowCPW);
								}}
							>
								{SignUpShowCPW ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
							</button>
						</div>
						<label>Full Name</label>
						<div className="user-signup-form-input-style">
							<input
								type="text"
								value={fName}
								name="firstName"
								placeholder="First name"
								disabled={props.isDisabled}
								onChange={(e) => {
									setFName(e.target.value);
								}}
							/>
						</div>
						<div className="user-signup-form-input-style">
							<input
								type="text"
								value={lName}
								name="lastName"
								placeholder="Last name"
								disabled={props.isDisabled}
								onChange={(e) => {
									setLName(e.target.value);
								}}
							/>
						</div>
						<button type="submit" className="user-signup-form-btn">
							{props.isLoaded ? (
								<span>SIGN UP</span>
							) : (
								<span>
									<CustomSpinner className="spinner spinner-style-login" />
									Loading...
								</span>
							)}
						</button>
					</div>
				)}
				<p style={{ color: props.loginStatus ? "#457B9D" : "#E63946", fontSize: "12px", fontWeight: "300" }}>
					{props.loginMsg}
				</p>
			</form>
		</div>
	);
}

export default UserLogin;
