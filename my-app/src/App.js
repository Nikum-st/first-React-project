import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// export const App = () => {
// 	// Императивный код: Мы создаём экземпляр объекта `Date` и явно получаем текущий год
// 	const currentYear = new Date().getFullYear();

// 	return (
// 		// Декларативный код: Мы описываем, как должен выглядеть интерфейс
// 		<div className="App">
// 			<header className="App-header">
// 				{/* Декларативный код: Описание изображения и его стиля */}
// 				<img src={logo} className="App-logo" alt="logo" />

// 				{/* Декларативный код: Описание текста и его стиля */}
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>

// 				{/* Декларативный код*/}
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>

// 				{/* Декларативный код */}
// 				<p>{currentYear}</p>
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {
	// Императивный код: Мы создаём экземпляр объекта `Date` и явно получаем текущий год
	const currentYear = new Date().getFullYear();

	return createElement(
		// Декларативный код: Мы описываем, как должен выглядеть интерфейс
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement(
				/* Декларативный код: Описание изображения и его стиля */
				'img',
				{
					src: logo,
					className: 'App-logo',
					alt: 'logo',
				},
			),
			/* Декларативный код: Описание текста и его стиля */
			createElement('p', null, 'Edit <code>src/App.js</code> and save to reload.'),
			createElement(
				/* Декларативный код*/
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement(
				/* Декларативный код */
				'p',
				null,
				currentYear,
			),
		),
	);
};
