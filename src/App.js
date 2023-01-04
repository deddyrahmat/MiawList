import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "pages/Landing";
import Page404 from "pages/Page404";
import Detail from "pages/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </Router>
    );
}

export default App;
