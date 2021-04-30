import '../style.scss';
import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import youtubeSearch from '../youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

class YouTube extends Component {
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

export default YouTube;

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

// const App = () => <div className="test">All the REACT are belong to us!</div>;
