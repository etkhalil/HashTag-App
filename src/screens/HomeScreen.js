import React from 'react';
import { ThemeProvider, Icon, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';
import Hashtags from '../../assets/hashtags.json'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HashTag Categories',
  };
  render() {
    let list = []
    Object.entries(Hashtags).forEach(entry => {
      list.unshift(entry[0])
    });
    const {navigate} = this.props.navigation;
    return (
      <ThemeProvider>
          <ScrollView>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftIcon={{ name: 'hashtag', type: 'font-awesome', color: '#5B86E5' }}
                title={l}
                subtitle={"Most Popular "+ l +" Hashtags"}
                bottomDivider
                onPress={() => navigate('Profile', {category: l})}
              />
            ))
          }
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default HomeScreen;