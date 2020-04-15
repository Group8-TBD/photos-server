import React from 'react';
import ReactDOM from 'react-dom';
import ImageHeader from './ImageHeader.jsx';
import ImageCarousel from './ImageCarousel.jsx';
// import $ from 'jquery';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      view: true,
      clickedImageIndex: 0
    }

    this.changeView = this.changeView.bind(this);
    this.getImages = this.getImages.bind(this);

  }

  changeView (view, clickedImageIndex) {
     this.setState({view:!view})
     this.setState({clickedImageIndex: clickedImageIndex}, () => {
       console.log('clicked image from index.jsx', this.state.clickedImageIndex)
     })
  }

  //GET request on mount to pull images by propId
  componentDidMount() {
    this.getImages()
  }

  getImages() {
    const randomId = () => {
      return Math.floor(Math.random() * (5000000 - 1) + 1)
    }
    const property_id = randomId()
    axios.get(`/properties/${property_id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          images: response.data
        })
      })
  }

  render() {
    if (this.state.images.length > 1) {
      if (this.state.view) {
        var component = <ImageHeader view={this.state.view} changeView={this.changeView} images={this.state.images}/>
      } else {
        var component = <ImageCarousel view={this.state.view} changeView={this.changeView} images={this.state.images} clickedImageIndex={this.state.clickedImageIndex}/>
      }
    }
    return (
      <div>
        {component}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('photos'))
