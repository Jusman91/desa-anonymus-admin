import { MessageArgsProps, message } from 'antd';
import { useCallback } from 'react';

export function useMessage() {
	const toastMessage = useCallback(
		(options: MessageArgsProps) => {
			message.open({
				...options,
			});
		},
		[],
	);
	return { toastMessage };
}
