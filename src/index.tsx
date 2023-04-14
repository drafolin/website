import { Link } from "react-router-dom";

const Index = () => {
	return (
		<>
			<div className="hero">
				<h1>
					Your local tech derg <strong>dindin</strong> here!
				</h1>
				<p>
					Hi and welcome to my website! Have a look around!
				</p>
				<Link to="/about">About me</Link>
			</div>
		</>
	);
};

export default Index;
