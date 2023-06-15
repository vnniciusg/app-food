export interface ILoginFormProps {
	title: string;
	subtitle?: string;
	email: string;
	password: string;
	setEmail: (email: string) => void;
	setPassword: (password: string) => void;
}
