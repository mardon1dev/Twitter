import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { AiOutlineMore } from "react-icons/ai";
import {RxTwitterLogo} from "react-icons/rx";
import Author from "./author.jpg";

import './menubar.scss';
const MenuBar = () => {
  return (
    <div className="menu">
        <div className="menubar pt-3">
            <ul className="menubar__list">
                <li className="menu__list--link mb-3">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <FaTwitter/>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <FaHome/>
                        <span className="ms-2">Home</span>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <FaHashtag/>
                        <span className="ms-2">Hashtag</span>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <FaBell/>
                        <span className="ms-2">Notifications</span>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <AiOutlineMessage/>
                        <span className="ms-2">Messages</span>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <FaBookmark/>
                        <span className="ms-2">Bookmarks</span>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <FaRegListAlt/>
                        <span className="ms-2">Lists</span>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <CgProfile/>
                        <span className="ms-2">Profile</span>
                    </a>
                </li>
                <li className="menu__list--link">
                    <a href="https://en.wikipedia.org/wiki/Kunu">
                        <CgMoreO/>
                        <span className="ms-2">More</span>
                    </a>
                </li>
            </ul>
            <a className="menubar__button" href="https://en.wikipedia.org/wiki/Kunu">Tweet</a>
            <a className="menubar__tweet2" href="https://en.wikipedia.org/wiki/Kunu"><RxTwitterLogo/></a>
            <div className="menubar__author mt-5 d-flex align-items-center justify-content-xl-between justify-content-center">
                <img src={Author} alt="myphoto" />
                <div className="menubar__author--info me-auto d-none d-xl-flex">
                    <h4>Mardon1dev</h4>
                    <span>@mardon_dusbekov</span>
                </div>
                <AiOutlineMore className="threedot d-none d-xl-flex"/>
            </div>
        </div>
    </div>
  )
}

export default MenuBar;