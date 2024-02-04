import { useFormContext } from '@/hooks/use-context';
import { Modal } from 'antd';

const ContentPreview = ({
	contentPreview,
}: {
	contentPreview: string;
}) => {
	const { open, setOpen } = useFormContext();
	return (
		<Modal
			open={open}
			width={'90%'}
			closable
			centered
			onCancel={() => setOpen(false)}
			onOk={() => setOpen(false)}
			footer={(_, { OkBtn }) => (
				<>
					<OkBtn />
				</>
			)}>
			<section className='froala text-color-base w-full'>
				<div
					dangerouslySetInnerHTML={{
						__html: contentPreview,
					}}
				/>
			</section>
		</Modal>
	);
};

export default ContentPreview;
