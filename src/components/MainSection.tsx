/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import VideoInputForm from './VideoInputForm';
import VideoDrafts from './VideoDrafts';
import ChatArea from './ChatArea';
import { Input, Text, Grid, GridItem, Image, Checkbox, VStack } from '@chakra-ui/react';

function MainSection({ sessions, activeSessionIndex, addVideo }: { sessions: any, activeSessionIndex: any, addVideo: any }) {
    const [selectedVideo, setSelectedVideo] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState<any>('');
    const [draftVideos, setDraftVideos] = useState<any>([]);

    useEffect(() => {
        setSelectedVideo(null);
        setDraftVideos([]);
    }, [activeSessionIndex]);

    const handleSearch = (e: any) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleVideoSelect = (video: any, isChecked: any) => {
        if (isChecked) {
            if (!draftVideos.find((draftVideo: any) => draftVideo.title === video.title)) {
                setDraftVideos([...draftVideos, video]);
            }
        } else {
            setDraftVideos(draftVideos.filter((draftVideo: any) => draftVideo.title !== video.title));
        }
    };


    const currentSessionVideos = Array.isArray(sessions[activeSessionIndex]) ? sessions[activeSessionIndex] : [];
    const filteredVideos = currentSessionVideos.filter((video: any) =>
        video?.title?.toLowerCase().includes(searchQuery)
    );

    return (
        <VStack className="main-section" p={4} flexGrow={1}>
            <VideoInputForm addVideo={(video: any) => addVideo(activeSessionIndex, video)} />
            <Text fontSize="2xl" my={4}>New Videos</Text>
            <VideoDrafts videos={currentSessionVideos} onSelectVideo={setSelectedVideo} />

            <Input
                mt={4}
                placeholder="Search videos"
                value={searchQuery}
                onChange={handleSearch}
            />
            {searchQuery && (
                <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6} mt={4}>
                    {filteredVideos.map((video: any, index: any) => (
                        <GridItem key={index} cursor="pointer">
                            <Checkbox
                                isChecked={draftVideos.some((draftVideo: any) => draftVideo.title === video.title)}
                                onChange={(e) => handleVideoSelect(video, e.target.checked)}
                            />
                            {video.thumbnail && (
                                <Image src={video.thumbnail} alt={video.title} boxSize="150px" objectFit="cover" />
                            )}
                            <Text mt={2}>{video.title}</Text>
                        </GridItem>
                    ))}
                </Grid>
            )}
            <Text fontSize="2xl" my={4}>Drafted Videos</Text>
            <VideoDrafts videos={draftVideos} onSelectVideo={setSelectedVideo} />
            <ChatArea selectedVideo={selectedVideo} />
        </VStack>
    );
}

export default MainSection;
