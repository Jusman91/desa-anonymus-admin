import { cn } from '@/lib/utils';
import { IIcon } from '@/types';

const Icon = ({ children, className, ...props }: IIcon) => {
	return (
		<div
			{...props}
			className={cn(
				'flex justify-center items-center text-base',
				className,
			)}>
			{children}
		</div>
	);
};

export default Icon;
