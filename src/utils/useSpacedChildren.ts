import React from 'react';
import { View, ViewStyle } from 'react-native';

/**
 * gap을 구현하기 위한 유틸 훅
 * @param children - JSX children
 * @param gap - number px 단위
 * @param flexDirection - row 또는 column
 * @returns 자식 요소 사이에 gap을 적용한 배열
 */
export function useSpacedChildren(
  children: React.ReactNode,
  gap: number,
  flexDirection: 'row' | 'column' = 'column'
): React.ReactNode[] {
  const validChildren = React.Children.toArray(children);

  return validChildren.map((child, index) => {
    const isLast = index === validChildren.length - 1;

    const spacingStyle: ViewStyle =
      flexDirection === 'row'
        ? { marginRight: isLast ? 0 : gap }
        : { marginBottom: isLast ? 0 : gap };
    return React.createElement(View, { key: index, style: spacingStyle }, child);
  });
}
