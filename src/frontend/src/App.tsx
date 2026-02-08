import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useEvasiveButton } from '@/hooks/useEvasiveButton';
import { Heart } from 'lucide-react';

export default function App() {
  const [answered, setAnswered] = useState(false);
  const { position, handlePointerEnter, handlePointerDown, containerRef } = useEvasiveButton();

  const handleYesClick = () => {
    setAnswered(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <main className="flex-1 flex items-center justify-center p-4">
        {!answered ? (
          <div
            ref={containerRef}
            className="relative w-full max-w-2xl mx-auto"
            style={{ minHeight: '500px' }}
          >
            <div className="text-center space-y-8 px-4">
              <div className="space-y-4">
                <Heart className="w-20 h-20 mx-auto text-pink-500 fill-pink-500 animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold text-pink-600 tracking-tight">
                  Will you be my Valentine?
                </h1>
                <p className="text-lg md:text-xl text-pink-400 font-medium">
                  Choose wisely... 💕
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Button
                  onClick={handleYesClick}
                  size="lg"
                  className="text-xl px-12 py-8 bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full font-bold"
                >
                  Yes! 💖
                </Button>

                <Button
                  onPointerEnter={handlePointerEnter}
                  onPointerDown={handlePointerDown}
                  onTouchStart={handlePointerDown}
                  size="lg"
                  variant="outline"
                  className="text-xl px-12 py-8 border-2 border-pink-300 text-pink-500 hover:bg-pink-50 shadow-md transition-all duration-200 rounded-full font-bold absolute"
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'none',
                  }}
                >
                  No 😢
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 px-4 animate-in fade-in duration-700">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold text-pink-600 tracking-tight">
                Good choice
              </h2>
              <div className="flex justify-center">
                <img
                  src="/assets/generated/valentine-good-choice-meme.dim_1024x1024.png"
                  alt="Good choice meme"
                  className="max-w-full w-full max-h-[500px] object-contain rounded-3xl shadow-2xl border-4 border-pink-200"
                />
              </div>
              <div className="flex items-center justify-center gap-2 text-2xl text-pink-500">
                <Heart className="w-8 h-8 fill-pink-500 animate-pulse" />
                <Heart className="w-8 h-8 fill-pink-500 animate-pulse delay-100" />
                <Heart className="w-8 h-8 fill-pink-500 animate-pulse delay-200" />
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="py-6 text-center text-sm text-pink-400">
        <p>
          © 2026. Built with <Heart className="inline w-4 h-4 fill-pink-400 text-pink-400" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-600 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
