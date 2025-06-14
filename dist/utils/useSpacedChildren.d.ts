import React from 'react';
/**
 * gap을 구현하기 위한 유틸 훅
 * @param children - JSX children
 * @param gap - number px 단위
 * @param flexDirection - row 또는 column
 * @returns 자식 요소 사이에 gap을 적용한 배열
 */
export declare function useSpacedChildren(children: React.ReactNode, gap: number, flexDirection?: 'row' | 'column'): React.ReactNode[];
