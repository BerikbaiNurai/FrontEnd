import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { Product } from '../data/products';

interface Props {
  product: Product;
  onPress: (product: Product) => void;
}

export function ProductItem({ product, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(product)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {product.description}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 10,
    elevation: 2,
  },
  image: { width: 80, height: 80, borderRadius: 8 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontWeight: 'bold', fontSize: 16 },
  category: { color: '#0066cc', fontSize: 12 },
  description: { fontSize: 13, color: '#666' },
  price: { fontWeight: 'bold', marginTop: 5 },
});