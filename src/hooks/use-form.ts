import { useEffect } from 'react';
import { FormName } from '@/types';
import { useFormContext } from './use-context';

export function useForm() {
	const { form, setFormName, setObjURL } = useFormContext();
	const FormName = (name: FormName) => {
		useEffect(() => {
			setFormName(name);
		}, [name]);
	};

	const SetFieldsValue = <T>(values: T) => {
		useEffect(() => {
			if (values) {
				form.setFieldsValue(values);
			}

			return () => {
				form.resetFields();
			};
		}, [values]);
	};

	const ResetFieldsValue = (isSuccess?: boolean) => {
		useEffect(() => {
			if (isSuccess) {
				form.resetFields();
				setObjURL(undefined);
			}
		}, [isSuccess]);
	};

	const CleanUpObjURL = () => {
		useEffect(() => {
			return () => {
				setObjURL(undefined);
			};
		}, []);
	};

	return {
		FormName,
		SetFieldsValue,
		ResetFieldsValue,
		CleanUpObjURL,
	};
}
