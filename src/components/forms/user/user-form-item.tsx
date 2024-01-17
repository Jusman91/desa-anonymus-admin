import Button from '@/components/elements/button';
import { useUserFormContext } from '@/hooks/use-context';
import { userFormValidation } from '@/validations/user-form-validation';
import { Form, Input, Select } from 'antd';
import InputProfile from './user-input-profile';
import { cn } from '@/lib/utils/utils';

const { Item } = Form;
const UserFormitem = () => {
	const { formName } = useUserFormContext();

	const updateUser = formName === 'update-user';

	return (
		<div
			className={cn(
				updateUser ? 'grid md:grid-cols-2 gap-4' : '',
			)}>
			<InputProfile />
			<div
				className={cn(
					'grid grid-cols-1 gap-y-0 md:gap-4 w-full',
					updateUser ? '' : 'md:grid-cols-2',
				)}>
				<Item
					name='username'
					label='Username'
					required
					rules={userFormValidation.username}
					hasFeedback>
					<Input
						placeholder='Type your username'
						className='text-sm md:text-lg h-16'
					/>
				</Item>
				<Item
					name='email'
					label='E-mail'
					required
					rules={userFormValidation.email}
					hasFeedback>
					<Input
						placeholder='Type your email'
						className='text-sm md:text-lg h-16'
					/>
				</Item>
				{updateUser ? null : (
					<Item
						name='password'
						label='Password'
						required
						rules={userFormValidation.password}
						hasFeedback>
						<Input.Password
							autoComplete='off'
							placeholder='Type your Password'
							className='text-sm md:text-lg h-16'
						/>
					</Item>
				)}
				<Item name='role' label='Role'>
					<Select
						placeholder='Select your role'
						className='text-sm md:text-lg h-16'>
						<Select.Option value='user'>User</Select.Option>
						<Select.Option value='admin'>
							Admin
						</Select.Option>
					</Select>
				</Item>
			</div>
			<Item
				className={cn(
					updateUser ? 'col-span-1 md:col-span-2' : '',
				)}>
				<Button
					type='primary'
					htmlType='submit'
					className='w-full h-16 text-sm md:text-lg'>
					{updateUser ? 'Update' : 'Create'}
				</Button>
			</Item>
		</div>
	);
};

export default UserFormitem;
