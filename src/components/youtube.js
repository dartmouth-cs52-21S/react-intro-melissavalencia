import '../style.scss';
import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import youtubeSearch from '../youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import { setVideos } from '../actions';

class YouTube extends Component {
  constructor(props) {
    super(props);

    this.search = debounce(this.search, 300);
    this.search('pixar');

    // this.state = {
    //   videos: [],
    //   selectedVideo: null,
    // };

    // youtubeSearch('pixar').then((videos) => {
    //   this.setState({
    //     videos,
    //     selectedVideo: videos[0],
    //   });
    // });
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.props.setVideos(videos);
      // this.setState({
      //   videos,
      //   selectedVideo: videos[0],
      // });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default connect(null, { setVideos })(YouTube);

// export default YouTube;

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

// const App = () => <div className="test">All the REACT are belong to us!</div>;
