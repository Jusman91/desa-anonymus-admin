import { IUserFormContext } from '@/types';
import { Form } from 'antd';
import {
	ReactNode,
	createContext,
	useMemo,
	useState,
} from 'react';

export const UserFormContext = createContext<
	IUserFormContext | undefined
>(undefined);

export const UserFormContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [formName, setFormName] = useState('');
	const [form] = Form.useForm();

	const valueContext = useMemo(() => {
		return {
			form,
			setFormName,
			formName,
		};
	}, [form, formName]);
	return (
		<UserFormContext.Provider value={valueContext}>
			{children}
		</UserFormContext.Provider>
	);
};
