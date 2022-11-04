import axios from "axios";
// import { LoginRequest } from "../components/request/login-request";

export class userServices {
    async login(loginRequest) {
        debugger;
        const response = await axios.post(`https://localhost:44308/api/AuthenticateController/login`, loginRequest)
        return response;
    }

    logout =()=> {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userStatus');
    }


}