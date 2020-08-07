import React, { useState } from 'react';

import './Budget.css';

import AddBudgetsButton from '../components/AddBudgetsButton.js';
import ListBudgets from '../components/ListBudgets.js';
import BudgetsDashboard from '../components/BudgetsDashboard.js';

export default function Budgets(props) {
  const [addMode, setAddMode] = useState(false);
  const [showAddBtn, SetShowAddBtn] = useState(true);
  return (
    <div className="budget-view-anim">
      <BudgetsDashboard
        guestMode={props.guestMode}
        budgets={props.budgets}
        userInfo={props.userInfo}
        isUserLogin={props.isUserLogin}
        SwitchView={props.SwitchView}
        isLoaded={props.isLoaded}
      />
      <ListBudgets
        budgets={props.budgets}
        setAddMode={setAddMode}
        SetShowAddBtn={SetShowAddBtn}
        isLoaded={props.isLoaded}
        BudgetUpdate={props.BudgetUpdate}
        BudgetDelete={props.BudgetDelete}
      />
      <AddBudgetsButton
        userInfo={props.userInfo}
        isUserLogin={props.isUserLogin}
        BudgetAdd={props.BudgetAdd}
        budgetStatus={props.budgetStatus}
        budgetMsg={props.budgetMsg}
        guestMode={props.guestMode}
        setAddMode={setAddMode}
        addMode={addMode}
        SetShowAddBtn={SetShowAddBtn}
        showAddBtn={showAddBtn}
      />
    </div>
  );
}
