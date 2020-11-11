import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots'; //uses internal json
import '../containers/App.css';

class App extends Component {
    
    constructor()     {
        super()
        this.state = {
            //robots: robots, uses internal json
            data: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        
        const urls = [
            'https://swapi.dev/api/planets/?page=1',
            'https://swapi.dev/api/planets/?page=2',
            'https://swapi.dev/api/planets/?page=3'
          ]
          
          Promise.all(urls.map(url =>
              fetch(url).then(allplanets => allplanets.json())
            ))
            .then(allplanets => {
                this.setState({ data: 
                [
                    ...allplanets[0].results, 
                    ...allplanets[1].results,
                    ...allplanets[2].results
                ]
                     })
                console.log(allplanets)
            })
            .catch(err => console.log('Somethings up!', err));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value)
    
    }

    render() {
        const { data, searchfield } = this.state;
        const filteredRobots = this.state.data.filter(data => {
            return data.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //check if there are no users show loading message
        if(data.length === 0){
            return <h1>Loading, please wait!</h1>
        } else {
        return (
                <div className="tc">
                <h1 className="f1">Starwars Planets</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList data={filteredRobots}/>
                </Scroll>
                </div>
            );
        }
        }
    }

export default App;
