import { IAuthState } from "./IAuthState";
import { ILoginProps } from "./ILoginProps";
import { IRegisterProps } from "./IRegisterProps";

export interface IAuthProps {
  authState?: IAuthState;
  onRegister?: (props: IRegisterProps) => Promise<any>;
  onLogin?: (props: ILoginProps) => Promise<any>;
  onLogout?: () => Promise<any>;
}
