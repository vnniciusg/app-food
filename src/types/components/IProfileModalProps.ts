export interface IProfileModalProps {
	visible: boolean;
	onClose: () => void;
	onSubmit?: () => void;
	title: string;
	labelValue: string;
}
