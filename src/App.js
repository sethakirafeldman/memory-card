import Nav from './Components/Nav';
import Card from './Components/Card';
import data from "./data.json";

function App() {

// start with grid of 12 initially.
//store card data in JSON or name gen API
// images stored in dir or API.



// create card component to gen each card
// map cards in random order
// use state to track whether cards have been clicked
// scoreboard component that tracks current score (state)
// and best score (state + localstorage)


 return(
    <>
    <Nav />
    <main id="main-container"> 
    {data.characters.map((card) => 
        <Card 
            name = {card.name}
            src = {card.src}
            index = {card.index}
            key ={`${card.name}${card.index}`}
        />)
    }
    
    </main>
 </>
 )
}

export default App;
