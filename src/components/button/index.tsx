import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  ActivityIndicator
} from 'react-native'

import { s } from './style'
import { colors } from '@/styles/colors'

type ButtonProps = {
  isLoading?: boolean

} & TouchableOpacityProps

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >

      {isLoading ? <ActivityIndicator color={colors.gray[100]} /> : children}

    </TouchableOpacity>
  )

}

function Title({ children }: TextProps) {
  return (
    <Text style={s.title}>{children}</Text>
  )
}

Button.Title = Title


export { Button }