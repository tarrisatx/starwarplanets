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
            'https://swapi.co/api/planets/?page=1',
            'https://swapi.co/api/planets/?page=2',
            'https://swapi.co/api/planets/?page=3'
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
            .catch(err => console.log('ughhhh fix it!', err));
        

            

            
       


        /* fetch('https://swapi.co/api/planets/')
        .then(response=> {
            return response.json();
        })
        .then(users => {
            this.setState({ data: users.results})
        }); */
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
                <h1 className="f1">RoboFamily</h1>
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