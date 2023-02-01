import axios from "axios";

const URL = "http://localhost:5000";

export const login = (loginForm) => axios.post(`${URL}/user/login`, loginForm);

export const register = (registerForm) =>
  axios.post(`${URL}/user`, registerForm);

export const getUser = (headers) => axios.get(`${URL}/user`, { headers });

export const getGuilds = (userId) =>
  axios.get(`${URL}/user/${userId}/getGuilds`);

export const getChannelsByGuildId = (guildId) =>
  axios.get(`${URL}/guild/${guildId}/getChannels`);

export const createGuild = (data) =>
  axios({
    method: "post",
    url: `${URL}/guild/createGuild`,
    data: data.formData,
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: data.token,
    },
  });

export const getOneChannelById = (channelId) =>
  axios.get(`${URL}/channel/${channelId}`);

export const getMessage = (channelId) =>
  axios.get(`${URL}/channel/${channelId}/getMessages`);

// export const createChannel = (guildId) =>
//   axios.post(`${URL}/${guildId}/createGuild`);

export const createChannel = (data) => {
  return axios({
    method: "post",
    url: `${URL}/guild/${data.guildId}/createChannel`,
    data: { nameChannel: data.nameChannel, type: "GUILD_DM" },
    headers: {
      authorization: data.token,
    },
  });
};

export const uploadImage = (data) => {
  // console.log("api", data);
  return axios({
    method: "post",
    url: `${URL}/image/upImage`,
    data: data.formData,
    headers: {
      authorization: data.token,
    },
  });
};

export const addMemberServer = (data) => {
  // console.log("addMemberServer", data);
  return axios({
    method: "post",
    url: `${URL}/guild/${data.guildId}/addMember`,
    data: { id_fake: data.id_fake },
    headers: {
      authorization: data.token,
    },
  });
};
