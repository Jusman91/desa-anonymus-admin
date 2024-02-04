import { IRulesArticleForm } from '@/types';

export const articleFormValidation: IRulesArticleForm = {
	title: [
		{
			required: true,
			message: 'Please type article title',
		},
		{
			min: 10,
			message:
				'article title must be at least 10 characters',
		},
		{
			max: 50,
			message: 'article title cannot exceed 50 characters',
		},
	],
	author: [
		{
			required: true,
			message: 'Please type article author name',
		},
		{
			min: 3,
			message: 'Author name must be at least 3 characters',
		},
		{
			max: 15,
			message: 'Author name cannot exceed 50 characters',
		},
	],
	description: [
		{
			required: true,
			message: 'Please type description',
		},
		{
			min: 10,
			message: 'Description must be at least 10 characters',
		},
		{
			max: 200,
			message: 'Description cannot exceed 200 characters',
		},
	],
	category: [
		{
			required: true,
			message: 'Please select article category',
		},
	],
	content: [
		{
			required: true,
			message: 'Please type content',
		},
	],
};
