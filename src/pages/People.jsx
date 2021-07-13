import { useState, useEffect } from "react"; 

function People() {
    let [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((res) => res.json())
            .then((data) => setPeople(data))
            .catch((err) => console.log(err));
    },[]); 
    
                return (
                    <div>
                        {people.map((person) => (
                            <div key={person.id} className="card">
                            <h3>{person.name}</h3>
                            </div>
                        ))}
                    </div>
                );
            }

export default People;
                
                    