import { uploadFile } from '@/api/upload-file';
import { useMessage } from '@/hooks/use-message';
import { IResponseError, IUploadFile } from '@/types';
import { useMutation } from '@tanstack/react-query';

export function useUploadFile() {
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationFn: ({ url, file }: IUploadFile) =>
			uploadFile({ url, file }),
		retry: 1,
		onError: (error) => {
			const myError = error as IResponseError;
			toastMessage({
				type: 'error',
				content: `${myError.status} ${myError.message}`,
			});
		},
	});

	return mutate;
}
