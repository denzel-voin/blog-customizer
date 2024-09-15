import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { OnClick } from 'components/arrow-button/ArrowButton';

export const ArticleParamsForm = () => {
	const [isOpen, setIsToogle] = useState<boolean>(false);
	const toogleForm: OnClick = () => {
		setIsToogle(!isOpen);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} toggleForm={toogleForm} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
