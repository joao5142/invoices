import axios from "axios";

export const api = axios.create({
	baseURL: "https://invoice-app-iewu.onrender.com/api/", //change to your API URL here
});
