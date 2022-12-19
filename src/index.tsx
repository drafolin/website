import { Link } from "react-router-dom";

const Index = () => {
	return (
		<>
			<h1>
				Hello! <em>dindin|nibnib</em> here!
			</h1>

			<section>
				<h2>Introduction</h2>
				<p>
					Hey there! My name's <strong>dindin|nibnib</strong>.
					Though you can call me dindin, the "|nibnib" part is silent!
					I am an IT guy that programs loads of random things!
					The language I use the most is ts (please don't hurt me), though I also know python and c++
				</p>
				<p>
					On my irl life, the name's Odin, and I am a dragon lover.
					I am a furry, and my sona, of course, is a dragon.
					To be more precise, it's a nigthwing, and the name's Eyesopener!
					It could also be noted that I have ADHD!
					Oh, one last think while i'm at it, I am a furry, and I am proud of it!
				</p>
				<p>
					What is there else to say... Well, just to clarify, my pronouns are he/him,
					and my birthday's on the 5th of October.
					Finally, don't be shy to contact me, I don't bite, unless...
				</p>
			</section>

			<section className="projects">
				<h2>Projects</h2>
				<p>
					You can find all of my projects on <a href="https://www.github.com/dindin-nibnib">my GitHub page</a>!
				</p>
				<p>
					However, here are a few of my personal projects:
				</p>

				<ul>
					<li>
						<Link to="http://wifi.dindin.ch" target="_blank">
							<div>
								<h3 >
									wifi.dindin.ch
								</h3>
								<p >
									This website is a plain-text website without ssl certificate.
									You can use it to get redirected to a captive wifi portal
								</p>
							</div>
						</Link>
					</li>
				</ul>
			</section>
		</>
	);
};

export default Index;
