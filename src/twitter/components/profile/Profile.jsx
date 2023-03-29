import React from 'react'
import { BiArrowBack } from "react-icons/bi";

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profileall'>
          <div className='profileall__header'>
            <BiArrowBack/>
            <div className='profileall__header--text'>
              <h2>Mardonbek</h2>
              <span>1000 tweets</span>
            </div>
          </div>
          <div className='profileall__profile'>
            <div className='profileall__profile--backgroundimage'>
            </div>
            <div>
              <div className='profileall__profile--name'>
                  
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile