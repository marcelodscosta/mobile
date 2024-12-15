import { Image, Text, View } from 'react-native'
import { s } from './styles'

type props = {
  title: string,
  subtitle: string,
}

export function Welcome({ title, subtitle }: props) {
  return (
    <View style={s.container}>
      <Image source={require('@/assets/logo.png')} style={s.logo} />
      <Text style={s.title}>{title}</Text>
      <Text style={s.subtitle}>{subtitle}</Text>
    </View>
  )
}