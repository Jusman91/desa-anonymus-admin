import { useFormContext } from '@/hooks/use-context';
import {
	ITagProps,
	InputChange,
	OnPressEnter,
} from '@/types';
import { type InputRef } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useToggle } from '@/hooks/use-toggle';
import AddTagInput from './add-tag-input';
import AddTagButton from './add-tag-button';

const AddTag = ({ tags }: ITagProps) => {
	const { form } = useFormContext();
	const [inputVisible, setInputVisible] = useToggle(false);
	const [inputValue, setInputValue] = useState<string>('');
	const inputRef = useRef<InputRef>(null);

	useEffect(() => {
		if (inputVisible) {
			inputRef.current?.focus();
		}
	}, [inputVisible]);

	const showInput = () => {
		setInputVisible(true);
	};

	const handleInputChange = (e: InputChange) => {
		setInputValue(e.target.value);
	};

	const handleInputConfirm = (e: OnPressEnter) => {
		e.preventDefault();
		if (inputValue) {
			form.setFieldValue('tags', [...tags, inputValue]);
			setInputValue('');
			setInputVisible(false);
		}
	};

	return (
		<>
			{inputVisible ? (
				<AddTagInput
					inputRef={inputRef}
					inputValue={inputValue}
					handleInputChange={handleInputChange}
					handleInputConfirm={handleInputConfirm}
				/>
			) : (
				<AddTagButton onClick={showInput} />
			)}
		</>
	);
};

export default AddTag;
