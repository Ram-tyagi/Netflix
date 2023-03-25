import React from 'react'
import "./Home.scss"


const Card=({img})=>( 
  
     <img className='card' src={img} alt="cover" />

 
)
const Row=({title,arr=[{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"
},
{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"
},
{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"
}
,{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"
},
{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"
},{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRnAj48EFxcKnUfL1C6pOnk29ugKYAgo0-A&usqp=CAU"
}

]})=>( 
  <div className='row'>
    <h2>
      {title}
    </h2>
  <div>
    {
      arr.map((item)=>( 
        <Card img={item.img} />
      ))
    }
  
    
    
  </div>
  </div>
)
const Home = () => {
  return (
   <section className='home'>
  <div className='banner'></div>
  <Row title={"Popular on netflix"}/>
  <Row title={"Recommended for you"}/>
  <Row title={"Continue watching"}/>
  <Row title={"My List"}/>
   </section>
  )
}

export default Home