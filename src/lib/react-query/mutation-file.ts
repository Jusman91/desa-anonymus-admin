import { updateFileFn, uploadFileFn } from '@/api/file';
import { useMessage } from '@/hooks/use-message';
import { IFileFn, IResponseError } from '@/types';
import { useMutation } from '@tanstack/react-query';

export function useUploadFile() {
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationFn: ({ url, file }: IFileFn) =>
			uploadFileFn({ url, file }),
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

export function useUpdateFile() {
	const { toastMessage } = useMessage();
	const mutate = useMutation({
		mutationFn: ({ url, file }: IFileFn) =>
			updateFileFn({ url, file }),
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
