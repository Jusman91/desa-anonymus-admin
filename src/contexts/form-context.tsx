import { IFormContext } from '@/types';
import { Form, type UploadFile } from 'antd';
import {
	ReactNode,
	createContext,
	useMemo,
	useState,
} from 'react';

export const FormContext = createContext<
	IFormContext | undefined
>(undefined);

export const FormContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [formName, setFormName] = useState('');
	const [objURL, setObjURL] = useState<UploadFile>();
	const [form] = Form.useForm();

	const valueContext = useMemo(() => {
		return {
			form,
			setFormName,
			setObjURL,
			formName,
			objURL,
		};
	}, [form, formName, objURL]);
	return (
		<FormContext.Provider value={valueContext}>
			{children}
		</FormContext.Provider>
	);
};
