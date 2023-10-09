const AboutPage = () => {
	const age = new Date().getFullYear() - new Date("2006-10-05 00:00").getFullYear();
	return <>
		<div className="hero">
			<h1>About Me</h1>
			<h2>Hey there!</h2>
		</div>

		<div className="section">
			<p>
				I'm just a regular dragon who likes to code and make websites (mostly)!
			</p>
			<p>
				More precisely though, I'm a {age} year old Swiss computer science student who
				is a huge fan of dergs, which is why I made my sona one!
			</p>
			<p>
				It's a bit hard to describe myself, but I'll try my best!
			</p>
			<p>
				I'm a nightwing, which is a race that comes from the book series "Wings of Fire".
			</p>
			<p>
				I like programming in rust, typescript, javascript and c++.
			</p>
			<p>
				That's all I can think of for now, but I'll update this page when I think of
				something else!
			</p>
			<p>
				See you around!
			</p>
		</div>
	</>;
};

export default AboutPage;
