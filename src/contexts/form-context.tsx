import { useToggle } from '@/hooks/use-toggle';
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
	const [open, setOpen] = useToggle(false);
	const [formName, setFormName] = useState('');
	const [objURL, setObjURL] = useState<UploadFile>();
	const [form] = Form.useForm();

	const valueContext = useMemo(() => {
		return {
			open,
			setOpen,
			form,
			setFormName,
			setObjURL,
			formName,
			objURL,
		};
	}, [form, formName, objURL, setOpen, open]);
	return (
		<FormContext.Provider value={valueContext}>
			{children}
		</FormContext.Provider>
	);
};
