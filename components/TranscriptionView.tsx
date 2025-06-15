import useCombinedTranscriptions from "@/hooks/useCombinedTranscriptions";
import * as React from "react";

export default function TranscriptionView() {
  const combinedTranscriptions = useCombinedTranscriptions();
  const containerRef = React.useRef<HTMLDivElement>(null);

  // scroll to bottom when new transcription is added
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [combinedTranscriptions]);

  return (
    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full max-w-xl mx-auto p-4 sm:p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md">
      {/* Fade-out gradient mask */}
      <div className="absolute top-0 left-0 right-0 h-4 sm:h-6 bg-gradient-to-b from-[var(--lk-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-gradient-to-t from-[var(--lk-bg)] to-transparent z-10 pointer-events-none" />

      {/* Scrollable content */}
      <div ref={containerRef} className="h-full flex flex-col gap-2 overflow-y-auto pr-2 py-4">
        {combinedTranscriptions.map((segment) => (
          <div
            id={segment.id}
            key={segment.id}
            className={
              segment.role === "assistant"
                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-2 text-sm sm:text-base rounded-md self-start max-w-[90%]"
                : "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-md p-2 text-sm sm:text-base self-end max-w-[90%]"
            }
          >
            {segment.text}
          </div>
        ))}
      </div>
    </div>
  );
}
