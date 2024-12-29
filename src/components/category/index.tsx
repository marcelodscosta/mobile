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

function getNameById(id: string) {
  const idNameMap: { [key: string]: string } = {
    "Alimentação": "Apple",
    "Compras": "ShoppingBag",
    "Hospedagem": "Bed",
    "Cinema": "Monitor",
    "Padaria": "Coffee"
  };

  return idNameMap[id];
}

export function Category({ icon, isSelected = false, name, ...rest }: Props) {

  const infoIcon = getNameById(name) as keyof typeof icons

  return (
    <Pressable style={[s.container, isSelected && s.containerSelected]} {...rest}>
      <Icon name={infoIcon} size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  )
}