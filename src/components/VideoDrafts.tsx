/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Image, Text, Grid, GridItem, Link, useColorModeValue, Center } from '@chakra-ui/react';

function VideoDrafts({ videos, onSelectVideo }: { videos: any, onSelectVideo: any }) {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
      <Center>
        <Text>
          {videos.length === 0 && 'No videos available'}
        </Text>
      </Center>
      {videos.map((video: any, index: any) => (
        <GridItem key={index} p={4} borderWidth="1px" borderRadius="lg" borderColor={borderColor} overflow="hidden" cursor="pointer" onClick={() => onSelectVideo(video)}>
          {video.thumbnail && (
            <Image src={video.thumbnail} alt={video.title} boxSize="250px" objectFit="cover" w="full" />
          )}
          <Box p={2}>
            <Text fontWeight="bold" noOfLines={1} title={video.title}>{video.title}</Text>
            <Link href={video.link} isExternal color="teal.500" fontSize="sm">Watch Video</Link>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export default VideoDrafts;
