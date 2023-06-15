import { Dispatch, SetStateAction } from 'react';

export const formatDate = (date: Date): string => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
};

interface IUpdateDate {
	days: number;
	currentDate: Date;
	setCurrentDate: Dispatch<SetStateAction<Date>>;
}

export const updateDate = ({ days, currentDate, setCurrentDate }: IUpdateDate) => {
	const newDate = new Date(currentDate);
	newDate.setDate(newDate.getDate() + days);
	setCurrentDate(newDate);
};
