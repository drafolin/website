import React, { useEffect, useRef } from 'react';
import './circles.scss';

function Circles() {
	const blurSquare = useRef<HTMLDivElement>(null);

	const svgBoxSize = 200;

	const getRandomColor = () => {
		const hue = Math.random() * 360;  // random hue between 0 and 360
		const saturation = Math.random() * 20 + 80;  // random saturation between 80% and 100%

		// for lightness, let's choose a random value between 50% and 80%
		const lightness = Math.random() * 30 + 50;  // random lightness between 50% and 80%

		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	};


	useEffect(() => {
		const circles = blurSquare.current?.querySelectorAll('circle');
		circles?.forEach(circle => {
			const color = getRandomColor();
			(circle as SVGCircleElement).setAttribute('fill', color);
			(circle as SVGCircleElement).setAttribute('opacity', Math.random().toString());
		});
	}, []);

	useEffect(() => {
		let animationFrame: number | null = null;
		const target = { x: 0, y: 0 };
		const current = { x: 0, y: 0 };
		let scrollY = 0;

		const updateMousePos = (event: MouseEvent) => {
			target.x = event.clientX;
			target.y = event.clientY + scrollY;
		};

		const updateOnScroll = (ev: Event) => {
			target.y += window.scrollY - scrollY;
			scrollY = window.scrollY;
		};

		const loop = () => {
			// Linear interpolation (lerp) calculation for smooth transition
			current.x = current.x + (target.x - current.x) * 0.05;
			current.y = current.y + (target.y - current.y) * 0.05;

			if (blurSquare.current) {
				blurSquare.current.style.left = `${current.x}px`;
				blurSquare.current.style.top = `${current.y}px`;
			}

			animationFrame = requestAnimationFrame(loop);
		};

		loop();

		document.addEventListener('mousemove', updateMousePos);
		document.addEventListener('scroll', updateOnScroll);

		return () => {
			document.removeEventListener('mousemove', updateMousePos);

			if (animationFrame) cancelAnimationFrame(animationFrame);
		};
	}, []);

	return (
		<div className={"color-blur"} ref={blurSquare}>
			<svg viewBox={`0 0 ${svgBoxSize} ${svgBoxSize}`} xmlns="http://www.w3.org/2000/svg">
				{[...Array(5)].map((_, i) => {
					// Create 5 segments for 5 circles (each segment is 2PI/5 radians wide)
					// For each circle, generate a random angle within its dedicated segment
					const segment = (2 * Math.PI) / 5;
					const angle = segment * i;

					const minRadius = 30; // minimum radius
					const maxRadius = 60; // maximum radius
					const randomRadius = minRadius + Math.random() * (maxRadius - minRadius);

					const cx = svgBoxSize / 2 + randomRadius * Math.cos(angle);
					const cy = svgBoxSize / 2 + randomRadius * Math.sin(angle);

					return <circle id={`circle${i + 1}`} key={i} cx={cx} cy={cy} r={40} />;
				})}
			</svg>
		</div>
	);
}

export default Circles;
