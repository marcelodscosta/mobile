import { useEffect, useState } from 'react'
import { View, Text, Alert } from 'react-native'


import { api } from '@/services/api'
import { Categories } from '@/components/categories'
import { PlaceProps } from '@/components/place'

import { Places } from '@/components/places'


export type CategoryProps = {
  id: string,
  name: string,
}

type MarketsProps = PlaceProps & {}

export default function Home() {

  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [category, setCategory] = useState("")

  const [markets, setMarkets] = useState<MarketsProps[]>([])

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

  async function fetchMarkets() {
    try {
      if (!category) {
        return
      }
      const { data } = await api.get('/markets/category/' + category)
      setMarkets(data)

    } catch (error) {

    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1, backgroundColor: '#CECECE' }}>
      <Categories data={categories} onSelect={setCategory} selected={category} />

      <Places data={markets} />
    </View>
  )
}