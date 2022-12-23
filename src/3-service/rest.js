import axios from "axios";

export function getOperatorName() {
    return axios.get(process.env.REACT_APP_URL + "/api/v1/accounts")
}

export function getAccountById(id, page) {
    if (!id) {
        throw new Error("id is required");
    }
    page--;
    return axios.get(process.env.REACT_APP_URL + "/api/v1/accounts/number?id=" + id + "&page=" + page);
}

