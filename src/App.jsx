import "./App.css";

function App() {
  return (
    <div className="bg-cblack min-h-screen flex items-center justify-center">
      <div className="text-center text-6xl text-csand mb-6">
        <h1 className="mb-6 animate-bounce-once">Analyzing real data.</h1>
        <h1 className="mb-6 animate-bounce-once-delayed">
          Using machine learning.
        </h1>
        <h5 className="mb-5 text-cteal text-xl">
          by: Duygu “DC” Celik, Sean Connelly, Tanner DeVore, Prinsa Patel
        </h5>

        <div className="flex justify-center">
          <a
            href="https://medium.com/@spconnel/commercial-insurance-exposure-audit-attribution-245a0020ca23"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-7"
          >
            <button className="bg-cteal hover:bg-slate-700 text-white text-3xl font-bold py-2 px-4 rounded transition duration-300">
              Read Here
            </button>
          </a>
          <a
            href="https://github.com/prinsaa/audit-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6"
          >
            <button className="bg-cteal hover:bg-slate-700 text-white text-3xl font-bold py-2 px-4 rounded transition duration-300">
              See Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
