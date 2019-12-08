import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Badge extends React.Component {
  constructor (props) {
    super(props)
    this.state = {checked: false} 
  }
  handleClick(val) {
    this.setState(prevState => ({checked: !this.state.checked}))
  }
  render() {
    return (
      <TouchableOpacity onPress={() => {this.handleClick(this.props.text); this.props.passHashtag(this.props.text)}}>
        <View style={{...styles.badge, backgroundColor: (!this.state.checked) ? 'white' : '#5B86E5'}}>
          <Text style={{...styles.text, color: (!this.state.checked) ? 'black' : 'white'}}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    padding: 12,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    maxWidth: 135,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  text: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default Badge;