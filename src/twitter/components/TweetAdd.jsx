import React from 'react'
import { TweetContext } from '../AddTweet';
import { useContext } from 'react';

const TweetAdd = () => {

    const tweet = useContext(TweetContext);
  return (
    <div>
        {
           tweet.map((tweet)=>{
            return(
              <div key={tweet.id}>
                <h2>{tweet.email}</h2>
                <p>{tweet.password}</p>
              </div>
            )
           })
        }
    </div>
  )
}

export default TweetAdd;