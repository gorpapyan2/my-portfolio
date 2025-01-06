import { LoadingSpinner } from './LoadingSpinner';
import { ParticlesBackground } from './ParticlesBackground';
import { LoadingMessage } from './LoadingMessage';
import { ProgressRing } from './ProgressRing';

interface LoadingScreenProps {
  progress?: number;
  message?: string;
}

export function LoadingScreen({ progress, message }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 via-gray-900 to-black">
      <ParticlesBackground />
      
      <div className="relative flex flex-col items-center gap-8 p-8">
        <div className="relative">
          <ProgressRing progress={progress} />
          <LoadingSpinner />
        </div>
        
        <LoadingMessage message={message} />
      </div>
    </div>
  );
}