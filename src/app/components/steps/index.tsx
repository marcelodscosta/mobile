import { Text, View } from 'react-native'
import { Step } from '../step'
import { s } from './styles'

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona: </Text>

      <Step
        title='Encontre estabelecimentos'
        subtitle='Veja locais perto de você que são parceiros Nearby'
      />

      <Step
        title='Ative o cupom com QR Code'
        subtitle='Escaneie o código no estabelecimento para usar o benefício'
      />

      <Step
        title='Garanta vantagens perto de você'
        subtitle='Ative cupons onde estiver, em diferentes tipos de estabelecimento '
      />

    </View>
  )
}