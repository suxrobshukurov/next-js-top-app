import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
	children: ReactNode
}