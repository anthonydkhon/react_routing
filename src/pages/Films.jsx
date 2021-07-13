import { Component } from "react";

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then((data) => this.setState({ films: data }))
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <ul>
                {this.state.films.map(film => {
                    return (
                    <div key={film.id} className="card">
                        <h3>{film.title}</h3>
                        <p>{film.release_date}</p>
                        <p>{film.rt_score}</p>
                        </div>
                    );
                })}
            </ul>
        )
    }
}

export default Films;