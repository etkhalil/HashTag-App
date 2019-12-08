import React from 'react';
import { View, ScrollView, Text, Clipboard } from 'react-native';
import Badge from '../components/badge'
import { Button } from 'react-native-elements';
import Dimensions from 'Dimensions';
import Hashtags from '../../assets/hashtags.json'

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('category', 'A Nested Details Screen'),
    };
  };
  constructor (props) {
    super(props)
    this.state = {
      selectedHashtags: []
    }
  }
  copyToClipBoard(Hashtags, category) {
    if (!this.state.selectedHashtags.length) 
      Clipboard.setString(Hashtags[category].slice(0, 30).join(' '))
    else
      Clipboard.setString(this.state.selectedHashtags.slice(0, 30).join(' '))
  }
  getSelectedHashtags (val) {
    if (this.state.selectedHashtags.includes(val)) {
      const arr = [...this.state.selectedHashtags]
      arr.splice( this.state.selectedHashtags.indexOf(val), 1 ) 
      this.setState({selectedHashtags: arr})
      return
    }

    this.setState({selectedHashtags: [...this.state.selectedHashtags, val]})
    console.log(this.state.selectedHashtags)
  }
  render() {
    const getFirstWords = function (sentence) {
      if (!sentence) return false
      const splitSentence = sentence.split(' ')
      return splitSentence[0]
    }
    let category = this.props.navigation.getParam('category').toLowerCase();
    if (category.includes("&")) category = getFirstWords(category)
    return (
      <React.Fragment>
        <ScrollView>
          <View style={{display: "flex", flex: 1, flexDirection: "row", flexWrap: "wrap", height: Dimensions.get('window').height}}>
            {
              Hashtags[category].slice(0, 30).map((cat, i) => {
                return <Badge key={i} text={cat} passHashtag={(val) => this.getSelectedHashtags(val)}></Badge>
              })
            }
          </View>
        </ScrollView>
        <View style={{display: 'flex',justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10}}>
          <Button
            title="Copy Hashtags" 
            buttonStyle={{...styles}}
            onPress={() => this.copyToClipBoard(Hashtags, category)} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = {
  shadowColor: '#5B86E5',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  height: 50,
  width: 175,
  backgroundColor: '#5B86E5'
}

export default ProfileScreen;