import axios from "axios";

const URL = "http://localhost:5000";

export const login = (loginForm) => axios.post(`${URL}/user/login`, loginForm);

export const register = (registerForm) =>
  axios.post(`${URL}/user`, registerForm);

export const getUser = (headers) => axios.get(`${URL}/user`, { headers });

export const getImage = (params) => axios.get(`${URL}/image`, { params });

export const getChannelsByGuildId = (guildId) =>
  axios.get(`${URL}/guild/${guildId}/getChannels`);
