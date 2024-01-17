import { IRulesFormUser } from '@/types';

export const userFormValidation: IRulesFormUser = {
	profilePic: [
		{
			validator(_, value) {
				return new Promise((resolve, reject) => {
					const fileType = value?.file?.type;
					const allowedTypes = [
						'image/jpeg',
						'image/png',
						'image/jpg',
					];
					if (allowedTypes.includes(fileType)) {
						resolve(value);
					} else {
						reject(
							new Error(
								`Invalid file type ${fileType}. Invalid file type. Please upload a JPG, PNG, or JPEG file.`,
							),
						);
					}
				});
			},
		},
	],
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
