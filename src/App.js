import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/cardList/CardList';




class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  //componentDidMount()method is used to get api data when the component is first loaded into the DOM. Only 1x/component lifecycle
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      //fetch returns a promise
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
        return { monsters: users };
      },
        () => {
          console.log(this.state);
        }
      ));
  }

  handleChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    }
  )}


  render() {
    console.log('render');
//using destructuring to improve performance
    const { monsters, searchField } = this.state;
    const { handleChange } = this;


    // const filteredMonsters = monsters.filter((monster) => {
    //   //callback is expecting a boolean
    //   //.includes returns true when conditions are met
    //   return monster.name.toLocaleLowerCase().includes(searchField);
    // });

    return (
      <div className='App d-flex flex-column align-items-center '>
        <input
          className="search=box mt-5"
          type='search'
          placeholder="search monsters"
          onChange={ handleChange }
        />
        {/* {filteredMonsters.map((monster) => {
          return <div 
                    className="p-3" 
                    key={monster.id} 
                    >
                    {monster.name}
                    </div>;
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>

    );
  }

};

export default App;





