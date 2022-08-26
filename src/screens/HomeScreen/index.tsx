import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
// import { DataStore } from 'aws-amplify';
// import { Product } from '../../models';

import products from '../../data/products'

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
  console.log(searchValue)
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    // width: '100%',
    padding: 10,
  },
  // root: {
  //   flexDirection: 'row',
  //   borderWidth: 1,
  //   borderColor: '#d1d1d1',
  //   backgroundColor: '#fff',
  //   width: '100%',
  // },
  // image: {
  //   flex: 2,
  //   height: 150,
  //   resizeMode: 'contain',
  // },
  // rightContainer: {
  //   padding: 10,
  //   // width: '100%',
  //   flex: 3,
  // },
  // title: {
  //   fontSize: 18,
  // },
  // price: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // oldPrice: {
  //   fontSize: 12,
  //   fontWeight: 'normal',
  //   textDecorationLine: 'line-through',
  // },
  // ratingsContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: 5,
  // },
  // star: {
  //   margin: 2,
  // }
})
export default HomeScreen