import React, {useEffect, useState} from "react";
import MD5 from "crypto-js/md5";
import {Outlet, Link} from "react-router-dom";
import Circles from "./circles";
import GitHubIcon from "~/assets/icons/github-icon.svg";
import TelegramIcon from "~/assets/icons/telegram-icon.svg";
import DiscordIcon from "~/assets/icons/discord-icon.svg";
import MailIcon from "~/assets/icons/mail-icon.svg";
import MastodonIcon from "~/assets/icons/mastodon-icon.svg";
import BSkyIcon from "~/assets/icons/bluesky-icon.png";

const MenuLinks = ({setMenu}: { setMenu: (state: boolean) => void; }) =>
  <>
    <ul>
      <li>
        <Link to="/" onClick={() => setMenu(false)}>Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMenu(false)}>About</Link>
      </li>
    </ul>
  </>;


const Root = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
  });

  const mailHash = MD5("derg@drafolin.ch".trim().toLowerCase()).toString()

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="header-wrapper">
          <nav>
            <div className="mobile-spacer"></div>
            <Link className="logo" to="/">
              <img
                src={`https://www.gravatar.com/avatar/${mailHash}?s=64`}
                alt="My pfp."
              />
              <span className="ml-4">Dråfølin</span>
            </Link>

            <MenuLinks setMenu={setMenu}/>

            <button
              onClick={() => setMenu(true)}
              aria-label="Menu"
              className="hamburger"
            >
              <svg version="1.1"
                   width="30" height="18"
                   xmlns="http://www.w3.org/2000/svg">
                <line x1={5} y1={1} x2={25} y2={1} strokeWidth={2}/>
                <line x1={5} y1={9} x2={25} y2={9} strokeWidth={2}/>
                <line x1={5} y1={17} x2={25} y2={17} strokeWidth={2}/>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <Circles/>

      <main>
        <div>
          <Outlet/>
        </div>
      </main>

      <footer>
        <span>Find me here:</span>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/drafolin"
                target="_blank">
                <img
                  width="70"
                  src={GitHubIcon}
                  alt="My github page"
                />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/drafolin"
                target="_blank">
                <img
                  width="70"
                  src={TelegramIcon}
                  alt="My telegram account"
                />
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/373515998000840714"
                target="_blank">
                <img
                  width="70"
                  src={DiscordIcon}
                  alt="My discord profile"
                />
              </a>
            </li>
            <li>
              <a href="mailto:derg@drafolin.ch">
                <img
                  width="70"
                  src={MailIcon}
                  alt="Email me!"
                />
              </a>
            </li>
            <li>
              <a
                rel="me"
                href="https://derg.social/@drafolin"
                target="_blank">
                <img
                  width="70"
                  src={MastodonIcon}
                  alt="My fediverse account"
                />
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/drafolin.ch"
                target="_blank">
                <img
                  src={BSkyIcon}
                  alt="My bluesky account!"
                />
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
						&copy;2021-2023 - Dråfølin
					</a>
				</span>
      </footer>
      <div className={`wrap-menu ${menu ? "active" : ""}`}>
        <button
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
          className="close"
        >
          <svg version="1.1"
               width="30" height="30"
               xmlns="http://www.w3.org/2000/svg">
            <line x1={2} y1={2} x2={28} y2={28} strokeWidth={2}/>
            <line x1={28} y1={2} x2={2} y2={28} strokeWidth={2}/>
          </svg>
        </button>
        <MenuLinks setMenu={setMenu}/>
      </div>
    </>
  );
};

export default Root;
