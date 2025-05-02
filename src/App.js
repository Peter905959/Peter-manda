// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import VideoPlayer from "./pages/VideoPlayer";
// import Contact from "./pages/Contact"; // Import the Contact page
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/video/:videoName" element={<VideoPlayer />} />
//         <Route path="/contact" element={<Contact />} />{" "}
//         {/* Add the Contact route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import VideoPlayer from "./pages/VideoPlayer";
// import Contact from "./pages/Contact";
// import Header from "./components/Header"; // Import the Header component
// import "./App.css";
// function App() {
//   return (
//     <Router>
//       <Header /> {/* Header is outside the routes to persist across pages */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/video/:videoName" element={<VideoPlayer />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import Contact from "./pages/Contact";
import Header from "./components/Header"; // Import Header component
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <TransitionGroup className="transition-group">
        <CSSTransition timeout={500} classNames="fade">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* We are passing the query parameters for video */}
            <Route path="/video" element={<VideoPlayer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
