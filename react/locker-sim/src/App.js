// Sources
// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/#
// https://www.robinwieruch.de/react-button/
// https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
// https://stackoverflow.com/questions/65222576/how-to-use-a-global-variable-in-several-files
// https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method



import React from "react";
// import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Lockers from "./pages/lockers";
import Keypad from "./pages/keypad";
import Contents from "./pages/contents";
 
function App() {
  const [locker_number, locker_password, locker_contents] = React.useState(1)

    return (
        <Router>
            <Routes>
                <Route
                    path="/lockers"
                    element={<Lockers />}
                />
                <Route path="/keypad" element={<Keypad />} />
                <Route path="/" element={<Lockers />}/>
                <Route path="/contents" element={<Contents />}/>
            </Routes>
        </Router>
    );
}
 
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
