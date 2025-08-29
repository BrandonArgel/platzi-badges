const BASE_URL = "https://api.brandonargel.com/api/badges";

async function callApi(endpoint, options = {}) {
	options.headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	const url = BASE_URL + endpoint;
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}

const api = {
	badges: {
		list() {
			return callApi("/");
		},

		create(badge) {
			return callApi(`/`, {
				method: "POST",
				body: JSON.stringify(badge),
			});
		},

		read(badgeId) {
			return callApi(`/${badgeId}`);
		},

		update(badgeId, updates) {
			return callApi(`/${badgeId}`, {
				method: "PUT",
				body: JSON.stringify(updates),
			});
		},
		// Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
		remove(badgeId) {
			return callApi(`/${badgeId}`, {
				method: "DELETE",
			});
		},
	},
};

export default api;
