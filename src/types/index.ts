import React from 'react';

export type DivElement =
	React.HTMLAttributes<HTMLDivElement>;
export interface IIcon extends DivElement {
	children: React.ReactNode;
	className?: string;
}
