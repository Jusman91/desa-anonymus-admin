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
				'text-base font-semibold text-color-base w-fit',
				className,
			)}>
			{children}
		</h3>
	);
};

export default CustomTypography;
