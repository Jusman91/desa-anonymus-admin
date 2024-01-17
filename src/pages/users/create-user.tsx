import UserForm from '@/components/forms/user/user-form';
import { useFormName } from '@/hooks/use-form-name';

const CreateUser = () => {
	useFormName('create-user');
	return (
		<section className='relative'>
			<UserForm />
		</section>
	);
};

export default CreateUser;
