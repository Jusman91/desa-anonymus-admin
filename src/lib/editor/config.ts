/* eslint-disable @typescript-eslint/no-explicit-any */
import { FroalaOptions } from 'froala-editor';
import {
	fontSize,
	toolbarButtons,
} from './toolbar-buttons';
import { useArticleHandlers } from '@/hooks/use-article-handlers';

export function useFroalaConfige() {
	const {
		handleImgUploadContent,
		handleImageErrorContent,
		handleRemoveStyleContent,
	} = useArticleHandlers();

	const config: Partial<FroalaOptions> = {
		placeholderText: 'Type your content here',
		toolbarSticky: true,
		toolbarStickyOffset: 50,
		toolbarButtons: toolbarButtons,
		quickInsertEnabled: false,
		fontSize: fontSize,
		tabIndex: 10,
		tabSpaces: 8,
		charCounterCount: false,
		imageAllowedTypes: ['jpeg', 'png', 'jpg'],
		imageMaxSize: 1 * 1024 * 1024,
		events: {
			'image.beforeUpload': function (this, files: any) {
				this.image.showProgressBar('loading');
				handleImgUploadContent(files).then((res) => {
					const existingImage = this.image.get();
					this.image.insert(res, true, {}, existingImage);
				});
				return false;
			},
			'image.error': function (this) {
				handleImageErrorContent(this);
			},
			'paste.beforeCleanup': function (html: string) {
				// Menghapus atribut style dari elemen HTML yang di-paste
				return handleRemoveStyleContent(html);
			},
		},
	};

	return { config };
}
