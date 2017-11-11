import PropTypes from 'prop-types';
import React from 'react';

export default class Animal extends React.Component {
  static propTypes = {
    animal: PropTypes.object.isRequired, // this is passed from the Rails view
  };

  render() {
    const animal = this.props.animal;

    return (
      <figure className="animal">
        <div className="background"
             style={{backgroundImage: `url('${animal.image}')`}}>
        </div>
        <figcaption style={{backgroundColor: animal.bg_color }}>
          <h2>{animal.name}</h2>
          <img src={animal.icon} alt={animal.name} className="animal-icon"/>
        </figcaption>
      </figure>
    );
  }
}
