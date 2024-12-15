import { View } from 'react-native';
import { Welcome } from './components/welcome';

export default function Index() {
  return (
    <View style={{
      flex: 1,
      gap: 40,
      padding: 40
    }}>
      <Welcome
        title='Boas vindas ao Nearby!'
        subtitle='Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.'
      />
    </View>
  );
}