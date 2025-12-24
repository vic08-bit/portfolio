// file: components/HeroBackground.tsx
'use client';

export const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden bg-light-bg dark:bg-dark-bg">
    {/* --- DARK MODE STATIC AURORA --- */}
    <div className="hidden dark:block">
      <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500 opacity-30 mix-blend-screen blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600 opacity-30 mix-blend-screen blur-[120px]"></div>
      <div className="absolute top-[20%] left-[30%] h-[400px] w-[400px] rounded-full bg-blue-600 opacity-25 mix-blend-screen blur-[120px]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>

    {/* --- LIGHT MODE STATIC AURORA (Made Stronger) --- */}
    <div className="block dark:hidden">
      {/* Increased opacity and used darker colors so they show up on white */}
      <div className="absolute top-[-5%] left-[-5%] h-[500px] w-[500px] rounded-full bg-blue-400 opacity-50 mix-blend-multiply blur-[100px]"></div>
      <div className="absolute bottom-[-5%] right-[-5%] h-[500px] w-[500px] rounded-full bg-purple-400 opacity-50 mix-blend-multiply blur-[100px]"></div>
      <div className="absolute top-[30%] left-[40%] h-[300px] w-[300px] rounded-full bg-cyan-300 opacity-50 mix-blend-multiply blur-[100px]"></div>
    </div>
  </div>
);