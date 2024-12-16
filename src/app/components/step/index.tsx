import { Text, View } from "react-native";
import { s } from './style';

import { icons } from 'lucide-react-native';

import { Icon } from "../icon/Icon";


type StepProps = {
  title: string,
  subtitle: string,
  icon: keyof typeof icons
}

export function Step({ title, subtitle, icon }: StepProps) {
  return (
    <View style={s.container}>

      {icon && <Icon name={icon} />}

      <View>
        <Text style={s.title}>{title}</Text>
        <Text style={s.subtitle}>{subtitle}</Text>
      </View>
    </View>

  )
}