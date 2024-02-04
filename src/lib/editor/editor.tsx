import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/plugins.pkgd.min.css';
import 'froala-editor/css/themes/dark.min.css';
import 'froala-editor/css/themes/royal.css';

import FroalaEditor from 'react-froala-wysiwyg';
import { useFroalaConfige } from './config';
import { useFormContext } from '@/hooks/use-context';
import PreviewButton from './preview-button';

const Editor = () => {
	const { form, setOpen } = useFormContext();
	const { config } = useFroalaConfige();

	const handleModelChange = (model: string) => {
		form.setFieldValue('content', model);
	};
	const content = form.getFieldValue('content');

	return (
		<div className='froala text-color-base w-full'>
			<FroalaEditor
				tag='textarea'
				config={config}
				model={content}
				onModelChange={handleModelChange}
			/>
			{content ? (
				<PreviewButton onClick={() => setOpen(true)} />
			) : null}
		</div>
	);
};

export default Editor;
