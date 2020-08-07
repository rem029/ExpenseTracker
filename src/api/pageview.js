const apiPageViews = {
  localIP: 'http://192.168.100.12',
  localURL: 'http://localhost:5000/api/pageviews',
  Url: 'https://infinite-sea-11156.herokuapp.com/api/pageviews',
  port: 5000,
  url: function () {
    // return this.localIP + ":" + this.port + "/api/pageviews";
    // return this.localURL;
    return this.Url;
  },
  testUrl: 'http://localhost:5000/testglobal',
  Add: function (callback) {
    const url = this.url() + '/add';
    const fetchOption = {
      method: 'PUT',
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

export default apiPageViews;
