// src/App.tsx

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {LangProvider} from './i18n/LangContext';
import {AppShell} from './components/AppShell';
import {LearnPage} from './pages/LearnPage';
import {ThemePage} from './pages/ThemePage';
import {TestsPage} from './pages/TestsPage';
import {AnimalQuizPage} from './pages/AnimalQuizPage';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<AppShell/>}>
            {/* / → /learn */}
            <Route path="/" element={<Navigate to="/learn" replace/>}/>

            {/* Learning */}
            <Route path="/learn" element={<LearnPage/>}/>
            <Route path="/learn/topic/:slug" element={<ThemePage/>}/>

            {/* Tests */}
            <Route path="/tests" element={<TestsPage/>}/>
            <Route path="/tests/animals" element={<AnimalQuizPage/>}/>

            {/* 404 → /learn */}
            <Route path="*" element={<Navigate to="/learn" replace/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
