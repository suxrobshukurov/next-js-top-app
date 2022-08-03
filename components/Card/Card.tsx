import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from "classnames";

export const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => {
	return <>
		<div className={cn(styles.card, className, {
      [styles.white]: color == 'white',
      [styles.blur]: color == 'blur'
		})}
			{...props}
		>
			{children}
		</div>
	</>;
};