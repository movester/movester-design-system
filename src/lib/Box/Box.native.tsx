import React from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { useSpacedChildren } from '../../utils/useSpacedChildren';

interface IProps {
  flexDirection?: 'column' | 'row';
  gap?: number;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  padding?: number;
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  borderRadius?: number;
  onClick?: () => void;
}

interface IBox {
  $flexDirection?: 'column' | 'row';
  $justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  $alignItems?: 'center' | 'flex-start' | 'flex-end';
  $padding?: number;
  $width?: number | string;
  $height?: number | string;
  $backgroundColor?: string;
  $borderRadius?: number;
}

const BoxWrapper = styled(View)<IBox>`
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
  align-items: ${({ $alignItems }) => $alignItems || 'flex-start'};
  padding: ${({ $padding }) => ($padding !== undefined ? `${$padding}px` : '0px')};
  width: ${({ $width }) =>
    typeof $width === 'string' ? $width : $width !== undefined ? `${$width}px` : 'auto'};
  height: ${({ $height }) =>
    typeof $height === 'string' ? $height : $height !== undefined ? `${$height}px` : 'auto'};
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'transparent'};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius !== undefined ? `${$borderRadius}px` : '0px'};
`;

const Box = React.forwardRef<View, PropsWithChildren<IProps>>((props, ref) => {
  const {
    children,
    flexDirection = 'column',
    gap = 0,
    justifyContent,
    alignItems,
    padding,
    width,
    height,
    backgroundColor,
    borderRadius,
    onClick,
  } = props;

  const spacedChildren = useSpacedChildren(children, gap, flexDirection);

  const content = (
    <BoxWrapper
      ref={ref}
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $padding={padding}
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
    >
      {spacedChildren}
    </BoxWrapper>
  );

  return onClick ? (
    <TouchableOpacity onPress={onClick} activeOpacity={0.7}>
      {content}
    </TouchableOpacity>
  ) : (
    content
  );
});

export default Box;
