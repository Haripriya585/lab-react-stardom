import React, { Component } from 'react';
import prostar from '../components/prostars.json';
import './star.css';
class Star extends Component {
    constructor() {
        super();
        this.state = {
            prostars: [prostar[5],
            prostar[6], prostar[7],
            prostar[8], prostar[9]]
        };
    }
    dataProstars = () => {
        const data = this.state.prostars;
        const mapRow = data.map(prostar => (
            <tr key={prostar.id}>
                <td><img className="image" src={prostar.pictureUrl} alt={prostar.pictureUrl} /></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="delete" onClick={this.state.removePeople}>Delete</button></td>
            </tr>
        ));
        return mapRow;
    }
    addRandomProstar = () => {
        let others = prostar.slice(5, prostar.length);
        const value = Math.ceil(Math.random() * others.length) + 1;
        this.setState({
            prostars: this.state.prostars.concat(others[value])
        });
    }
    sortName = () => {
        var newData = this.state.prostars;
        newData.sort((object1, object2) => {
            let obj1 = object1.name.toLocaleUpperCase()
            let obj2 = object2.name.toLocaleUpperCase()

            if (obj1 < obj2) {
                return -1;
            }
            if (obj1 > obj2) {
                return 1;
            }
            return 0;

        });
        this.setState({ prostars: newData });
    }
    sortPopularity = () => {
        var newData = this.state.prostars;
        newData.sort((object1, object2) => {
            const obj1 = object1.popularity;
            const obj2 = object2.popularity;
            if (obj1 < obj2) {
                return 1;
            }
            if (obj1 > obj2) {
                return -1;
            }
            return 0;
        });
        this.setState({ prostars: newData });
    }
    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h1>ProStars</h1>
                </div>
                <div className="maindata">
                    <div className="buttons">
                        <button onClick={this.addRandomProstar}>Get Random Contact</button>
                        <button onClick={this.sortName}>Sort By Name</button>
                        <button onClick={this.sortPopularity}>Sort By Popularity</button>
                    </div>
                    <div >
                        <center>
                            <table className="table">
                                <thead className="tablehead">
                                    <tr>
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Popularity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>{this.dataProstars()}</tbody>
                            </table>
                        </center>
                    </div>

                </div>
            </React.Fragment>
        );
    }

}
export default Star;