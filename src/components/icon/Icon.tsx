import { colors } from '@/styles/theme';
import { icons } from 'lucide-react-native';
import React from 'react';

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, color = colors.red.base, size = 32 }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};
