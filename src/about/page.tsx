import "./style.scss";
import Pfp from "../components/pfp";

const AboutPage = () => {
	const age = new Date(Date.now() - new Date("2006-10-05 00:00").valueOf()).getFullYear() - 1970;
	return <>
		<div className="hero">
			<div className="header">
				<div className="col">
					<Pfp
						size={256}
					/>
				</div>
				<div className="col">
					<h1>About Me</h1>
				</div>
			</div>
		</div>

		<div className="section">
			<h2>Introduction</h2>
			<p>
				Hello! I'm Dråfølin, a {age} year old computer science student from Switzerland.
				I've used to be a self-taught programmer, but I then officially started studying computer science to get a
				degree.
			</p>

			<h2>Computer science</h2>
			<p>
				I'm mostly interested in web development, but I also like to dabble in other areas of programming, like
				scripting to automate annoying and repetitive tasks.
			</p>

			<p>
				For the web development part, I have some full-stack experience. For the backend, I've worked with Node.js
				and
				Express, and for the frontend, I've worked with React and Vue.js. I've also worked with databases, like
				MySQL and Postgres.
			</p>

			<p>
				For the scripting part, I've worked with Go and Bash, and made multiple scripts, such as one for filling
				my
				work log automatically, one for installing my preferred applications on a new system, and one for killing
				useless
				heavy processes when I run resource-intensive tasks.
			</p>

			<h2>Hobbies</h2>

			<p>
				My work is also kind of a hobby for me. I love making stuff that ends up either useful or nice-looking.
			</p>

			<p>
				Besides work, I absolutely love dragons, so much that I ended up making myself an Original Character based on
				Wings of Fire's NightWings. Through this OC, I became part of the Furry Fandom, and found lots of people who
				had the same centers of interest I did.
			</p>

			<p>
				I also like reading, playing games and watching videos. Hey, I'm still a regular guy!
			</p>
		</div>
	</>;
};

export default AboutPage;
