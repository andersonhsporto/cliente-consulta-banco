import axios from "axios";

export function getOperatorName() {
    return axios.get(process.env.REACT_APP_URL+"/api/v1/accounts")
}

export function getAccountById(id) {
    if (!id) {
        throw new Error("id is required");
    }
    return axios.get(process.env.REACT_APP_URL+"/api/v1/accounts/number?id="+id)
        .then(response => {
            return response;
        })
}