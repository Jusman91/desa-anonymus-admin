import { useUserHandlers } from '@/hooks/use-user-handlers';
import {
	useCreateUser,
	useUpdateUser,
} from '@/lib/react-query/querys-mutations-user';
import {
	ICreateUser,
	IUpdateUser,
	IUserFormContext,
} from '@/types';
import { Form } from 'antd';
import {
	ReactNode,
	createContext,
	useCallback,
	useEffect,
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
	const [open, setOpen] = useState(false);
	const [id, setId] = useState('');
	const [formName, setFormName] = useState('');
	const [form] = Form.useForm();
	// const { handleSubmit } = useUserHandlers();
	const {
		mutate: createUser,
		isPending: createUserIsPending,
		isSuccess,
	} = useCreateUser();
	const {
		mutate: updateUser,
		isPending: updateUserIsPending,
	} = useUpdateUser();
	const handleSubmit = useCallback(
		(value: ICreateUser | IUpdateUser) => {
			if (id && 'profilePic' in value) {
				updateUser({ id, formData: value });
			} else {
				createUser(value as ICreateUser);
			}
		},
		[createUser, updateUser, id],
	);

	useEffect(() => {
		if (isSuccess) {
			form.resetFields();
		}
	}, [form, isSuccess]);

	const valueContext = useMemo(() => {
		return {
			form,
			handleSubmit,
			createUserIsPending,
			updateUserIsPending,
			setFormName,
			formName,
			open,
			setOpen,
			id,
			setId,
		};
	}, [
		form,
		formName,
		handleSubmit,
		createUserIsPending,
		updateUserIsPending,
		id,
		open,
	]);
	return (
		<UserFormContext.Provider value={valueContext}>
			{children}
		</UserFormContext.Provider>
	);
};
