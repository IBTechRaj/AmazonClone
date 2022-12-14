import React, { useState, useEffect } from 'react';
import { View,Text, ScrollView, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute} from '@react-navigation/native'
import styles from './styles';
import product from '../../data/product'
import QuantitySelector from '../../components/QuantitySelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'

const ProductScreen = () => {
  const [selectedOption, setSelectedOption]=useState(product.options? product.options[0] : null)
  const [quantity, setQuantity] = useState(1)
  
  const route = useRoute()
  console.log(route.params)
    return(
        < ScrollView style={styles.root} >
        <Text style={styles.title}>{product.title}</Text>
        
   
        <ImageCarousel images={product.images} />
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}>
          {product.options.map(option => (
            <Picker.Item label={option} value={option} />
          ))}
        </Picker>
        <Text
          style={styles.price}>
          from ${product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}>${product.oldPrice}</Text>
          )}

        </Text>
        <Text style={styles.description}>
          {product.description}</Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        
        <Button
          text={'Add to Cart'}
          onPress={() => {
            console.warn('Add to Cart')
          }}
          containerStyles={{ backgroundColor: '#e3c905' }}/>
        <Button text={'Buy Now'} onPress={()=>{console.warn('Buy now')}} />
  </ScrollView>
  );
};

export default ProductScreen;