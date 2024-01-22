import { IRulesUserForm } from '@/types';

export const userFormValidation: IRulesUserForm = {
	username: [
		{
			required: true,
			message: 'Please input your Username!',
		},
		{
			max: 15,
			message: 'Username is up to 15 characters',
		},
	],
	email: [
		{
			type: 'email',
			message: 'Invalid email',
		},
		{
			required: true,
			message: 'Please input your E-mail!',
		},
	],
	password: [
		{
			required: true,
			message: 'Please input your password!',
		},
		{
			min: 6,
			message: 'Password must be at least 6 characters',
		},
	],
};
