
import './App.css'

    // function CarList() {
    //     const  cars = ["Mercedes", "Volvo", "BMW", "Renault", "Dacia"]
    //
    //     return(
    //         <ul>
    //             {cars.map(car => <li key={car}>{car}</li>)}
    //         </ul>
    //     );
    // }

    type Car = {
        id: string,
        brand: string,
        model: string
    }

    function CarList() {
        const  cars: Car[] = [
            {id: "1", brand: "Marcedes", model:"GLC"},
            {id: "2", brand: "BMW", model:"3er"},
            {id: "3", brand: "Volvo", model:"X60"}
            ];

        return(
            <ul>
                {cars.map(car => <li key={car.id}>{car.brand} {car.model}</li>)}
            </ul>
        );
    }

    function App() {
        return <CarList></CarList>
    }

export default App
