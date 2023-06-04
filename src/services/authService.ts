import { IAuthData } from "../context/Auth";

const signIn = (email: string, password: string): Promise<IAuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123456') {
        resolve({
          token: JWTTokenMock,
          email: 'teste@gmail.com',
          nome : 'vinnicius',
        });
      } else {
        reject(new Error('credenciais incorretas'));
      }
    }, 1000);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';