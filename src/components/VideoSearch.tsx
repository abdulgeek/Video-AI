/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';

function VideoSearch({ searchQuery, setSearchQuery, videos, selectedVideo }: { searchQuery: any, setSearchQuery: any, videos: any, selectedVideo: any }) {
    const handleSearch = (e: any) => {
        setSearchQuery(e.target.value);
    };

    const filteredVideos = searchQuery
        ? videos.filter((video: any) =>
            video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.link.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    return (
        <Box p={4}>
            <Input
                type="text"
                placeholder="Search videos"
                value={searchQuery}
                onChange={handleSearch}
                mb={4}
            />
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
                {filteredVideos.map((video: any, index: any) => (
                    <GridItem key={index} p={4} boxShadow="md" borderRadius="lg" bg="white">
                        {video.thumbnail && (
                            <Image src={video.thumbnail} alt={video.title} borderRadius="md" />
                        )}
                        <Text mt={2} fontSize="lg" fontWeight="semibold">
                            {video.title}
                        </Text>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
}

export default VideoSearch;
