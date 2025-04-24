import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home'
import DetailPage from './pages/MakingOf'
import Projects from './pages/Projects'
import Layout from './pages/Layout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="making-of" element={<DetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
