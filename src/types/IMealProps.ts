export interface IMealProps {
	id: string;
	nome: string;
	data: Date;
	foods: [];
}

export interface IMealContextType {
	meals: IMealProps[];
	addMeal?: (meal: IMealProps) => void;
}
