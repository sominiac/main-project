import { createRemoteAppComponent } from "@module-federation/bridge-react";
import { loadRemote } from "@module-federation/enhanced/runtime";

const LoadingComponent = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <div>Loading remote application...</div>
  </div>
);

const ErrorFallback = ({ error }: { error: Error }) => (
  <div
    style={{
      padding: "20px",
      border: "1px solid #ff6b6b",
      borderRadius: "8px",
    }}
  >
    <h3>Remote Application Load Failed</h3>
    <p>Error details: {error.message}</p>
    <button onClick={() => window.location.reload()}>Reload Page</button>
  </div>
);

const Calendar = createRemoteAppComponent({
  loader: () => loadRemote("calendar/export-app"),
  loading: <LoadingComponent />,
  fallback: ErrorFallback,
});

function App() {
  return (
    <>
      <div className="vw-100 vh-100 d-flex bg-secondary overflow-hidden">
        <aside className="col-1 h-100 bg-primary rounded-end-4 px-3 py-4">
          <nav className="navbar">
            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  className="bi bi-boxes"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                </svg>
              </a>
            </div>
          </nav>
        </aside>
        <main className="h-100 d-flex flex-column flex-grow-1 px-3 py-4">
          <nav className="navbar navbar-expand-lg bg-body-tertiary rounded">
            <div className="container-fluid">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Calculator
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      aria-disabled="true"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Action two
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Action three
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/*<span>Hello</span>*/}
          <Calendar />
        </main>
      </div>
    </>
  );
}

export default App;
