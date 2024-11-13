export default function Title() {
  return (
    <header className="fixed top-0 -left-6 w-[30vh] h-20 bg-red-600 z-50 motion-preset-slide-down-lg" style={{ transform: 'skewX(-30deg)' }}>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center ">
        <h1 className="text-2xl ml-7 font-bold tracking-tighter transform skew-x-12" style={{ transform: 'skewX(30deg)' }}>
          Aryan
        </h1>
      </div>
    </header>
  );
}
