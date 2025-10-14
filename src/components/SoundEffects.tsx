import { useEffect } from "react";

interface SoundEffectProps {
  enabled?: boolean;
}

export default function SoundEffects({ enabled = false }: SoundEffectProps) {
  useEffect(() => {
    if (!enabled) return;

    // Create audio context for subtle sound effects
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    
    const playSound = (frequency: number, duration: number = 0.1) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    };

    // Add sound effects to interactive elements
    const addSoundToElement = (selector: string, frequency: number) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener('mouseenter', () => playSound(frequency, 0.05));
      });
    };

    // Add sounds to various interactive elements
    addSoundToElement('button', 800);
    addSoundToElement('[role="button"]', 800);
    addSoundToElement('a', 600);
    addSoundToElement('.hover\\:scale-110', 700);

    return () => {
      audioContext.close();
    };
  }, [enabled]);

  return null;
}
