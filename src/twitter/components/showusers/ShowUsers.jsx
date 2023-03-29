import React from 'react'

const ShowUsers = () => {
  return (
    <div>
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
    </div>
  )
}

export default ShowUsers