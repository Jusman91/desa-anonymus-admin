import { Form } from 'antd';
import Button from '../elements/button';

const { Item } = Form;
const FormItemButton = ({
	update,
}: {
	update: boolean;
}) => {
	return (
		<Item>
			<Button
				type='primary'
				htmlType='submit'
				className='w-full h-16 text-sm md:text-lg'>
				{update ? 'Update' : 'Create'}
			</Button>
		</Item>
	);
};

export default FormItemButton;
