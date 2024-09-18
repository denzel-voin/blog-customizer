import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import React, { useState } from 'react';
import { OnClick } from 'components/arrow-button/ArrowButton';
import { Select } from 'components/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';

interface ArticleParamsFormProps {
	applyNewState: (newState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	applyNewState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsToogle] = useState<boolean>(false);
	const [form, setForm] = useState<ArticleStateType>(defaultArticleState);

	const handleChange = (
		selected: OptionType,
		changeOption: keyof ArticleStateType
	) => {
		setForm((prevState) => ({
			...prevState,
			[changeOption]: selected,
		}));
	};

	const resetForm = () => {
		setForm(defaultArticleState);
	};

	const toggleForm: OnClick = () => {
		setIsToogle(!isOpen);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		applyNewState(form);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} toggleForm={toggleForm} />
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Select
						title={'Шрифт'}
						selected={form.fontFamilyOption}
						onChange={(selected) => handleChange(selected, 'fontFamilyOption')}
						options={fontFamilyOptions}
					/>
					<br />
					<RadioGroup
						title={'Размер шрифта'}
						selected={form.fontSizeOption}
						onChange={(selected) => handleChange(selected, 'fontSizeOption')}
						options={fontSizeOptions}
						name={'Выбрать'}
					/>
					<br />
					<Select
						title={'Цвет шрифта'}
						selected={form.fontColor}
						onChange={(selected) => handleChange(selected, 'fontColor')}
						options={fontColors}
					/>
					<br />
					<Separator />
					<br />
					<Select
						title={'Цвет фона'}
						selected={form.backgroundColor}
						onChange={(selected) => handleChange(selected, 'backgroundColor')}
						options={backgroundColors}
					/>
					<br />
					<Select
						title={'ширина контента'}
						selected={form.contentWidth}
						onChange={(selected) => handleChange(selected, 'contentWidth')}
						options={contentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button onClick={resetForm} title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
