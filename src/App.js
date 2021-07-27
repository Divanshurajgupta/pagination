import React,{useEffect,useState} from 'react'
import axios from 'axios'
import  Posts from './components/Posts'
import  Pagination from './components/Pagination'
import './App.css';

const App =()=>{
  const[posts,setPosts]= useState([]);
  const [loading,setLoading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);
  const[postsPerPage]=useState(3);
  useEffect(() => {
  const fetchPosts=async()=>{
    setLoading(true);
    const res = await axios.get('https://reqres.in/api/users?page=2');
    
    setPosts(res.data.data);
    console.log(res);
   
    setLoading(false);
  };
  
  fetchPosts();
  }, []);
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost-postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
const paginate = pageNumber=>setCurrentPage(pageNumber);
  return (
    <div className="App">
    <h1 className="text-primary mb-3">My App</h1>
    <Posts posts={currentPosts} loading={loading}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );

  };
export default App;
