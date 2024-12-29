import { Text, Pressable, PressableProps } from "react-native"
import { s } from './style'
import { Icon } from "../icon/Icon";

import { AArrowDown, HomeIcon, icons } from 'lucide-react-native';
import { colors } from "@/styles/theme";

type Props = PressableProps & {
  icon?: keyof typeof icons
  isSelected?: boolean
  name: string
}

export function Category({ icon, isSelected = false, name, ...rest }: Props) {



  return (
    <Pressable style={[s.container, isSelected && s.containerSelected]} {...rest}>
      {icon && <Icon name={icon} size={16} color={colors.gray[isSelected ? 100 : 400]} />}
      <Text style={[s.name, isSelected && s.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  )
}