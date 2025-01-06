import { AnimationWrapper } from '../../animations/AnimationWrapper';

interface TechnologyListProps {
  items: string[];
  delay?: number;
}

export function TechnologyList({ items, delay = 0 }: TechnologyListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <AnimationWrapper key={item} animation="slideIn" delay={delay + index * 100}>
          <li className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            {item}
          </li>
        </AnimationWrapper>
      ))}
    </ul>
  );
}
