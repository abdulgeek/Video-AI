/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, VStack } from '@chakra-ui/react';

function Sidebar({ sessions, selectSession, createNewSession }: { sessions: any, selectSession: any, createNewSession: any }) {
    return (
        <Box className="sidebar" p={4} borderRight="1px" borderColor="gray.200">
            <VStack align="stretch">
                <Button onClick={createNewSession} colorScheme="teal" mb={4}>New Session</Button>
                {sessions.map((session: any, index: any) => (
                    <Button key={index} onClick={() => selectSession(index)} variant="ghost">
                        Session {index + 1}
                    </Button>
                ))}
            </VStack>
        </Box>
    );
}

export default Sidebar;
