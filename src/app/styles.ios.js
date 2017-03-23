import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color:'white',
    fontWeight: '800'
  },
  tripMessage: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20
  },
  pressStart: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontStyle: 'italic'
  },
  text: {
    color:'white'
  },
  startButton: {
    marginTop: 5,
    padding: 10,
    width: 150,
    borderRadius: 15,
    backgroundColor: '#ffebef'
  },
  startButtonText: {
    textAlign: 'center',
    color: '#777',
    fontWeight: '700',
  },
  crownImage: {
    marginTop: 20,
    width: 200,
    height: 200
  }

});
