import {
  ActivityIndicator,
  View
} from 'react-native'

import { colors } from '@/styles/theme'
import { s } from './styles'

export function Loading() {
  return (
    <View style={s.container}>
      <ActivityIndicator color={colors.green.base} size={32} />
    </View>
  )
}