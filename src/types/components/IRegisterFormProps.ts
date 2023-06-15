export interface IRegisterFormProps {
	title: string;
	subtitle?: string;
	email: string;
	password: string;
	nome: string;
	confirmPassword: string;
	altura: string;
	peso: string;
	setPassword: (password: string) => void;
	setEmail: (email: string) => void;
	setNome: (name: string) => void;
	setConfirmPassword: (confirmPassword: string) => void;
	setAltura: (altura: string) => void;
	setPeso: (peso: string) => void;
	register: () => void;
}
