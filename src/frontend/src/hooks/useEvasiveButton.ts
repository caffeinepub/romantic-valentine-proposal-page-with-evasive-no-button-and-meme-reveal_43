import { useState, useRef, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 300, y: 200 });

  const getRandomPosition = useCallback((): Position => {
    if (!containerRef.current) {
      return { x: 300, y: 200 };
    }

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Button dimensions (approximate based on the size we set)
    const buttonWidth = 200;
    const buttonHeight = 80;
    
    // Calculate safe boundaries (keeping button fully visible)
    const minX = buttonWidth / 2 + 20;
    const maxX = containerRect.width - buttonWidth / 2 - 20;
    const minY = buttonHeight / 2 + 20;
    const maxY = containerRect.height - buttonHeight / 2 - 20;
    
    // Generate random position within safe boundaries
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;
    
    return {
      x: Math.max(minX, Math.min(maxX, newX)),
      y: Math.max(minY, Math.min(maxY, newY))
    };
  }, []);

  const handlePointerEnter = useCallback(() => {
    setPosition(getRandomPosition());
  }, [getRandomPosition]);

  const handlePointerDown = useCallback((e: React.PointerEvent | React.TouchEvent) => {
    e.preventDefault();
    setPosition(getRandomPosition());
  }, [getRandomPosition]);

  return {
    position,
    handlePointerEnter,
    handlePointerDown,
    containerRef
  };
}
