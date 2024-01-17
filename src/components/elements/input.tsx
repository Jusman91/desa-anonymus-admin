import { cn } from '@/lib/utils/utils';
import { Input as AntdInp } from 'antd';
import type { InputProps } from 'antd';

const Input = ({ className, ...props }: InputProps) => {
	return (
		<AntdInp
			{...props}
			className={cn('focus:ring-0', className)}
		/>
	);
};

export default Input;
