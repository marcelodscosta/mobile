import { FlatList, View, Text } from 'react-native'

import { Category } from '../category'

import { CategoryProps } from '@/app/home'

import { s } from './styles'



type Props = {
  data: CategoryProps[]
  selected: string,
  onSelect: (id: string) => void
}


export function Categories({ data, selected, onSelect }: Props) {

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Category
          name={item.name}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />}
        horizontal
        contentContainerStyle={s.content}
        style={s.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>


  )
}