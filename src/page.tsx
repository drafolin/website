import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Index = () => {
	const [mousePos, setMousePos] = useState<{ x: number, y: number; }>({ x: 0, y: 0 });
	const [Dx, setDx] = useState(0);
	const [Dy, setDy] = useState(0);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener(
				'mousemove',
				handleMouseMove
			);
		};
	}, []);

	return (
		<>
			<div className="hero">
				<h1>
					Your local tech derg <strong>Dråfølin</strong> here!
				</h1>
				<p>
					Hi and welcome to my website! Have a look around!
				</p>
				<Link to="/about">About me</Link>
				<svg className="eyes" ref={el => {
					// el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
					if (!el) return;

					const { x, y, width, height } = el.getBoundingClientRect();
					const centerX = x + width / 2;
					const centerY = y + height / 2;
					const Dy = mousePos.y - centerY;
					const Dx = mousePos.x - centerX;

					const angle = Math.atan2(Dy, Dx);

					setDx(Math.cos(angle) * (Math.abs(Dx) / window.innerWidth * 5));
					setDy(Math.sin(angle) * (Math.abs(Dy) / window.innerHeight * 10));
				}} width="30" height="30" xmlns="http://www.w3.org/2000/svg">
					<ellipse cx="10" cy="15" rx="5px" ry="10px" fill="transparent" stroke="black" />
					<ellipse cx="20" cy="15" rx="5px" ry="10px" fill="transparent" stroke="black" />
					<circle cx={10 + Dx} cy={15 + Dy} r="3" fill="black" />
					<circle cx={20 + Dx} cy={15 + Dy} r="3" fill="black" />
				</svg>
			</div>
		</>
	);
};

export default Index;
