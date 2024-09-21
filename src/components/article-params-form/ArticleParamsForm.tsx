import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import React, { useRef, useState } from 'react';
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
import { clsx } from 'clsx';
import { Text } from 'components/text';
import { useClose } from 'components/select/hooks/useClose';

interface ArticleParamsFormProps {
	applyNewState: (newState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	applyNewState,
}: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [form, setForm] = useState<ArticleStateType>(defaultArticleState);
	const formRef = useRef<HTMLDivElement>(null);

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
		applyNewState(defaultArticleState);
	};

	const toggleForm: OnClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		applyNewState(form);
	};

	useClose({
		isOpen: isMenuOpen,
		onClose: toggleForm,
		rootRef: formRef,
	});

	return (
		<div ref={formRef}>
			<ArrowButton isOpen={isMenuOpen} toggleForm={toggleForm} />
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} dynamic={false} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title={'Шрифт'}
						selected={form.fontFamilyOption}
						onChange={(selected) => handleChange(selected, 'fontFamilyOption')}
						options={fontFamilyOptions}
					/>
					<RadioGroup
						title={'Размер шрифта'}
						selected={form.fontSizeOption}
						onChange={(selected) => handleChange(selected, 'fontSizeOption')}
						options={fontSizeOptions}
						name={'Выбрать'}
					/>
					<Select
						title={'Цвет шрифта'}
						selected={form.fontColor}
						onChange={(selected) => handleChange(selected, 'fontColor')}
						options={fontColors}
					/>
					<Separator />
					<Select
						title={'Цвет фона'}
						selected={form.backgroundColor}
						onChange={(selected) => handleChange(selected, 'backgroundColor')}
						options={backgroundColors}
					/>
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
		</div>
	);
};
