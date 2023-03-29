import React from 'react'
import './home.scss'
import Author from '../../author.jpg';
import {CiImageOn} from 'react-icons/ci';
import {AiOutlineFileGif} from 'react-icons/ai';
import {BiPoll} from 'react-icons/bi';
import {BsEmojiSmile} from "react-icons/bs";
import {TbCalendarTime} from "react-icons/tb";
import {GoLocation} from "react-icons/go";
import GetData from '../../getdata/GetData';

const Home = () => {


    const handleButton1Click = () =>{
        console.log('button1 clicked');
    }


  return (
    <div className='home mb-5'>
        <div className='home-main'>
            <div className='homemain'>
                <h2 className='homemain__title pt-2'>Home</h2>
                <div className='homemain__buttons d-flex align-items-center w-100 justify-content-between pb-2'>
                    <button className='homemain__buttons--button'style={{width:"50%"}} id="button1" onClick={handleButton1Click}>
                        <span>For you</span>
                    </button>
                    <button className='homemain__buttons--button'style={{width:"50%"}} id="button2">
                        <span>Following</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='hometweet pt-4'>
            <div className='hometweet__tweet'>
                <img className='hometweet__tweet--img' src={Author} alt="myphoto" />
                <textarea className='hometweet__tweet--text w-100 border-0 ms-2' name="tweet" id="tweet" rows="5" placeholder='What is happening?'></textarea>
            </div>
            <div className='hometweet__extra pt-4'>
                <div className='hometweet__extra--icons d-flex gap-1'>
                    <CiImageOn/>                
                    <AiOutlineFileGif/>
                    <BiPoll/>
                    <BsEmojiSmile/>
                    <TbCalendarTime/>
                    <GoLocation/>
                </div>
                <button className='hometweet__extra--tweet'>Tweet</button>
            </div>
        </div>
        {
            
        }
    </div>
  )
}

export default Home;