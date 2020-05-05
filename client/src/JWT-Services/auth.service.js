import axios from "axios";
const API_URL = "http://localhost:8080/api/login";

class AuthService {
    login(username, password) {
        return axios.post(API_URL + "/signin", {
            username, password
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    register(username, password,email) {
        return axios.post(API_URL + "/signup", {
            username,
            password,
            email
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
export default new AuthService();
