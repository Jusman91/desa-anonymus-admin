import { cn } from '@/lib/utils';
import { DivElement } from '@/types';

const Icon = ({
	children,
	className,
	...props
}: DivElement) => {
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
