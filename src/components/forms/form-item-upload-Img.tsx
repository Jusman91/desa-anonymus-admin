import { Form, Upload, type UploadProps } from 'antd';
import Button from '../elements/button';
import Icon from '../elements/icon';
import {
	MdCameraEnhance,
	MdOutlineFileUpload,
} from 'react-icons/md';
import DEFAULT_USER_IMG from '@/assets/img/user_default.jpg';
import DEFAULT_THUMBNAIL from '@/assets/img/default_thumbnail.png';
import { cn } from '@/lib/utils/utils';
import { useFormContext } from '@/hooks/use-context';
import { useFormItemFileValidation } from '@/validations/form-item-upload-validation';
import { useForm } from '@/hooks/use-form';

interface IFormItemUploadImgProps<T> {
	data: T;
}
const { Item } = Form;
const FormItemUploadImg = <
	T extends { profilePic?: string; thumbnail?: string },
>({
	data,
}: IFormItemUploadImgProps<T>) => {
	const { uploadImageValidation } =
		useFormItemFileValidation();
	const { objURL, setObjURL, formName } = useFormContext();
	const { CleanUpObjURL } = useForm();

	const updateUser = formName === 'update-user';
	const currentProfilePic = data?.profilePic
		? data?.profilePic
		: DEFAULT_USER_IMG;

	const currentThumbnail = data?.thumbnail
		? data?.thumbnail
		: DEFAULT_THUMBNAIL;

	const currentImg = updateUser
		? currentProfilePic
		: currentThumbnail;

	const props: UploadProps = {
		beforeUpload: (file) => {
			setObjURL(file);
			return false;
		},
		fileList: [],
	};

	CleanUpObjURL();

	return (
		<>
			<img
				src={
					objURL && objURL instanceof File
						? URL.createObjectURL(objURL)
						: currentImg
				}
				alt=''
				className={cn(
					'w-full object-cover object-center rounded-xl block mb-2',
					updateUser ? 'h-[90%]' : 'h-60',
				)}
			/>
			<Item
				className={cn(
					updateUser
						? 'absolute left-1/2 -translate-x-1/2 bottom-0 w-full text-center'
						: '',
				)}
				name={updateUser ? 'profilePic' : 'thumbnail'}
				required
				rules={uploadImageValidation}>
				<Upload
					name={updateUser ? 'profilePic' : 'thumbnail'}
					{...props}
					className='cursor-pointer'>
					<Button
						type='dashed'
						icon={
							<Icon>
								{updateUser ? (
									<MdCameraEnhance />
								) : (
									<MdOutlineFileUpload />
								)}
							</Icon>
						}
						className={cn(objURL ? 'text-green-500' : '')}>
						{updateUser ? null : 'Select thumbnail'}
					</Button>
				</Upload>
			</Item>
		</>
	);
};

export default FormItemUploadImg;
