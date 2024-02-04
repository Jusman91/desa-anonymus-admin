import Button from '@/components/elements/button';
import { MdAdd } from 'react-icons/md';

const AddTagButton = ({
	onClick,
}: {
	onClick: () => void;
}) => {
	return (
		<Button
			onClick={onClick}
			type='dashed'
			className='text-xs'
			icon={<MdAdd />}>
			Add Tag
		</Button>
	);
};

export default AddTagButton;
