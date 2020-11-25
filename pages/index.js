import Layout from '../components/MyLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios";

const Index = (props) => (
  <div>
    <Layout>
      <h1>배트맨 Post</h1>
      <ul>
        {props.shows.map(({show})=>(
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
  </Layout>

  <Layout>
      <h1>배트맨 Board</h1>
      <ul>
        {props.shows.map(({show})=>(
          <li key={show.id}>
            <Link as={`/d/${show.id}`} href={`/board?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
  </Layout>

  </div>
  
)

Index.getInitialProps  = async function(){
  const res = await axios.get('http://api.tvmaze.com/search/shows?q=batman')
  const data = await res.data;

  // console.log(`Show data fetched. Count: ${data}`);

  // console.log("data : ",data[0].show);
  
  return {
    shows : data
  }
}

export default Index;