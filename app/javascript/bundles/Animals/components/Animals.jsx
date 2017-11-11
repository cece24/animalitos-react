import PropTypes from 'prop-types';
import React from 'react';
import Animal from './Animal';

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
    this.state = { };
  }

  render() {
    return (
      <section className="animals">
        { this.props.animals.map(animal => (// this function takes an animal
          <Animal key={animal.id} animal={animal}/> // returns
        ))}
      </section>
    );
  }
}
