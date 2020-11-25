import Layout from '../components/MyLayout';
import axios from "axios";

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : <a>값 없음</a>}
    </Layout>
)

Post.getInitialProps = async function (context){
    const {id} = context.query;
    const res = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    console.log("Post 확인");

    return {show : res.data};
}

export default Post;