import axios from "axios";

export function getRequest(restRequest) {
    if (restRequest.isNameAndDateValid()) {
        return getAccountByNameAndDate(restRequest);
    } else if (restRequest.isDateValid()) {
        return getAccountByDate(restRequest);
    } else if (restRequest.operatorName) {
        return getAccountByName(restRequest);
    } else {
        return getAccountById(restRequest);
    }
}

function getAccountById(restRequest) {
    if (!restRequest.id) {
        throw new Error("id is required");
    }
    restRequest.page--;
    return axios.get(process.env.REACT_APP_URL + "/api/v1/accounts?id=" + restRequest.id + "&page=" + restRequest.page);
}

function getAccountByName(restRequest) {
    if (!restRequest.id) {
        throw new Error("id is required");
    }

    restRequest.page--;
    return axios.get(
        process.env.REACT_APP_URL + "/api/v1/accounts?id=" + restRequest.id + "&page=" + restRequest.page,
        {
            params: {
                operatorName: restRequest.operatorName,
            }
        });
}

function getAccountByDate(restRequest) {
    if (!restRequest.id) {
        throw new Error("id is required");
    } else if (!restRequest.isDateValid()) {
        throw new Error("startDate and endDate are required");
    }

    restRequest.page--;
    return axios.get(
        process.env.REACT_APP_URL + "/api/v1/accounts?id=" + restRequest.id + "&page=" + restRequest.page,
        {
            params: {
                initialDate: restRequest.initialDate + "T00:00:00.000Z",
                finalDate: restRequest.finalDate + "T00:00:00.000Z",
            }
        });
}

function getAccountByNameAndDate(restRequest) {
    if (!restRequest.id) {
        throw new Error("id is required");
    } else if (!restRequest.isDateValid()) {
        throw new Error("startDate and endDate are required");
    }

    restRequest.page--;
    return axios.get(
        process.env.REACT_APP_URL + "/api/v1/accounts?id=" + restRequest.id + "&page=" + restRequest.page,
        {
            params: {
                initialDate: restRequest.initialDate + "T00:00:00.000Z",
                finalDate: restRequest.finalDate + "T00:00:00.000Z",
                operatorName: restRequest.operatorName,
            }
        });
}

class RestRequest {
    constructor(id,
                page,
                operatorName,
                initialDate,
                finalDate) {
        this.id = id;
        this.page = page;
        this.operatorName = operatorName;
        this.initialDate = initialDate;
        this.finalDate = finalDate;
    }


    isNameAndDateValid() {
        return this.operatorName && this.initialDate && this.finalDate;
    }

    isNameValid() {
        return this.operatorName;
    }

    isDateValid() {
        return this.initialDate && this.finalDate;
    }

}

export function factoryRestRequest(id, page, operatorName, startDate, endDate) {
    return new RestRequest(id, page, operatorName, startDate, endDate);
}
