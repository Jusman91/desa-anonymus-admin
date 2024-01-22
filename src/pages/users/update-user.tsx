import UserForm from '@/components/forms/user/user-form';
import { useForm } from '@/hooks/use-form';

const UpdateUser = () => {
	const { FormName } = useForm();
	FormName('update-user');

	return (
		<section className='relative'>
			<UserForm />
		</section>
	);
};

export default UpdateUser;
