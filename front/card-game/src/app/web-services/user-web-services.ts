import {IUser} from "../interfaces/IUser";

export class UserWebServices {
  async create(user: IUser) {
    try {
      const reponse = await fetch("http://localhost:3010/",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user}),
      });
      return reponse.json()
    } catch (error) {
      console.log('error', error);
    }
  }
}
