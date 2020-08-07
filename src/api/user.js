const apiUsers = {
  localIP: 'http://192.168.100.12',
  localURL: 'http://localhost:5000/api/users',
  Url: 'https://infinite-sea-11156.herokuapp.com/api/users',
  port: 5000,
  url: function () {
    // return this.localIP + ":" + this.port + "/api/users";
    // return this.localURL;
    return this.Url;
  },
  testUrl: 'http://localhost:5000/testglobal',
  //LOGIN
  Login: function (username, password, callback) {
    const url = this.url() + '/login';
    const fetchOption = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      credentials: 'include',
    };

    fetch(url, fetchOption)
      .then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            callback(result);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        this.ErrorHandler(error, (result) => {
          callback(result);
        });
      });
  },
  //USER REGISTER
  Register: function (user, callback) {
    const url = this.url() + '/register';
    const fetchOption = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isLogIn: true,
      }),
      credentials: 'include',
    };

    fetch(url, fetchOption)
      .then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            callback(result);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        this.ErrorHandler(error, (result) => {
          callback(result);
        });
      });
  },
  //UPDATE USER
  Update: function (user, callback) {
    const url = this.url() + '/update';
    const fetchOption = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isLogIn: true,
      }),
      credentials: 'include',
    };

    fetch(url, fetchOption)
      .then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            callback(result);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        this.ErrorHandler(error, (result) => {
          callback(result);
        });
      });
  },
  //GET INFO USER
  GetInfo: function (username, callback) {
    const url = this.url() + '/' + username;
    const fetchOption = {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
    };

    fetch(url, fetchOption)
      .then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            callback(result);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        this.ErrorHandler(error, (result) => {
          callback(result);
        });
      });
  },
  //USER LOGOUT
  Logout: function (callback) {
    const url = this.url() + '/logout';
    const fetchOption = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
    };

    fetch(url, fetchOption)
      .then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            callback(result);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        this.ErrorHandler(error, (result) => {
          callback(result);
        });
      });
  },
  //TEST API
  Test: function (callback) {
    const fetchOption = {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
    };

    fetch(this.testUrl, fetchOption)
      .then((res) => {
        if (res.ok) {
          res.json().then((result) => {
            callback(result);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        this.ErrorHandler(error, (result) => {
          callback(result);
        });
      });
  },
  //INTERNAL ERROR HANDLER
  ErrorHandler: function (error, callback) {
    if (error.message === '401') {
      callback({ status: false, message: 'Login Unsuccessful' });
    } else if ((error.message = 'Failed to fetch')) {
      callback({ status: false, message: 'Unable to contact server' });
    } else {
      callback({ status: false, message: 'Contact Developer' });
    }
  },
};

export default apiUsers;
