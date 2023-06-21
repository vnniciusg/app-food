export interface IFoodModalProps {
	visible: boolean;
	onClose: () => void;
	onSubmit?: () => void;
	id: string;
	addFood: (nome: string, quantidade: string, qntdCalorica: string) => Promise<any>;
}
