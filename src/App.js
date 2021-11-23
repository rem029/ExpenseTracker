import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';

import Notifications from './components/misc/notifications';
import Header from './components/header/header';
import User from './views/User';
import Budgets from './views/Budgets';

import apiUsers from './api/user';
import apiBudgets from './api/budgets';
import apiPageViews from './api/pageview.js';

import genID from './utils/genID.js';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginMsg, setLoginMsg] = useState('');
  const [budgetStatus, setBudgetStatus] = useState(false);
  const [budgetMsg, setBudgetMsg] = useState('');
  // const [budgets, setBudgets] = useState(apiBudgets.tmpBudgetData);
  const [budgets, setBudgets] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [guestMode, setGuestMode] = useState(true);
  const [currentView, setCurrentView] = useState('Budgets');
  const [firstTimeLogIn, setFirstTimeLogIn] = useState(false);
  const [firstTimeBudgetLoad, setFirstTimeBudgetLoad] = useState(false);
  const [visited, setVisited] = useState(false);
  const [pageViewRes, setPageViewRes] = useState({});

  const [cookie, setCookie, removeCookie] = useCookies(['budget']);

  useEffect(() => {
    if (!firstTimeLogIn) {
      Login('RELOG', 'RELOG');
    }

    if (guestMode) {
      if (cookie.budget) {
        setBudgets(cookie.budget);
      }
    } else {
      if (!firstTimeBudgetLoad) {
        BudgetGetAll();
      }
      setFirstTimeBudgetLoad(true);
    }

    if (!visited) {
      apiPageViews.Add((result) => {
        setPageViewRes(result);
      });
      setVisited(true);
    }

    setFirstTimeLogIn(true);
  }, [budgets, guestMode, userInfo]);

  //COOKIES
  const SaveBudgetToCookies = (budgets) => {
    setCookie('budget', JSON.stringify(budgets), { maxAge: 1000 * 60 * 24 });
  };

  //USER FUNCTIONS
  const Login = (username, password) => {
    //Execute only if not blank
    if (username.length > 0 && password.length > 0) {
      setIsLoaded(false);
      setIsDisabled(true);
      apiUsers.Login(username, password, (result) => {
        //handle response here
        setLoginStatus(result.status);
        setLoginMsg(result.message);

        setUserInfo((val) => {
          if (result.user) {
            return result.user;
          } else {
            //IF USER IS NULL
            return null;
          }
        });
        setIsUserLogin(result.status);

        if (result.status === true) {
          setGuestMode(false);
          if (cookie.budget) {
            if (cookie.budget.length > 0) {
              BudgetAddMany(result.user, cookie.budget);
              removeCookie('budget');
            }
          } else {
          }
          SwitchView('Budgets');
        } else {
          setGuestMode(true);
        }

        setIsLoaded(true);
        setIsDisabled(false);
      });
    } else {
      setLoginStatus(false);
      setLoginMsg('Username or password is blank');
    }
  };

  const userRegister = (user) => {
    setIsLoaded(false);
    setIsDisabled(true);
    if (user.username.length > 0 || user.email.length > 0) {
      if (user.password === user.cpassword) {
        apiUsers.Register(user, (result) => {
          //handle response here
          if (result.status) {
            Login(user.username, user.password);
          } else {
            setLoginStatus(result.status);
            setIsUserLogin(result.status);
            setLoginMsg(result.message);
            setIsLoaded(true);
            setIsDisabled(false);
          }
        });
      } else {
        setLoginStatus(false);
        setLoginMsg('Password doest not match');
        setIsLoaded(true);
        setIsDisabled(false);
      }
    } else {
      setLoginStatus(false);
      setLoginMsg('Fields with (*) are required.');
      setIsLoaded(true);
      setIsDisabled(false);
    }
  };

  const userUpdate = (user) => {
    if (user.username.length > 0 && user.password.length > 0 && user.cpassword.length > 0 && user.email.length > 0) {
      if (user.password === user.cpassword) {
        setIsLoaded(false);
        setIsDisabled(true);
        apiUsers.Update(user, (result) => {
          setLoginStatus(result.status);
          setLoginMsg(result.message);
          if (result.user) {
            setUserInfo(result.user);
          }
          setIsLoaded(true);
          setIsDisabled(false);
        });
      } else {
        setLoginStatus(false);
        setLoginMsg('Please confirm your password');
        setIsLoaded(true);
        setIsDisabled(false);
      }
    } else {
      setLoginStatus(false);
      setLoginMsg('Username, email or password is blank');
      setIsLoaded(true);
      setIsDisabled(false);
    }
  };

  const Logout = () => {
    setIsLoaded(false);
    setIsDisabled(true);
    apiUsers.Logout((res) => {
      setLoginStatus(res.status);
      setLoginMsg(res.message);
      setIsLoaded(true);
      setIsDisabled(false);
      setIsUserLogin(false);
      setUserInfo(null);
      setBudgets([]);
      setGuestMode(true);
    });
  };

  const UpdateLoginStatus = (result) => {
    setLoginStatus(result.status);
    setLoginMsg(result.message);
  };

  const BudgetAdd = (budget) => {
    if (userInfo !== null && isUserLogin) {
      if (budget.type.length > 0 && budget.title.length > 0 && budget.type.length !== 'type') {
        setIsLoaded(false);
        setIsDisabled(true);
        budget = { ...budget, ...{ username: userInfo.username, userID: userInfo._id } };
        apiBudgets.Add(budget, (result) => {
          setBudgetStatus(result.status);
          setBudgetMsg(result.message);
          if (result.budgets) {
            setBudgets(result.budgets);
          } else {
            setBudgets(null);
          }
          setIsLoaded(true);
          setIsDisabled(false);
        });
      } else {
        setIsLoaded(true);
        setIsDisabled(false);
        setBudgetMsg('Fields with (*) are require and cannot be blank.');
        setBudgetStatus(false);
      }
    } else {
      if (guestMode) {
        if (budget.type.length > 0 && budget.title.length > 0 && budget.type.length !== 'type') {
          budget = { ...budget, ...{ username: 'guest', userID: 'guest', tmpID: genID() } };
          setBudgets((prevB) => {
            SaveBudgetToCookies(prevB.concat(budget));
            return prevB.concat(budget);
          });
          setBudgetMsg('Successfully added as Guest');
          setBudgetStatus(true);
        } else {
          setBudgetMsg('Fields with (*) are require and cannot be blank.');
          setBudgetStatus(false);
        }
      } else {
        setBudgetMsg('User is not logged in.');
        setBudgetStatus(false);
      }
      setIsLoaded(true);
      setIsDisabled(false);
    }
  };

  const BudgetAddMany = (userinfo, budgets) => {
    if (userinfo !== null) {
      setIsLoaded(false);
      setIsDisabled(true);

      apiBudgets.tmpBudgetData = [];

      budgets.forEach((budget) => {
        delete budget.tmpID;
        apiBudgets.tmpBudgetData = apiBudgets.tmpBudgetData.concat(budget);
      });

      apiBudgets.AddMany(userinfo, apiBudgets.tmpBudgetData, (result) => {
        setBudgetStatus(result.status);
        setBudgetMsg(result.message);
        if (result.budgets) {
          setBudgets(result.budgets);
        } else {
          setBudgets(null);
        }
        setIsLoaded(true);
        setIsDisabled(false);
      });

      setIsLoaded(true);
      setIsDisabled(false);
      setBudgetMsg('Fields with (*) are require and cannot be blank.');
      setBudgetStatus(false);
    } else {
      setIsLoaded(true);
      setIsDisabled(false);
    }
  };

  const BudgetUpdate = (budget, index) => {
    if (userInfo !== null && isUserLogin) {
      setIsLoaded(false);
      setIsDisabled(true);
      budget = { ...budget, ...{ username: userInfo.username, userID: userInfo._id } };
      apiBudgets.Update(budget, (result) => {
        setBudgetStatus(result.status);
        setBudgetMsg(result.message);
        if (result.budgets) {
          setBudgets(result.budgets);
        } else {
          setBudgets(null);
        }
        setIsLoaded(true);
        setIsDisabled(false);
      });
    } else {
      if (guestMode) {
        let copyBudgets = budgets;
        copyBudgets[index] = budget;
        setBudgets((prevB) => {
          prevB[index] = budget;
          SaveBudgetToCookies(prevB);
          return prevB;
        });
        setBudgetMsg('Successfully updated as Guest');
        setBudgetStatus(true);
      } else {
        setBudgetMsg('User is not logged in.');
        setBudgetStatus(false);
      }
      setIsLoaded(true);
      setIsDisabled(false);
    }
  };

  const BudgetDelete = (budget, tmpID) => {
    if (userInfo !== null && isUserLogin) {
      setIsLoaded(false);
      setIsDisabled(true);
      budget = { ...budget, ...{ username: userInfo.username } };

      apiBudgets.Delete(budget, (result) => {
        setBudgetStatus(result.status);
        setBudgetMsg(result.message);

        if (result.budgets) {
          setBudgets(result.budgets);
        } else {
          setBudgets(null);
        }
        setIsLoaded(true);
        setIsDisabled(false);
      });
    } else {
      if (guestMode) {
        setBudgets((prevB) => {
          let bCopy = prevB.filter((b) => {
            return b.tmpID !== tmpID;
          });
          SaveBudgetToCookies(bCopy);
          return bCopy;
        });
        setBudgetMsg('Successfully deleted as Guest');
        setBudgetStatus(true);
      } else {
        setBudgetMsg('User is not logged in.');
        setBudgetStatus(false);
      }
      setIsLoaded(true);
      setIsDisabled(false);
    }
  };

  const BudgetGetAll = () => {
    //Execute only if not blank
    if (userInfo !== null && isUserLogin) {
      setIsLoaded(false);
      setIsDisabled(true);
      apiBudgets.GetAll(userInfo.username, (result) => {
        //handle response here
        setBudgetStatus(result.status);
        setBudgetMsg(result.message);
        if (result.budgets) {
          setBudgets(result.budgets);
        } else {
          setBudgets(null);
        }
        //SET LOADED TRUE ONCE CALLBACK DONE
        setIsLoaded(true);
        setIsDisabled(false);
      });
    } else {
      if (guestMode) {
        if (cookie.budget) {
          setBudgets(cookie.budget);
        }
        setBudgetStatus(true);
        setBudgetMsg('You are in Guest Mode.');
      } else {
        setBudgets(null);
        setBudgetStatus(false);
        setBudgetMsg('User info is null');
      }
    }
  };

  // const UpdateNotifications = (notificationsNew) => {
  // 	setNotifications(notificationsNew.filter((val) => val.show === true));
  // };

  // const AddNotifications = (notificationsNew) => {
  // 	setNotifications(notifications.concat(notificationsNew));
  // };

  //**********************************************/

  const SwitchView = (view) => {
    if (!view) {
      if (currentView === 'Users') {
        setCurrentView('Budgets');
      } else {
        setCurrentView('Users');
      }
    } else {
      if (view === 'Budgets') {
        BudgetGetAll();
      }
      setCurrentView(view);
    }
  };

  return (
    <div>
      <Header SwitchView={SwitchView} currentView={currentView} />
      <div className="container-main">
        <Notifications />
        {currentView === 'Users' && (
          <User
            Login={Login}
            loginStatus={loginStatus}
            loginMsg={loginMsg}
            isLoaded={isLoaded}
            isDisabled={isDisabled}
            userInfo={userInfo}
            userRegister={userRegister}
            Logout={Logout}
            isUserLogin={isUserLogin}
            UpdateLoginStatus={UpdateLoginStatus}
            userUpdate={userUpdate}
          />
        )}
        {currentView === 'Budgets' && (
          <Budgets
            userInfo={userInfo}
            isUserLogin={isUserLogin}
            guestMode={guestMode}
            SwitchView={SwitchView}
            isLoaded={isLoaded}
            BudgetUpdate={BudgetUpdate}
            BudgetDelete={BudgetDelete}
            BudgetAdd={BudgetAdd}
            budgetStatus={budgetStatus}
            budgetMsg={budgetMsg}
            budgets={budgets}
          />
        )}
      </div>
    </div>
  );
}

export default App;
