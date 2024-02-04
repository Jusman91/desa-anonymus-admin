import { Button } from 'antd';

const PreviewButton = ({
	onClick,
}: {
	onClick: () => void;
}) => {
	return (
		<Button
			type='dashed'
			className='text-xs mt-2'
			onClick={onClick}>
			Show Preview
		</Button>
	);
};

export default PreviewButton;
