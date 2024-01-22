import { IRulesProductForm } from '@/types';

export const productFormValidation: IRulesProductForm = {
	name: [
		{
			required: true,
			message: 'Please type product name',
		},
		{
			min: 3,
			message: 'Product name must be at least 3 characters',
		},
		{
			max: 50,
			message: 'Product name cannot exceed 50 characters',
		},
	],
	price: [
		{
			type: 'number',
			message: 'Please enter number',
		},
		{
			required: true,
			message: 'Please enter product price',
		},
	],
	category: [
		{
			required: true,
			message: 'Please select product category',
		},
	],
	contact: [
		{
			required: true,
			message: 'Please type contact',
		},
		{
			min: 10,
			message: 'Contact must be at least 10 numbers',
		},
		{
			max: 15,
			message: 'Contact cannot exceed 15 numbers',
		},
		{
			validator: (_, value) => {
				return new Promise((resolve, reject) => {
					if (!value.startsWith('+62')) {
						reject('Contact must start with +62');
					} else {
						resolve(value);
					}
				});
			},
		},
	],
	description: [
		{
			required: true,
			message: 'Please type description',
		},
		{
			max: 200,
			message: 'Description cannot exceed 200 characters',
		},
	],
	location: [
		{
			required: true,
			message: 'Please type location',
		},
		{
			max: 100,
			message: 'Location cannot exceed 100 characters',
		},
	],
	inStock: [
		{
			type: 'boolean',
			message: 'Invalid type, please select true or false',
		},
		{
			required: true,
			message: 'Please select in-stoct',
		},
	],
};
