/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Input, Text } from '@chakra-ui/react';

function ChatArea({ selectedVideo }: { selectedVideo: any }) {
  return (
    <Box className="chat-area" mt={4}>
      {selectedVideo ? (
        <Box>
          <Text fontSize="lg" fontWeight="bold">Chat about: {selectedVideo.title}</Text>
          <Input mt={2} placeholder={`Chat about ${selectedVideo.title}`} />
        </Box>
      ) : (
        <Text>Select a video to start chatting</Text>
      )}
    </Box>
  );
}

export default ChatArea;
