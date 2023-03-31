import '../styles/Home.css'
export const Home=()=>{
    return(
        <>
        <div className="contact_information">
            <span><b> 07877 948 788</b></span>
            <span><b>olha.d@yahoo.com</b></span>
             
        </div>
        <span className='above_main_photo'>Junior Front End Developer</span>
       <img className="main_photo" src="./IMG_9624.jpg" alt="me"/>
       <span className='below_main_photo'>My Stack</span>
       <img className="tech" src="./tech.jpeg" alt="tech"/>
        </>
    )
}