import React from 'react'
import "./Home.scss"


const Card=({img})=>( 
  
     <img className='card' src={img} alt="cover" />

 
)
const Row=({title})=>( 
  <div className='row'>
    <h2>
      {title}
    </h2>
  <div>
  <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
    <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
    <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
    <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
    <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
    <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
    <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
    <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"} />
  </div>
  </div>
)
const Home = () => {
  return (
   <section className='home'>
  <div className='banner'></div>
  <Row title={"Popular on netflix"}/>
   </section>
  )
}

export default Home