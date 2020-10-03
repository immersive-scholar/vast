import 'STYLES/style.scss';

import Router from 'JS/router.js';
import Navigation from 'JS/navigation.jsx';
import AutoplayControls from 'JS/autoplay.jsx';
import GridFitter from 'JS/grid-fitter.jsx';

const gridFitter = new GridFitter();

const isDemo = document.querySelector(`[data-demo]`);

if (isDemo) {
	const router = new Router();
	const nav = new Navigation({ router, visible: true });
	const autoplayControls = new AutoplayControls({ router });

	const demoUri = document
		.querySelector(`[data-demo]`)
		.getAttribute('data-demo');

	router.load(demoUri);
}
