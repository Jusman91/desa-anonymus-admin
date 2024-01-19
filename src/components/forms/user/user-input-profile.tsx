import { useUserFormContext } from '@/hooks/use-context';
import { useGetUser } from '@/lib/react-query/querys-mutations-user';
import DEFAULT_USER_IMG from '@/assets/img/user_default.jpg';
import { MdCameraEnhance } from 'react-icons/md';
import {
	Form,
	Upload,
	type UploadFile,
	type UploadProps,
} from 'antd';
import { useParams } from 'react-router-dom';
import Icon from '@/components/elements/icon';
import { userFormValidation } from '@/validations/user-form-validation';
import { useState } from 'react';

const { Item } = Form;

const InputProfile = () => {
	const { id } = useParams();
	const { formName } = useUserFormContext();
	const [image, setImage] = useState<UploadFile>();
	const { data: user } = useGetUser(id || '');

	const currentUserImg = user?.profilePic
		? user?.profilePic
		: DEFAULT_USER_IMG;

	const props: UploadProps = {
		beforeUpload: (file) => {
			setImage(file);
			return false;
		},
		fileList: [],
	};

	return formName === 'update-user' ? (
		<div className='relative w-full h-[90%] overflow-hidden'>
			<img
				src={
					image && image instanceof File
						? URL.createObjectURL(image)
						: currentUserImg
				}
				alt=''
				className='w-full h-full object-cover object-center rounded-xl block'
			/>
			<Item
				className='absolute left-1/2 -translate-x-1/2 top-0 w-full h-1/2 text-center'
				name='profilePic'
				required
				rules={userFormValidation.profilePic}
				hasFeedback>
				<Upload
					name='profilePic'
					{...props}
					className='cursor-pointer'>
					<Icon className='text-4xl text-fuchsia-800 hover:text-green-700 duration-300'>
						<MdCameraEnhance />
					</Icon>
				</Upload>
			</Item>
		</div>
	) : null;
};

export default InputProfile;
