import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Tweets } from "./pages/tweets/Tweets";
import { NotFound } from "./pages/notFound/NotFound";

export const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
