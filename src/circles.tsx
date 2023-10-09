import React, { useEffect, useRef } from 'react';
import { useMouse, useScroll } from 'ahooks';
import './circles.scss';

function Circles() {
	const blurSquare = useRef<HTMLDivElement>(null);
	const svgBoxSize = 200;

	const mouse = useMouse();
	const scroll = useScroll();

	const circles = useRef<{
		color: string;
		cx: number;
		cy: number;
		opacity: number;
	}[]>([]);

	const getRandomColor = () => {
		const hue = Math.random() * 360;  // random hue between 0 and 360
		const saturation = Math.random() * 20 + 80;  // random saturation between 80% and 100%

		// for lightness, let's choose a random value between 50% and 80%
		const lightness = Math.random() * 30 + 50;  // random lightness between 50% and 80%

		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	};

	const target = useRef({ x: 0, y: 0 });
	const current = useRef({ x: 0, y: 0 });

	useEffect(() => {
		for (let i = 0; i < 5; ++i) {
			const color = getRandomColor();

			// Create 5 segments for 5 circles (each segment is 2PI/5 radians wide)
			// For each circle, generate a random angle within its dedicated segment
			const segment = (2 * Math.PI) / 5;
			const angle = segment * i;

			const minRadius = 30; // minimum radius
			const maxRadius = 60; // maximum radius
			const randomRadius = minRadius + Math.random() * (maxRadius - minRadius);

			const cx = svgBoxSize / 2 + randomRadius * Math.cos(angle);
			const cy = svgBoxSize / 2 + randomRadius * Math.sin(angle);

			const opacity = Math.random();
			circles.current.push({ color, cx, cy, opacity });
		}

		let animationFrame: number | null = null;
		const loop = () => {
			// Linear interpolation (lerp) calculation for smooth transition
			const dX = target.current.x - current.current.x;
			const dY = target.current.y - current.current.y;
			current.current.x += dX * 0.05;
			current.current.y += dY * 0.05;

			if (blurSquare.current) {
				blurSquare.current.style.left = `${current.current.x}px`;
				blurSquare.current.style.top = `${current.current.y}px`;
			}

			animationFrame = requestAnimationFrame(loop);
		};
		loop();

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, []);

	useEffect(() => {
		target.current.x = isNaN(mouse.clientX) ? 0 : mouse.clientX;
		target.current.y = isNaN(mouse.clientY) ? 0 : mouse.clientY + (scroll?.top ?? 0);
	}, [mouse]);

	useEffect(() => {
		target.current.y = isNaN(mouse.clientY) ? 0 : mouse.clientY + (scroll?.top ?? 0);
	}, [scroll]);

	return (
		<div className={"color-blur"} ref={blurSquare}>
			<svg viewBox={`0 0 ${svgBoxSize} ${svgBoxSize}`} xmlns="http://www.w3.org/2000/svg">
				{circles.current.map((v, i) => <circle id={`circle${i + 1}`}
					key={i} cx={v.cx} cy={v.cy} r={40}
					fill={v.color} opacity={v.opacity} />)}
			</svg>
		</div>
	);
}

export default Circles;
