import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import { BiPlay} from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

const apiKey="0c707e3e634e79283eca2b0b1d25233f"
const url="https://api.themoviedb.org/3"
const upcoming="upcoming"
const imgUrl="https://image.tmdb.org/t/p/original"
const nowPlaying="now_playing"
const popular="popular"
const topRated="top_rated"

const Card=({img})=>( 
  
     <img className='card' src={img} alt="cover" />

 
)
const Row=({title,arr=[{
  
},


]})=>( 
  <div className='row'>
    <h2>
      {title}
    </h2>
  <div>
    {
      arr.map((item,index)=>( 
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))
    }
  
    
    
  </div>
  </div>
)
const Home = () => {
  const [upcomingMovies,setUpcomingMovies]=useState([])
  const [nowPlayingMovies,setNowPlayingMovies]=useState([])
  const [popularMovies,setPopularMovies]=useState([])
  const [topRatedMovies,setTopRatedMovies]=useState([])
  const [genre,setGenre]=useState([])
  useEffect(()=>{
    const fetchUpcoming=async()=>{
     const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
     setUpcomingMovies(results)
    }
    fetchUpcoming();
    const fetchnowPlaying=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setNowPlayingMovies(results)
     }
     fetchnowPlaying();
     const fetchpopular=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      setPopularMovies(results)
     }
     fetchpopular();
     const fetchtopRated=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
      setTopRatedMovies(results)
     }
     fetchtopRated()
     const getAllGenre=async()=>{
      const {
        data:{genres},

      }=await axios.get(`${url}/genre/movie/list?=${apiKey}`)
      setGenre(genres)
     }
     getAllGenre()
  },[])

  return (
   <section className='home'>
  <div className='banner' style={{
    backgroundImage: popularMovies[0]? `url(${imgUrl}/${popularMovies[0].poster_path})`: 'none'
  }} >
    {
      popularMovies[0]&&
      (
        <h1>{popularMovies[0].original_title}</h1>
      )
    }
    {
      popularMovies[0]&&
      (
        <p>
      {popularMovies[0].overview}
     </p>
      ) 
    }
    <button><BiPlay/>Play </button>
    <button>My List <AiOutlinePlus/> </button>
  
    
  </div>
  <Row title={"Upcoming movies"} arr={upcomingMovies}/>
  <Row title={"Now Playing"} arr={nowPlayingMovies}/>
  <Row title={"Popular"} arr={popularMovies}/>
  <Row title={"Top Rated"} arr={topRatedMovies}/>
   
   <div className='genreBox'>
    {genre.map((item)=>{
      <link key={item.id} to={`/genre/${item.id}`}>{item.name}</link>
    })}

   </div>
   </section>
  )
}

export default Home