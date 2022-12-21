import axios from "axios";

export function getOperatorName() {
    console.log(axios.get(process.env.REACT_APP_URL+"/api/v1/accounts"))
}