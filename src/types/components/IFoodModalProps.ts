export interface IFoodModalProps {
	visible: boolean;
	onClose: () => void;
	onSubmit?: () => void;
	id: string;
}
