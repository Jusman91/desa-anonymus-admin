import { useFormContext } from '@/hooks/use-context';
import { ITagProps } from '@/types';
import { Tag } from 'antd';

const TagChild = ({ tags }: ITagProps) => {
	const { form } = useFormContext();
	const handleClose = (removedTag: string) => {
		const newTags = tags.filter(
			(tag) => tag !== removedTag,
		);
		console.log(newTags);
		form.setFieldValue('tags', newTags);
	};

	const forMap = (tag: string) => {
		const tagElem = (
			<Tag
				color='magenta-inverse'
				closable
				onClose={() => {
					handleClose(tag);
				}}>
				{tag}
			</Tag>
		);
		return (
			<span key={tag} style={{ display: 'inline-block' }}>
				{tagElem}
			</span>
		);
	};

	const tagChild = tags.map(forMap);

	return (
		<div className='flex flex-wrap gap-y-2'>{tagChild}</div>
	);
};

export default TagChild;
