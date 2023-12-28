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
	DeleteUser,
	Home,
	Login,
	NotFound,
	Products,
	Register,
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
					path: 'register',
					element: <Register />,
				},
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
							path: 'details/:id',
							element: <SingleUser />,
						},
						{
							path: 'create',
							element: <CreateUser />,
						},
						{
							path: 'edit/:id',
							element: <UpdateUser />,
						},
						{
							path: 'delete/:id',
							element: <DeleteUser />,
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
							path: 'details/:id',
							element: <SingleArticle />,
						},
						{
							path: 'create',
							element: <CreateArticle />,
						},
						{
							path: 'edit/:id',
							element: <UpdateArticle />,
						},
						{
							path: 'delete/:id',
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
							path: 'details/:id',
							element: <SingleProduct />,
						},
						{
							path: 'create',
							element: <CreateProduct />,
						},
						{
							path: 'edit/:id',
							element: <UpdateProduct />,
						},
						{
							path: 'delete/:id',
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
