import Enhancement from "./components/Enhancement.jsx";
function App() {
  
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full px-4 gap-[clamp(1rem,4vh,4rem)]">
      <div class="absolute inset-0 -z-10 h-full w-full bg-slate-100 bg-[linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      {/* Header */}
      <header className="h-[5vh] flex flex-col items-center justify-center gap-[clamp(0.5rem,1vh,1rem)] text-center">
        <h1 className="text-[clamp(1.5rem,2.5vw,3rem)] font-bold">
          AI Image Enhancer
        </h1>
        <p className="text-[clamp(0.875rem,1vw,1.25rem)] text-gray-600 font-medium">
          Upload your image and let AI enhance it in seconds!
        </p>
      </header>

      {/* Main Content */}
      <Enhancement />

      {/* Footer */}
      <footer className="h-[2vh] text-[clamp(0.625rem,0.8vw,0.9rem)] text-gray-500 text-center">
        Made By @Devasheesh2004
      </footer>
    </div>
  );
}

export default App;

