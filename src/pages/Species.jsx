import { useEffect, useState } from "react"

export default function Species(props) {
    let [species, setSpecies] = useState({});

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/species")
            .then((res) => res.json())
            .then((data) => this.setState({ species: data }))
            .catch((err) => console.error(err));
    }, []);


    return (
        <div>
            <h1>Species</h1>
            <ul className="list-group-flush">
                {species.map((spe) => {
                   return <li key={spe.id} className="list-group-item">
                        {spe.name}
                    </li>
                }
                )}
            </ul>
        </div>
    );
}
