import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  logo: {
    height: 48,
    width: 48,
    marginTop: 24,
    marginBottom: 28
  },
  container: {
    
  },
  title: { 
    fontFamily: fontFamily.bold, 
    fontSize: 24, 
    color: colors.gray[600] 
  },
  subtitle: { 
    fontFamily: fontFamily.regular, 
    color: colors.gray[600], 
    marginTop: 10
  },
})