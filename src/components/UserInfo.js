import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

import './UserInfo.css';

import CustomSpinner from '../components/CustomSpinner.js';

export default function UserInfo(props) {
  const [uName, setUName] = useState(props.userInfo.username);
  const [pWord, setPword] = useState(props.userInfo.password);
  const [cpWord, setCPword] = useState(props.userInfo.password);
  const [fName, setFName] = useState(props.userInfo.firstName);
  const [lName, setLName] = useState(props.userInfo.lastName);
  const [email, setEmail] = useState(props.userInfo.email);

  const [isDisabled, setIsDisabled] = useState(true);

  const userUpt = () => {
    if (!isDisabled) {
      props.userUpdate({
        username: uName,
        email: email,
        password: pWord,
        cpassword: cpWord,
        firstName: fName,
        lastName: lName,
      });
    }
  };

  return (
    <div>
      <div className="user-info">
        <span>
          <FontAwesomeIcon icon={faAddressCard} />
        </span>
        <h2> User Profile</h2>
        <button
          className="user-info-btn"
          onClick={(e) => {
            e.preventDefault();
            props.Logout();
          }}
        >
          {props.isLoaded ? 'Log out' : <CustomSpinner className="spinner spinner-style-login" />}
        </button>
        <div className="user-info-field">
          <label>Username</label>
          <input
            type="text"
            value={uName}
            name="username"
            disabled
            onChange={(e) => {
              setUName(e.target.value);
            }}
          />
        </div>
        <div className="user-info-field">
          <label>Email</label>
          <input
            type="text"
            value={email}
            name="email"
            disabled={isDisabled}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="user-info-field">
          <label>Password</label>
          <input
            type="text"
            value={pWord}
            name="password"
            disabled={isDisabled}
            onChange={(e) => {
              setPword(e.target.value);
            }}
          />
        </div>
        {isDisabled !== true && (
          <div className="user-info-field">
            <label>Confirm Password</label>
            <input
              type="text"
              value={cpWord}
              name="cpassword"
              disabled={isDisabled}
              onChange={(e) => {
                setCPword(e.target.value);
              }}
            />
          </div>
        )}
        <div className="user-info-field">
          <label>First name</label>
          <input
            type="text"
            value={fName}
            name="email"
            disabled={isDisabled}
            onChange={(e) => {
              setFName(e.target.value);
            }}
          />
        </div>
        <div className="user-info-field">
          <label>Last name</label>
          <input
            type="text"
            value={lName}
            name="email"
            disabled={isDisabled}
            onChange={(e) => {
              setLName(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className={props.isLoaded ? 'user-info-btn' : 'user-info-btn user-info-btn-disable'}
            onClick={(e) => {
              e.preventDefault();
              userUpt();
              setIsDisabled(!isDisabled);
            }}
          >
            {props.isLoaded ? (
              isDisabled ? (
                'Edit Profile'
              ) : (
                'Update'
              )
            ) : (
              <CustomSpinner className="spinner spinner-style-login" />
            )}
          </button>
          <p
            className="user-info-msg"
            style={
              props.loginStatus
                ? { color: '#457B9D', fontSize: '12px', fontWeight: '300' }
                : { color: '#E63946', fontSize: '12px', fontWeight: '300' }
            }
          >
            {props.loginMsg}
          </p>
        </div>
      </div>
    </div>
  );
}
