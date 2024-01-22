import { useFormContext } from '@/hooks/use-context';
import type { Rule } from 'antd/es/form';

export function useFormItemFileValidation() {
	const { formName } = useFormContext();
	const updateUser = formName === 'update-user';
	const uploadImageValidation: Rule[] = [
		{
			required: updateUser ? false : true,
			message: 'Please select an image',
		},
		{
			validator: (_, value) => {
				return new Promise((resolve, reject) => {
					const fileType = value?.file?.type;
					const fileSize = value?.file?.size;
					const allowedTypes = [
						'image/jpeg',
						'image/png',
						'image/jpg',
					];
					const maxSize = 1 * 1024 * 1024;

					if (
						fileType &&
						!allowedTypes.includes(fileType)
					) {
						reject(
							new Error(
								`Invalid file type ${fileType}. Invalid file type. Please upload a JPG, PNG, or JPEG file.`,
							),
						);
					}

					if (fileSize > maxSize) {
						reject(new Error('Maximum file size is 1MB'));
					}

					resolve(value);
				});
			},
		},
	];

	return {
		uploadImageValidation,
	};
}
