import Button from '@/components/elements/button';
import { userFormValidation } from '@/validations/user-form-validation';
import { Form, Input, Select } from 'antd';
import { cn } from '@/lib/utils/utils';
import { useFormContext } from '@/hooks/use-context';
import FormItemUploadImg from '../form-item-upload-Img';
import { useParams } from 'react-router-dom';
import { useGetUser } from '@/lib/react-query/querys-mutations-user';
import { IUser } from '@/types';

const { Item } = Form;
const UserFormitem = () => {
	const { id } = useParams();
	const { formName } = useFormContext();
	const { data: user } = useGetUser(id || '');

	const updateUser = formName === 'update-user';

	return (
		<div
			className={cn(
				updateUser ? 'grid md:grid-cols-2 gap-4' : '',
			)}>
			{updateUser ? (
				<div className='relative overflow-hidden'>
					<FormItemUploadImg data={user as IUser} />
				</div>
			) : null}
			<div
				className={cn(
					'grid grid-cols-1 gap-y-0 gap-x-4 w-full',
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
						listItemHeight={10}
						listHeight={100}
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
