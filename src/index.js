// const $ = require('jquery');
// $('#main').html('Here we go!');

// change require to es6 import style
// import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.search = debounce(this.search, 300);

    this.search('pixar');

    // youtubeSearch('pixar').then((videos) => {
    //   this.setState({
    //     videos,
    //     selectedVideo: videos[0],
    //   });
    // });
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

// const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

// let sec = 0;
// setInterval(() => { $('#main').html(`You have been on this page for ${sec} seconds.`); sec += 1; }, 1000);
