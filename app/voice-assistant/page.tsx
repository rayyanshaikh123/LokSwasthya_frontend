"use client";

import { CloseIcon } from "@/components/CloseIcon";
import { NoAgentNotification } from "@/components/NoAgentNotification";
import TranscriptionView from "@/components/TranscriptionView";
import {
  BarVisualizer,
  DisconnectButton,
  RoomAudioRenderer,
  RoomContext,
  VideoTrack,
  VoiceAssistantControlBar,
  useVoiceAssistant,
  useChat,
  useConnectionState,
} from "@livekit/components-react";
import { AnimatePresence, motion } from "framer-motion";
import { Room, RoomEvent } from "livekit-client";
import { useCallback, useEffect, useState } from "react";
import type { ConnectionDetails } from "../api/connection-details/route";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "../context/LanguageContext";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const LanguageSwitcher = dynamic(() => import("../components/LanguageSwitcher"), {
  ssr: false,
});

export default function VoiceAssistantPage() {
  const [room] = useState(new Room());
  const { t } = useLanguage();
  const connectionState = useConnectionState(room);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log('Current LiveKit Connection State:', connectionState);

  const onConnectButtonClicked = useCallback(async () => {
    const url = new URL(
      process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT ?? "/api/connection-details",
      window.location.origin
    );
    const response = await fetch(url.toString());
    const connectionDetailsData: ConnectionDetails = await response.json();

    await room.connect(connectionDetailsData.serverUrl, connectionDetailsData.participantToken);
    await room.localParticipant.setMicrophoneEnabled(true);
  }, [room]);

  useEffect(() => {
    room.on(RoomEvent.MediaDevicesError, onDeviceFailure);

    return () => {
      room.off(RoomEvent.MediaDevicesError, onDeviceFailure);
    };
  }, [room]);

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-display font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              LokSwasthya
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Link 
                href="/" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                {t('nav.backToHome')}
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {t('nav.backToHome')}
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-grow container mx-auto px-4 sm:px-6 py-6 sm:py-8 mt-16 sm:mt-20">
        <RoomContext.Provider value={room}>
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mx-auto h-full">
            {/* Left: Chat log and input */}
            <AnimatePresence mode="wait">
              {connectionState !== "disconnected" && (
                <div className="w-full lg:w-80 min-w-0 max-w-full lg:max-w-xs flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow flex-grow overflow-y-auto overflow-x-hidden box-border">
                  <h3 className="text-sm sm:text-base font-semibold mb-2 text-teal-700 dark:text-teal-300">Chat Log</h3>
                  <ChatLogSection />
                  <div className="mt-auto">
                    <CustomChat />
                  </div>
                </div>
              )}
            </AnimatePresence>
            {/* Right: Assistant card */}
            <div className="flex-1 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-xl flex-grow flex flex-col"
              >
                <SimpleVoiceAssistant onConnectButtonClicked={onConnectButtonClicked} />
              </motion.div>
            </div>
          </div>
        </RoomContext.Provider>
      </div>
    </main>
  );
}

function CustomChat() {
  const { send } = useChat();
  const [newMessage, setNewMessage] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newMessage.trim()) {
      send(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="mt-4 flex gap-2">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        placeholder="Type your message and press Enter..."
        aria-label="Type your message"
      />
    </div>
  );
}

function ChatLogSection() {
  const { chatMessages } = useChat();

  return (
    <div className="mb-4 max-h-48 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded p-4 shadow">
      <h3 className="font-semibold mb-2 text-teal-700 dark:text-teal-300">Chat Log</h3>
      {chatMessages.length === 0 && (
        <div className="text-gray-400 text-sm">No messages yet.</div>
      )}
      {chatMessages.map((msg, idx) => (
        <div key={idx} className="mb-1 text-sm">
          <span className="font-bold text-teal-600 dark:text-teal-400">Patient:</span>{" "}
          <span>{msg.message}</span>
        </div>
      ))}
    </div>
  );
}

function SimpleVoiceAssistant(props: { onConnectButtonClicked: () => void }) {
  const { state: agentState } = useVoiceAssistant();
  const { t } = useLanguage();

  return (
    <>
      <AnimatePresence mode="wait">
        {agentState === "disconnected" ? (
          <motion.div
            key="disconnected"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.09, 1.04, 0.245, 1.055] }}
            className="flex flex-col items-center justify-center py-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-display font-bold mb-4 text-teal-600 dark:text-teal-400">{t('voiceAssistant.title')}</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                {t('voiceAssistant.subtitle')}
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              onClick={() => props.onConnectButtonClicked()}
            >
              {t('voiceAssistant.startButton')}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="connected"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.09, 1.04, 0.245, 1.055] }}
            className="flex flex-col items-center gap-6"
          >
            <AgentVisualizer />
            <div className="w-full mb-4">
              <TranscriptionView />
            </div>
            <div className="w-full">
              <ControlBar onConnectButtonClicked={props.onConnectButtonClicked} />
            </div>
            <RoomAudioRenderer />
            <NoAgentNotification state={agentState} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AgentVisualizer() {
  const { state: agentState, videoTrack, audioTrack } = useVoiceAssistant();

  if (videoTrack) {
    return (
      <div className="h-[200px] sm:h-[300px] md:h-[400px] w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-teal-50 dark:bg-gray-700">
        <VideoTrack trackRef={videoTrack} />
      </div>
    );
  }
  return (
    <div className="h-[100px] sm:h-[150px] md:h-[200px] w-full max-w-2xl mx-auto">
      <BarVisualizer
        state={agentState}
        barCount={5}
        trackRef={audioTrack}
        className="agent-visualizer text-teal-600 dark:text-teal-400"
        options={{ minHeight: 24 }}
      />
    </div>
  );
}

function ControlBar(props: { onConnectButtonClicked: () => void }) {
  const { start, stop, isSpeaking, isActive } = useVoiceAssistant();
  const { t } = useLanguage();

  const isDisconnected = !isActive;

  return (
    <VoiceAssistantControlBar
      onStart={start}
      onStop={stop}
      isSpeaking={isSpeaking}
      isDisconnected={isDisconnected}
      micEnabled={true}
      micAllowed={true}
      className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2 sm:p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner w-full"
    >
      <DisconnectButton className="px-4 py-2 text-sm sm:text-base bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"><CloseIcon /> {t('controls.disconnect')}</DisconnectButton>
    </VoiceAssistantControlBar>
  );
}

function onDeviceFailure(error: Error) {
  console.error("Device error", error);
} 