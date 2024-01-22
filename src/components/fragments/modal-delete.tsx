import { Button, Modal } from 'antd';
import Loading from '../loading/loading';
import { IModalDeleteProps } from '@/types';

const ModalDelete = ({
	loading,
	title,
	open,
	onCancel,
	onDelete,
}: IModalDeleteProps) => {
	return loading ? (
		<Loading loading={loading} />
	) : (
		<Modal
			title={title}
			open={open}
			centered
			onCancel={onCancel}
			footer={(_, { CancelBtn }) => (
				<div className='flex items-center justify-end gap-2'>
					<CancelBtn />
					<Button type='primary' danger onClick={onDelete}>
						Delete
					</Button>
				</div>
			)}
		/>
	);
};

export default ModalDelete;
