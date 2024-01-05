/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';

function App() {
  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem('sessions');
    return saved ? JSON.parse(saved) : [[]];
  });
  const [activeSessionIndex, setActiveSessionIndex] = useState(sessions.length - 1);

  useEffect(() => {
    localStorage.setItem('sessions', JSON.stringify(sessions));
  }, [sessions]);

  const addVideoToSession = (sessionIndex: any, videoData: any) => {

    if (sessionIndex >= 0 && sessionIndex < sessions.length) {
      const updatedSessions = sessions.map((session: any, index: any) => {
        if (index === sessionIndex) {
          return [...session, videoData];
        }
        return session;
      });

      setSessions(updatedSessions);
    } else {
      console.error("Invalid session index:", sessionIndex);
    }
  };


  const createNewSession = () => {
    const newSessionIndex = sessions.length;
    setSessions([...sessions, []]);
    setActiveSessionIndex(newSessionIndex);
  };

  const selectSession = (index: any) => {
    setActiveSessionIndex(index);
  };

  return (
    <ChakraProvider>
      <Box className="app-container" display="flex">
        <Sidebar sessions={sessions} selectSession={selectSession} createNewSession={createNewSession} />
        <MainSection sessions={sessions} activeSessionIndex={activeSessionIndex} addVideo={addVideoToSession} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
