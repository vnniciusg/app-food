import { IUserData } from "../context/Auth";
import secret from "../../secret";

export const userService = {
  signUp: async (
    name: string,
    email: string,
    password: string,
    altura: string,
    peso: string
  ): Promise<IUserData> => {
    const response = await fetch(`${secret.BaseUrl}/api/user/register`, {
      method: "POST",
      body: JSON.stringify({ name, email, password, altura, peso }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const error = await response.json();
      console.log(error.message);
      throw new Error(error.message);
    }

    const userData: IUserData = await response.json();
    return userData;
  },
};
