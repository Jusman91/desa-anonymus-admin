import { Flex, Spin } from 'antd';

const Loading = ({ loading }: { loading: boolean }) => {
	return loading ? (
		<div className='fixed left-0 top-0 grid place-items-center bg-bkg-container opacity-60 z-[999] w-full min-h-full'>
			<Flex vertical gap={6}>
				<Spin size='large'></Spin>
				<span className='text-color-base font-bold'>
					Loading...
				</span>
			</Flex>
		</div>
	) : null;
};

export default Loading;
