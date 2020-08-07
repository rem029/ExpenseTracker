import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './ListBudgetsItem.css';

function ListBudgetsItem(props) {
  const [showOptions, setShowOptions] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [title, setTitle] = useState(props.budget.title);
  const [amount, setAmount] = useState(Number(props.budget.amount));
  return (
    <div
      className={
        isDisabled
          ? 'list-budget-item list-budget-item-' + props.budget.type
          : 'list-budget-item list-budget-item-' +
            props.budget.type +
            ' ' +
            'list-budget-item list-budget-item-' +
            props.budget.type +
            '-active'
      }
    >
      {/* <label>{props.budget.type}</label> */}
      <span>
        <input
          type="text"
          value={title}
          disabled={isDisabled}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        {/* {props.budget.note.length > 0 && <textarea value={props.budget.note} disabled={isDisabled} rows={4}></textarea>} */}
      </span>
      <input
        type="number"
        value={amount}
        disabled={isDisabled}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      ></input>
      <div className="list-budget-item-btn-options-container">
        <button
          className={showOptions ? 'list-budget-item-btn list-budget-item-btn-active' : 'list-budget-item-btn'}
          onClick={(e) => {
            if (isDisabled) {
              setShowOptions(!showOptions);
            } else {
              //HANDLE UPDATE HERE
              props.BudgetUpdate(
                {
                  _id: props.budget._id,
                  type: props.budget.type,
                  note: props.budget.note,
                  title: title,
                  amount: amount,
                },
                props.index
              );
              setIsDisabled(true);
            }
          }}
        >
          {isDisabled ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faEdit} />}
        </button>
        {showOptions && (
          <div className="list-budget-item-btn-options">
            <button
              onClick={(e) => {
                setShowOptions(false);
                setIsDisabled(false);
                // props.SetShowAddBtn(true);
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
              <span>EDIT</span>
            </button>
            <div></div>
            <button
              onClick={(e) => {
                setShowOptions(false);
                props.BudgetDelete(
                  {
                    _id: props.budget._id,
                    type: props.budget.type,
                    note: props.budget.note,
                    title: title,
                    amount: amount,
                  },
                  props.budget.tmpID
                );
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
              <span>DELETE</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListBudgetsItem;
