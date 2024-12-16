import { Text, View } from "react-native";
import { s } from './style';

type StepProps = {
  title: string,
  subtitle: string,
}

export function Step({ title, subtitle }: StepProps) {
  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}>{title}</Text>
        <Text style={s.subtitle}>{subtitle}</Text>
      </View>
    </View>

  )
}