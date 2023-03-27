import { useEffect, useState } from 'react';
import axios from 'axios';
import ShowData from '../showdata/ShowData';
import "./getdata.scss"

const GetData = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=c733780456fe46dcbdd2d24fe4a40f03`);
            setData(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    const filteredData = data.slice(10, 20).map((news) => (
        <ShowData key={news.id} id={news.id} title={news.title} img={news.urlToImage} />
    ));


  return (
    <div className='news row p-0 m-0'>
        {
            filteredData
        }
    </div>
  )
}

export default GetData;