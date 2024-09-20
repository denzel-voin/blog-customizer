import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { clsx } from 'clsx';

export type ArrowButtonProps = {
	isOpen: boolean;
	toggleForm: OnClick;
};

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({ isOpen, toggleForm }: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={toggleForm}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: isOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: isOpen,
				})}
			/>
		</div>
	);
};
