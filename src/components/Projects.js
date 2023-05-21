
import './projects.css';
export const Projects=()=>{
    return(
        <div className='progects-container'>
            
                <div className="project">
                    <span className="project-title">Whatch-it</span>
                    <div className="description">A simple yet aesthetically pleasing app to search and display movies by using TMDB API. User can search movies by name. As well posible to change color scheme from neutral grey to bright blue gradient. When user hoover over film card, smooth annimation provides a fill description.

</div>
<div className='screenshot-row-first'>
<img className="screenshot" src="./first.png" alt="screenshot"/> 
<img className="screenshot" src="./second.png" alt="screenshot"/> 
</div>
                    </div>
                    <div className="project">
                    <span className="project-title">My ToDo</span>
                    <div className="description">This project helped me to understand and use React together with Typescript. I have aswell used a great library React_beautifullDND to achive drag and drop functionaity. User can simply move tasks order or move to complited by dragging it.

</div>
<img className="screenshot" src="./third.png" alt="screenshot"/> 
                    </div>
                    
                    <div className="project">
                    <span className="project-title">My Weather</span>
                    <div className="description">Easy to navigate app to check weather. User can search disired city and see a current weather and a week forecast below. Forecast is expandeble on click, providing more details if needed. App usses two API databases to provide data.
</div>
<div className='screenshot-row-second'></div>
<img className="screenshot" src="./fourth.png" alt="screenshot"/> 
<img className="screenshot" src="./sixth.png" alt="screenshot"/> 
<img className="screenshot" src="./fifth.png" alt="screenshot"/> 
</div>
                    </div>
                
    
    )
}