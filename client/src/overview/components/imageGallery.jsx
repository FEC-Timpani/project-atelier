import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-testid='image-gallery'>
        <img src={this.props.photo.url} width='400' height='600'></img>
      </div>
    );
  }
}

export default ImageGallery;