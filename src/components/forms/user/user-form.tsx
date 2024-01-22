import { Form } from 'antd';
import UserFormitem from './user-form-item';
import { useParams } from 'react-router-dom';
import { useGetUser } from '@/lib/react-query/querys-mutations-user';
import { useUserHandlers } from '@/hooks/use-user-handlers';
import Loading from '@/components/loading/loading';
import { useFormContext } from '@/hooks/use-context';
import { IUser } from '@/types';
import { useForm } from '@/hooks/use-form';

const UserForm = () => {
	const initialValues = {
		username: '',
		email: '',
		password: '',
		role: 'user',
	};

	const { id } = useParams();
	const { data: user } = useGetUser(id || '');
	const { form, formName } = useFormContext();
	const { SetFieldsValue } = useForm();
	const { handleSubmit, loading } = useUserHandlers();

	SetFieldsValue<IUser>(user as IUser);

	return (
		<div className='grid place-items-center min-h-screen max-w-4xl w-full mx-auto'>
			<Loading loading={loading} />
			<Form
				name={formName}
				form={form}
				className='w-full'
				layout='vertical'
				autoComplete='off'
				initialValues={initialValues}
				onFinish={handleSubmit}>
				<UserFormitem />
			</Form>
		</div>
	);
};

export default UserForm;
