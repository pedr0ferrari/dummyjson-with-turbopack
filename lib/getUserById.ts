import axios from "axios";

export const getUserById = async (userId: string) => {
  if (userId) {
    const response = await axios.get(`https://dummyjson.com/users/${userId}`);
    const user = {
      ...response.data,
      userName: response.data.username,
      avatarURL: response.data.image,
    };
    console.log("user", user);
    return user;
  }
};
