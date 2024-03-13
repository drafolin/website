import GitHubIcon from "~/assets/icons/github-icon.svg";
import TelegramIcon from "~/assets/icons/telegram-icon.svg";
import DiscordIcon from "~/assets/icons/discord-icon.svg";
import MailIcon from "~/assets/icons/mail-icon.svg";
import MastodonIcon from "~/assets/icons/mastodon-icon.svg";
import "./style.scss";

export const Component = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<span>Find me here:</span>
			<nav>
				<ul>
					<li>
						<a href="https://github.com/drafolin" target="_blank">
							<img width="70" src={GitHubIcon} alt="My github page"/>
						</a>
					</li>
					<li>
						<a href="https://t.me/drafolin" target="_blank">
							<img width="70" src={TelegramIcon} alt="My telegram account"/>
						</a>
					</li>
					<li>
						<a
							href="https://discordapp.com/users/373515998000840714"
							target="_blank"
						>
							<img width="70" src={DiscordIcon} alt="My discord profile"/>
						</a>
					</li>
					<li>
						<a href="mailto:derg@drafolin.ch">
							<img width="70" src={MailIcon} alt="Email me!"/>
						</a>
					</li>
					<li>
						<a rel="me" href="https://derg.social/@drafolin" target="_blank">
							<img width="70" src={MastodonIcon} alt="My fediverse account"/>
						</a>
					</li>
				</ul>
			</nav>
			<span>
        This site is a work in progress! Some pages might not be existing for
        now...
      </span>
			<br/>
			<span>
        <a href="mailto:derg@drafolin.ch">
          &copy;2021-{currentYear} - Dråfølin
        </a>
      </span>
		</footer>
	);
};

export default Component;
