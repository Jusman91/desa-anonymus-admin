import UserForm from '@/components/forms/user/user-form';
import { useForm } from '@/hooks/use-form';

const CreateUser = () => {
	const { FormName } = useForm();
	FormName('create-user');
	return (
		<section className='relative'>
			<UserForm />
		</section>
	);
};

export default CreateUser;
