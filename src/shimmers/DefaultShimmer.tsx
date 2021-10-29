import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { ViewStyle } from 'react-native';

import size from '../utils/size';

interface ShimmerProps {
  style: ViewStyle;
}

export const ShimmerText = (props: ShimmerProps) => {
  const { style } = props;

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  const shimmerColors: string[] = ['#949393', '#9b9b9b', '#b8b8b8'];

  return (
    <ShimmerPlaceHolder
      style={{
        height: size(12),
        overflow: 'hidden',
        borderRadius: 8,
        ...style,
      }}
      shimmerColors={shimmerColors}
    />
  );
};
export default ShimmerText;
