import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChannelList extends Component {
  // handleClick = () => {
  //   this.selectChannel
  // }

  renderChannel = (channel) => {
    return (
      <div>
        {channel}
      </div>
    );
  }

  render() {
    const { channels } = this.props;
    return (
      <div className="col-xs-3 left-container">
        {channels.map(channel => this.renderChannel(channel))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
  };
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { selectChannel },
//     dispatch
//   );
// }

export default connect(mapStateToProps)(ChannelList);
