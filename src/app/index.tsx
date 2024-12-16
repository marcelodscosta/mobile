import { welcome } from '@/data/welcome';
import { View } from 'react-native';
import { Steps } from './components/steps';
import { Welcome } from './components/welcome';

export default function Index() {
  const { title, subtitle } = welcome;
  return (
    <View style={{
      flex: 1,
      gap: 40,
      padding: 40
    }}>
      <Welcome
        title={title}
        subtitle={subtitle}
      />

      <Steps />
    </View>
  );
}