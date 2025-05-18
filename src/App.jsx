import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home'
import MakingOf from './pages/MakingOf'
import Projects from './pages/Projects'
import Layout from './pages/Layout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path ="projects" element={<Projects />} />
                    <Route path ="making-of/:id" element={<MakingOf />} />

                    {/* // Shows the 404 error page when the URL does not match any existing routes. */}
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

//TODO:
//DONE => // 1. Render only the first 4 projects on the home page.
//DONE => // 2. Add a button to FairyTaleTile to navigate to the detail page.
//DONE => // 3. Render projects on the projects page.
//DONE => // 4. Add a all projects button to the home page.
//Not doing that anymore, because you automatically search when filtering your data 
//DONE => // 5. Add a delay on the search bar.
// 6. Add a loading screen when data is being fetched. => I will do this when i have an API to fetch data from.
// 7. When there is no video in the data, hide the video section.
// 8. When you click on the visit website button, load in another layout. When they click on the back arrow, they should be send back and not be redirected. (that way they can go back to the portal page they were on.)
//DONE 9. Styling.