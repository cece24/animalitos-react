import PropTypes from 'prop-types';
import React from 'react';
import Animal from './Animal';
import Album from './Album';

export default class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      images: [],
      active: false
    };
  }

  loadImages = (animal) => {
    const clientID = '5c8875b8bf08ca810bb9771c57a12ddaccad724418d0fbad2003ab234733108f';
    fetch(`https://api.unsplash.com/search/photos?client_id=${clientID}&query=${animal.name}`).
      then(response => response.json()).
      then(data => {
        // this.state.images = data.results; react doesn't like this!
        this.setState({
          images: data.results,
          active: true
        });
      });
  }

  render() {
    // const {animals} = this.props
    // same as
    // const animals = this.props.animals;
    // to access state data as variables
    // const {images, active} = this.state;

    return (
      <div>
        <section className="animals">
          { this.props.animals.map(animal => (// this function takes an animal
            <Animal key={animal.id} animal={animal} loadImages={this.loadImages}/> // returns
          ))}
        </section>
        <Album images={this.state.images} active={this.state.active}/>
    </div>
    );
  }
}
