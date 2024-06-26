import "./App.css";

function App() {
  return (
    <div className="bg-cblack min-h-screen flex items-center justify-center p-6">
      <div className="text-center text-6xl text-csand mb-6">
        <h1 className="mb-6 animate-bounce-once">Analyzing real data.</h1>
        <h1 className="mb-6 animate-bounce-once-delayed">
          Using machine learning.
        </h1>
        <h5 className="mb-5 text-cteal text-xl">
          by: Duygu “DC” Celik, Sean Connelly, Tanner DeVore, Prinsa Patel
        </h5>

        <div className="flex justify-center p-4">
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
            href="https://github.com/prinsaa/audit-analysis/tree/main/Data%20Codebase"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6"
          >
            <button className="bg-cteal hover:bg-slate-700 text-white text-3xl font-bold py-2 px-4 rounded transition duration-300">
              See Code
            </button>
          </a>
        </div>

        <div className="p-6">
          <div className="bg-csand p-6 rounded-xl text-cblack">
            <h2 className="text-3xl mb-4 underline font-semibold">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-left text-xl">
              <li className="mb-2">
                Extraction, Transformation, and Loading (ETL) of Over 1 Million
                Data Points
              </li>
              <li className="mb-2">
                Data Visualization for Insightful Analysis
              </li>
              <li className="mb-2">
                Engineered Predictive Models Using Machine Learning Techniques
                to Accurately Assess Audit Probabilities in Policy Data
              </li>
              <li className="mb-2">
                Performed In-Depth Data Analysis to Uncover Critical Insights,
                Allowing for Strategic Decision-Making and Optimizing Business
                Operations
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-csand p-6 rounded-xl text-cblack">
            <h2 className="text-3xl mb-4 underline font-semibold">
              About the Team
            </h2>
            <p className="text-xl">
              Our team comprises knowledge in software development, data
              science, machine learning, and aritifical intelligence. We are
              passionate about leveraging technology to solve complex business
              problems. Learn more about each of us below:
            </p>
            <div className="flex items-center justify-center">
              <div className="pl-5">
                <a
                  href="https://www.linkedin.com/in/celikduygu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6"
                >
                  <h6 className="text-cteal font-semibold text-2xl underline hover:text-slate-700">
                    Duygu “DC” Celik
                  </h6>
                </a>
              </div>
              <div className="pl-5">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6"
                >
                  <h6 className="text-cteal font-semibold text-2xl underline hover:text-slate-700">
                    Sean Connelly
                  </h6>
                </a>
              </div>
              <div className="pl-5">
                <a
                  href="https://www.linkedin.com/in/tanner-devore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6"
                >
                  <h6 className="text-cteal font-semibold text-2xl underline hover:text-slate-700">
                    Tanner DeVore
                  </h6>
                </a>
              </div>
              <div className="pl-5">
                <a
                  href="https://www.linkedin.com/in/prinsa-patel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6"
                >
                  <h6 className="text-cteal font-semibold text-2xl underline hover:text-slate-700">
                    Prinsa Patel
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
