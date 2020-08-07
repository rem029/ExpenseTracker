import React from 'react';

import './list.budgets.css';

import ListBudgetsItem from './list.budgets.item';
import CustomSpinner from '../../misc/custom.spinner';

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
