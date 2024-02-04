import { useFormContext } from '@/hooks/use-context';
import TagChild from './tag-child';
import AddTag from './add-tag';

const ItemTags = () => {
	const { form } = useFormContext();
	const tags = form.getFieldValue('tags') as string[];

	return (
		<div className='flex items-center'>
			<TagChild tags={tags} />
			<AddTag tags={tags} />
		</div>
	);
};

export default ItemTags;
