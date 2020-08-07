import React, { useState } from 'react';

import './budgets.css';

import AddBudgetsButton from '../components/budgets/add.budgets/add.budgets.button';
import ListBudgets from '../components/budgets/list.budgets/list.budgets';
import BudgetsDashboard from '../components/budgets/budgets.dashboard/budgets.dashboard';

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
