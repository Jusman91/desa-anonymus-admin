import { isProduct } from '@/lib/utils';
import { INewDataProps } from '@/types';
import { Avatar, Flex } from 'antd';

const NewData = ({ data }: INewDataProps) => {
	return (
		<Flex align='center' justify='space-between'>
			<Flex gap={10}>
				<Avatar
					src={
						isProduct(data)
							? data.thumbnail
							: data.thumbnail
					}
				/>
				<Flex vertical>
					<small className='font-bold'>
						{isProduct(data) ? data.name : data.title}
					</small>
					<small>
						{isProduct(data)
							? data.category
							: data.category}
					</small>
				</Flex>
			</Flex>
			<span>
				{isProduct(data)
					? `Rp. ${data.price}`
					: data.author}
			</span>
		</Flex>
	);
};

export default NewData;
