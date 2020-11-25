import react,{useEffect} from "react";
import axios from "axios";
import Layout from '../components/MyLayout';

const board = ({show}) => {
    console.log({show});
    return(
        <Layout>
            <h1>Board 화면 출력 {show.name}</h1>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            {show.image ? <img src={show.image.medium} /> : <a>값 없음</a>}
        </Layout>
            
    )
}

export async function getServerSideProps(context){
    const {id} = context.query;
    const res = await axios.get(`http://api.tvmaze.com/shows/5951`);
    console.log(res.data, "Board 데이터확인");

    return {
        props : {
            show : res.data
        }
    };
}

export default board;