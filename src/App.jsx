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

                    {/* // Shows the 404 error page when the URL does not match any existing routes. */}
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

//TODO:
// 1. Render only the first 4 projects on the home page.
//DONE => // 2. Add a button to FairyTaleTile to navigate to the detail page.
//DONE => // 3. Render projects on the projects page.
// 4. Add a all projects button to the home page.
// 5. Add a search button in the navigation bar.
// 6. Add a delay on the search bar.
// 7. Add a loading screen when data is being fetched.
// 8. Styling.