import './App.css';
import { Component } from 'react';
import {PostCard} from './components/PostCard'

class App extends Component {
  state = {
    posts: []
  };

componentDidMount() {
  this.loadPosts();
}

loadPosts = async () => {
  const postsResponse = fetch ('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch ('https://jsonplaceholder.typicode.com/photos')

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, indice) => {
    return { ...post, cover: photosJson[indice].url }
  });

  this.setState({posts : postsAndPhotos});
}

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              cover={post.cover}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
      </div>
      </section>
    );
  }
}

export default App;
