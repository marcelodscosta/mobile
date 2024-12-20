import { Stack } from 'expo-router'

import { colors } from '@/styles/theme'

import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts
} from '@expo-google-fonts/rubik'
import { Loading } from './components/loading'

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
  })

  return (
    !fontsLoaded ?
      <Loading /> :
      <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] }
      }} />
  )
}