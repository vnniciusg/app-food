import { IAuthState } from "./IAuthState";
import { ILoginProps } from "./ILoginProps";
import { IRegisterProps } from "./IRegisterProps";

export interface IAuthProps {
  authState?: IAuthState;
  onRegister?: (registerProps: IRegisterProps) => Promise<any>;
  onLogin?: (loginProps: ILoginProps) => Promise<any>;
  onLogout?: () => Promise<any>;
}
