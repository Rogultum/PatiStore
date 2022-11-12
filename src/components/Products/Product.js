import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Product.style';

const Product = props => {
  console.log(props.product);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.product.item.imgURL}} />

      <Text style={styles.title}>{props.product.item.title}</Text>
      <Text>{props.product.item.price}</Text>
      {!props.product.item.inStock && (
        <Text style={styles.stock_text}>STOKTA YOK</Text>
      )}
    </View>
  );
};

export default Product;
