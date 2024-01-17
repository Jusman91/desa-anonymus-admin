import { Flex, Spin } from 'antd';

const Loading = ({ loading }: { loading: boolean }) => {
	return loading ? (
		<div className='grid place-items-center min-h-full absolute top-0 bg-bkg-container opacity-60 z-10 w-full'>
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
