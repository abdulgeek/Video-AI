/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';

function VideoInputForm({ addVideo }: { addVideo: any }) {
    const [videoData, setVideoData] = useState({ link: '', title: '', thumbnail: '' });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addVideo(videoData);
        setVideoData({ link: '', title: '', thumbnail: '' });
    };

    return (
        <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
            <Input placeholder="YouTube Link" value={videoData.link} onChange={(e) => setVideoData({ ...videoData, link: e.target.value })} />
            <Input placeholder="Title" value={videoData.title} onChange={(e) => setVideoData({ ...videoData, title: e.target.value })} />
            <Input placeholder="Thumbnail (optional)" value={videoData.thumbnail} onChange={(e) => setVideoData({ ...videoData, thumbnail: e.target.value })} />
            <Button type="submit" colorScheme="blue">Add Video</Button>
        </VStack>
    );
}

export default VideoInputForm;
