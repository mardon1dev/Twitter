import {CiSearch} from 'react-icons/ci';
import { AiOutlineMore } from "react-icons/ai";
import { FiSettings } from 'react-icons/fi';
import Author from "./author.jpg";

import './searchbar.scss';

const SearchBar = () => {

  return (
    <div className='searching d-none d-lg-block'>
        <div className='searchbar w-100'>
            <div className='searchbar-input'>
                <div className='searchbar__input'>
                    <CiSearch className='searchbar__input--search'/>
                    <input className='searchbar__input--input' type="text" placeholder="Search Twitter" />
                </div>
            </div>
            <div className='searchbar__trend'>
                <h4 className='searchbar__trend--title'>Trends for you</h4>
                <FiSettings className='setting'/>
                <div className='searchbar__trends'>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot" />
                    </div>
                </div>
                <a className='searchbar__trend--link' href="https://en.wikipedia.org/wiki/Kunu">Show</a>
            </div>
            <div className='searchbar__like'>
                <h4 className='searchbar__like--title' >You might like</h4>
                <div className='serachbar__like--likes'>
                    <div className="searchbar__author mt-5">
                        <img src={Author} alt="myphoto" />
                        <div className="searchbar__author--info me-auto">
                            <h4>Mardon1dev</h4>
                            <span>@mardon_dusbekov</span>
                        </div>
                        <button className='searchbar__author--button'>Follow</button>
                    </div>
                    <div className="searchbar__author mt-5">
                        <img src={Author} alt="myphoto" />
                        <div className="searchbar__author--info me-auto">
                            <h4>Mardon1dev</h4>
                            <span>@mardon_dusbekov</span>
                        </div>
                        <button className='searchbar__author--button'>Follow</button>
                    </div>
                    <a className='searchbar__like--link' href="https://en.wikipedia.org/wiki/Kunu">Show more</a>
                </div>
            </div>
            <div className='searchbar__others d-flex flex-wrap'>
                <a href="https://en.wikipedia.org/wiki/Kunu">Terms of Service</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Privacy Policy</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Cookie Policy</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Imprint</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Ads Info</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">More ···</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">© 2021 Twitter, Inc.</a>
            </div>
        </div>
    </div>
  )
}

export default SearchBar