import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
  img_container: {
    flex: 1,
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 0.75,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  stock_text: {
    color: 'red',
    fontWeight: '700',
  },
});
