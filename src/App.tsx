
import './App.css'

function CarList() {
    const  cars = ["Mercedes", "Volvo", "BMW"]
    return(
        <ul>
            {cars.map(car => <li>{car}</li>)}
        </ul>
    );
}

function App() {
    return <CarList></CarList>
}

export default App
