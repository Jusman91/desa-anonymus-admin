import {
	ArticlesLayout,
	AuthLayout,
	ProductsLayout,
	RootLayout,
	UsersLayout,
} from '@/layouts';
import {
	Articles,
	CreateArticle,
	CreateProduct,
	CreateUser,
	DeleteArticle,
	DeleteProduct,
	Home,
	Login,
	NotFound,
	Products,
	SingleArticle,
	SingleProduct,
	SingleUser,
	UpdateArticle,
	UpdateProduct,
	UpdateUser,
	Users,
} from '@/pages';
import { useRoutes } from 'react-router-dom';

const Routes = () => {
	const element = useRoutes([
		{
			path: 'auth',
			element: <AuthLayout />,
			children: [
				{
					path: 'login',
					element: <Login />,
				},
			],
		},
		{
			path: '',
			element: <RootLayout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: 'users',
					element: <UsersLayout />,
					children: [
						{
							path: '',
							element: <Users />,
						},
						{
							path: ':id/details',
							element: <SingleUser />,
						},
						{
							path: 'create',
							element: <CreateUser />,
						},
						{
							path: ':id/edit',
							element: <UpdateUser />,
						},
					],
				},

				{
					path: 'articles',
					element: <ArticlesLayout />,
					children: [
						{
							path: '',
							element: <Articles />,
						},
						{
							path: ':id/details',
							element: <SingleArticle />,
						},
						{
							path: 'create',
							element: <CreateArticle />,
						},
						{
							path: ':id/edit',
							element: <UpdateArticle />,
						},
						{
							path: ':id/delete',
							element: <DeleteArticle />,
						},
					],
				},
				{
					path: 'products',
					element: <ProductsLayout />,
					children: [
						{
							path: '',
							element: <Products />,
						},
						{
							path: ':id/details',
							element: <SingleProduct />,
						},
						{
							path: 'create',
							element: <CreateProduct />,
						},
						{
							path: ':id/',
							element: <UpdateProduct />,
						},
						{
							path: ':id/delete',
							element: <DeleteProduct />,
						},
					],
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
	]);
	return element;
};

export default Routes;
