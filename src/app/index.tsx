import { welcome } from '@/data/welcome';
import { View } from 'react-native';
import { Steps } from '../components/steps';
import { Welcome } from '../components/welcome';
import { Button } from '@/components/button';

import { router } from 'expo-router'

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

      <View style={{ alignItems: 'center' }}>
        <Button onPress={() => router.navigate('/home')}>
          <Button.Title>Começar</Button.Title>
        </Button>
      </View>
    </View>
  );
}