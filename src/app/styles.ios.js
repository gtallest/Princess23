import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'white',
    fontWeight: '800'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  text: {
    color:'white'
  },
  startButton: {
    marginTop: 20,
    padding: 10,
    width: 150,
    borderRadius: 15,
    backgroundColor: '#ffebef'
  },
  startButtonText: {
    textAlign: 'center',
    color: '#777',
    fontWeight: '700',

  }

});
