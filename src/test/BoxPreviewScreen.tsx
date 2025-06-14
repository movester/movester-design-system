import React from 'react';
import { Text, Alert } from 'react-native';
import Box from '../lib/Box';

const BoxPreviewScreen = () => {
  const handleClick = () => {
    Alert.alert('Box clicked!');
  };

  return (
    <Box padding={20} gap={16} backgroundColor="#f5f5f5" borderRadius={12}>
      <Text style={{ fontSize: 18 }}>✅ 기본 Box 동작 테스트</Text>

      <Box
        backgroundColor="#d0ebff"
        padding={10}
        borderRadius={8}
        onClick={handleClick}
      >
        <Text>Touchable Box 클릭 테스트</Text>
      </Box>

      <Box flexDirection="row" gap={10}>
        <Box backgroundColor="#ffe066" padding={10} borderRadius={6}>
          <Text>Row Item 1</Text>
        </Box>
        <Box backgroundColor="#ffa94d" padding={10} borderRadius={6}>
          <Text>Row Item 2</Text>
        </Box>
      </Box>

      <Box>
        <Text>flexDirection: column 테스트</Text>
      </Box>
    </Box>
  );
};

export default BoxPreviewScreen;
