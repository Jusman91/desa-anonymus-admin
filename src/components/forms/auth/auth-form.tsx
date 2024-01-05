import { Form } from 'antd';
import AuthFormItems from './auth-form-items';
import AuthFormHeader from './auth-form-header';
import { useAuthFormContext } from '@/hooks/use-context';
import { ILoginInput } from '@/types';

const AuthForm = () => {
	const { handleSubmit } = useAuthFormContext();
	const initialValues: ILoginInput = {
		email: '',
		password: '',
	};

	return (
		<Form
			layout='vertical'
			autoComplete='off'
			className='shadow-form p-5 w-80 rounded-[20px]'
			initialValues={initialValues}
			onFinish={handleSubmit}>
			<AuthFormHeader />
			<AuthFormItems />
		</Form>
	);
};

export default AuthForm;
