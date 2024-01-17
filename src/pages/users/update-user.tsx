import UserForm from '@/components/forms/user/user-form';
import { useFormName } from '@/hooks/use-form-name';

const UpdateUser = () => {
	useFormName('update-user');

	return (
		<section className='relative'>
			<UserForm />
		</section>
	);
};

export default UpdateUser;
