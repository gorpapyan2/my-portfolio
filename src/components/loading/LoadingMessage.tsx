import { useState, useEffect } from 'react';

const messages = [
  "Did you know? The first computer virus was created in 1986.",
  "Success is not final; failure is not fatal.",
  "Analyzing your data... Please wait.",
  "Optimizing your experience...",
  "Preparing something amazing..."
];

export function LoadingMessage({ message }: { message?: string }) {
  const [currentMessage, setCurrentMessage] = useState(message || messages[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (message) return;

    const messageInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(messageInterval);
  }, [message]);

  return (
    <div className="w-80 text-center">
      <p className={`font-light text-lg text-white/90 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {currentMessage}
      </p>
    </div>
  );
}