import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import FitImage from 'react-native-fit-image'

export default class MessageImage extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <FitImage
          style={[styles.image, this.props.imageStyle]}
          source={{uri: this.props.currentMessage.image}}
          originalWidth={this.props.imageStyle.width}
          originalHeight={this.props.imageStyle.height}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
};

MessageImage.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
};
