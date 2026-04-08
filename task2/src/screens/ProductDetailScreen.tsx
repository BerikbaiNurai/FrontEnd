import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import type { RouteProp } from '@react-navigation/native';
import type { Product } from '../data/products';

type RootStackParamList = {
  ProductDetail: { product: Product };
};

type Props = {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
};

export function ProductDetailScreen({ route }: Props) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text>{product.description}</Text>

        <Text style={styles.platform}>
          Platform: {Platform.OS} ({Platform.Version})
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 250 },
  content: { padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  price: { fontSize: 20, marginVertical: 10 },
  platform: { marginTop: 10, color: 'gray' },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#0066cc',
    borderRadius: 10,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});