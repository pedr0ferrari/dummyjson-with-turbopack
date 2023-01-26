import { UserType } from "@/interface/UserType";
import axios from "axios";

export const getUsers = async () => {
  let filteredUsers: UserType[] = [];

  const response = await axios.get("https://dummyjson.com/users");
  filteredUsers = response.data.users.map((user: any) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.username,
      birthDate: user.birthDate,
      email: user.email,
      phone: user.phone,
      avatarURL: user.image,
    };
  });

  console.log("response", filteredUsers);

  return filteredUsers;
};
