import { Component } from "react";

class Locations extends Component {
    constructor(props) {
        super(props);

         this.state= {
             locations: [],
         };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then((res) => res.json())
            .then((data) => this.setState({ locations: data }))
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div>
                <ul className="list-group-flush">
                    {this.state.locations.map(locations => (
                        <li key={locations.id} 
                        className="list-group-item">
                         </li> ))}
                 </ul>
            </div>
        )
    }
                            
 }

 export default Locations;
                            