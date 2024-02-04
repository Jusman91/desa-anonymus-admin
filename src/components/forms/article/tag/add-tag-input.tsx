import { IAddTagInputProps } from '@/types';
import { Input } from 'antd';

const AddTagInput = ({
	inputValue,
	inputRef,
	handleInputChange,
	handleInputConfirm,
}: IAddTagInputProps) => {
	return (
		<Input
			ref={inputRef}
			placeholder='Type tags article'
			value={inputValue}
			onChange={handleInputChange}
			onPressEnter={handleInputConfirm}
		/>
	);
};

export default AddTagInput;
