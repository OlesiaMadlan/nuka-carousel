import Carousel from '../src/index';
import React from 'react';
import ReactDom from 'react-dom';

const colors = ['7732bb', '047cc0', '00884b', 'e3bc13', 'db7c00', 'aa231f'];

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 6,
      cellAlign: 'left'
    };
  }

  handleChangeIndex = index => {
    console.log('update', index);
    this.setState({ slideIndex: index });

    this.setState({ cellAlign: index > 0 ? 'center' : 'left' });
  };

  handleAfterSlide = index => {
    console.log('after callback', index);
  };

  render() {
    return (
      <div>
        <Carousel
          transitionMode={this.state.transitionMode}
          cellAlign={this.state.cellAlign}
          slidesToShow={this.state.slidesToShow}
          wrapAround={this.state.wrapAround}
          slideIndex={this.state.slideIndex}
          slideWidth="280px"
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          onChangeIndex={this.handleChangeIndex}
          afterSlide={this.handleAfterSlide}
        >
          {colors.slice(0, this.state.length).map((color, index) => (
            <div key={index} style={{ overflow: 'hidden' }}>
              <img
                src={`http://placehold.it/400x400/${color}/ffffff/&text=slide ${index}`}
                key={color}
                onClick={() => this.handleChangeIndex(index)}
              />
            </div>
          ))}
        </Carousel>
        <div>
          <div>
            {[...new Array(6).values()].map((item, index) => (
              <button key={index} onClick={() => this.handleChangeIndex(index)}>
                {index}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));
