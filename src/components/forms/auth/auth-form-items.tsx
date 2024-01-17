import Button from '@/components/elements/button';
import { useAuthFormContext } from '@/hooks/use-context';
import { authFormLoginValidations } from '@/validations/auth-form-validation';
import { Form, Input, Spin } from 'antd';

const { Item } = Form;
const AuthFormItems = () => {
	const { loginIsPending } = useAuthFormContext();

	return (
		<>
			<Item
				name='email'
				label='E-mail'
				required
				rules={authFormLoginValidations.email}
				hasFeedback>
				<Input placeholder='Type your email' />
			</Item>
			<Item
				name='password'
				label='Password'
				required
				rules={authFormLoginValidations.password}
				hasFeedback>
				<Input.Password
					autoComplete='off'
					placeholder='Type your password'
				/>
			</Item>
			<Item>
				{loginIsPending ? (
					<Spin tip='Loading...' className='text-white'>
						<div />
					</Spin>
				) : (
					<Button
						type='primary'
						htmlType='submit'
						className='w-full shadow-none'>
						Login
					</Button>
				)}
			</Item>
		</>
	);
};

export default AuthFormItems;
