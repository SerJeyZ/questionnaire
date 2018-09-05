import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

//--textarea
const textarea = document.querySelector('textarea');
const initialHeight = 60;

const resize = () => {
	textarea.style.height = `${initialHeight}px`;
	const height = textarea.scrollHeight;
	textarea.style.height = `${height + initialHeight}px`;
};

resize();

textarea.addEventListener('input', resize);

//--slider
const scale = document.querySelector('.scale');
const arrow = document.querySelector('#slider-arrow');
const arrowWidth = 18;
const clickSkill = (e)=> {
	switch (e.target.id) {
		case 'null':
		arrow.style.left=(5-arrowWidth / 2) + 'px';
		break;
		case 'jun':
		arrow.style.left=(150-arrowWidth / 2) + 'px';
		break;
		case 'mid':
		arrow.style.left=(376-arrowWidth / 2) + 'px';
		break;
		case 'sen':
		arrow.style.left=(767-arrowWidth / 2) + 'px';
		break;
	}
};
scale.addEventListener('click', clickSkill);
