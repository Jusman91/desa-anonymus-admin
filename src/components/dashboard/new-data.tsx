import { isProduct } from '@/lib/utils/utils';
import { INewDataProps } from '@/types';
import { Avatar, Flex } from 'antd';

const NewData = ({ data }: INewDataProps) => {
	const title = isProduct(data) ? data.name : data.title;

	return (
		<Flex
			align='center'
			justify='space-between'
			className='text-color-base'>
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
						{title.length > 10
							? `${title.slice(0, 10)}...`
							: title}
					</small>
					<small>
						{isProduct(data)
							? data.category
							: data.category}
					</small>
				</Flex>
			</Flex>
			<span className='text-xs'>
				{isProduct(data)
					? `Rp. ${data.price}`
					: data.author.length > 8
						? `${data.author.slice(0, 8)}...`
						: data.author}
			</span>
		</Flex>
	);
};

export default NewData;
