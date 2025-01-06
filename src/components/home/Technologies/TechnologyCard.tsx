import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechnologyCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  cardIndex: number;
}

export function TechnologyCard({ icon: Icon, title, items, cardIndex }: TechnologyCardProps) {
  return (
    <div
      className="tool-card relative rounded-xl overflow-hidden p-6"
      style={{
        '--card-index': cardIndex,
        backdropFilter: 'blur(10px)', // Apply blur effect
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
        color: '#ffffff', // White text for the card content
      } as React.CSSProperties}
    >
      <div className="tool-card-icon text-white text-3xl">
        <Icon />
      </div>
      <h3
        className="tool-card-text text-2xl font-bold mt-4"
        style={{
          color: '#ffffff', // Explicitly set the title color to white
        }}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
