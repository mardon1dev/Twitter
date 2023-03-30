import { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const TweetContext = createContext();

export const TweetProvider = ({children}) =>{

    const [tweets, setTweets] = useState([]);
    const [tweet, setTweet] = useState();

    const fetchTweet = async ()=>{
        try{
            const res = await axios.get("https://reqres.in/api/users");
            console.log(res.data.data);
            setTweets(res.data.data);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchTweet();
    }, [])

    return(
        <TweetContext.Provider value={tweets}>
            {children}
        </TweetContext.Provider>
    )
}