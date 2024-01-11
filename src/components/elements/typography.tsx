import { cn } from '@/lib/utils/utils';
import { TypogaraphyElement } from '@/types';

const CustomTypography = ({
	children,
	className,
	...props
}: TypogaraphyElement) => {
	return (
		<h3
			{...props}
			className={cn(
				'text-base md:text-lg font-semibold text-white w-fit',
				className,
			)}>
			{children}
		</h3>
	);
};

export default CustomTypography;
