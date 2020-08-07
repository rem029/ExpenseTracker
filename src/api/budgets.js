const apiBudgets = {
	localIP: "http://192.168.100.12",
	localURL: "http://localhost:5000/api/budgets",
	Url: "https://infinite-sea-11156.herokuapp.com/api/budgets",
	port: 5000,
	tmpBudgetData: [],
	url: function () {
		// return this.localIP + ":" + this.port + "/api/budgets";
		// return this.localURL;
		return this.Url;
	},
	//ADD BUDGET
	Add: function (budget, callback) {
		const url = this.url() + "/add";
		const fetchOption = {
			method: "PUT",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				username: budget.username,
				userID: budget.userID,
				type: budget.type,
				title: budget.title,
				note: budget.note,
				amount: budget.amount,
			}),
			credentials: "include",
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
	//ADD BUDGET
	AddMany: function (userInfo, budgets, callback) {
		const url = this.url() + "/addmany";
		const fetchOption = {
			method: "PUT",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				username: userInfo.username,
				userID: userInfo._id,
				budgets: budgets,
			}),
			credentials: "include",
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
	//GET ALL BUDGET BY USERNAME
	GetAll: function (username, callback) {
		const url = this.url() + "/" + username;
		const fetchOption = {
			method: "GET",
			headers: { "Content-type": "application/json" },
			credentials: "include",
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
	//UPDATE BUDGET
	Update: function (budget, callback) {
		const url = this.url() + "/update";
		const fetchOption = {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				_id: budget._id,
				username: budget.username,
				userID: budget.userID,
				type: budget.type,
				title: budget.title,
				note: budget.note,
				amount: budget.amount,
			}),
			credentials: "include",
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
	//DELETE BUDGET
	Delete: function (budget, callback) {
		const url = this.url() + "/delete";
		const fetchOption = {
			method: "DELETE",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				_id: budget._id,
				username: budget.username,
			}),
			credentials: "include",
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
		if (error.message === "401") {
			callback({ status: false, message: "Login Unsuccessful" });
		} else if ((error.message = "Failed to fetch")) {
			callback({ status: false, message: "Unable to contact server" });
		} else {
			callback({ status: false, message: "Contact Developer" });
		}
	},
};

export default apiBudgets;
