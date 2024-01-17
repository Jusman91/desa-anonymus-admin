import { useEffect } from 'react';
import { useUserFormContext } from './use-context';
import { UserFormNameProps } from '@/types';

export function useFormName(name: UserFormNameProps) {
	const { setFormName } = useUserFormContext();
	useEffect(() => {
		setFormName(name);
	}, [setFormName, name]);
}
