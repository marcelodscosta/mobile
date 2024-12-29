import { useEffect, useState } from 'react'
import { View, Text, Alert } from 'react-native'


import { api } from '@/services/api'
import { Categories } from '@/components/categories'


export type CategoryProps = {
  id: string,
  name: string,
}

export default function Home() {

  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [category, setCategory] = useState("")

  async function fetchCategories() {

    try {
      const { data } = await api.get<CategoryProps[]>('/categories')
      setCategories(data)
      setCategory(data[0].id)

    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} onSelect={setCategory} selected={category} />
    </View>
  )
}