import { StyleSheet } from 'react-native'
import { fontFamily, colors} from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    height: 56,
    width: 310,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green.base,
    borderRadius: 10,
    padding: 12,

    flexDirection: 'row',
    gap: 14
  },
  title: {
    fontFamily: fontFamily.medium,
    color: colors.gray[100],
    fontSize: 16
  },
})