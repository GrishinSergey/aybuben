// src/App.tsx

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {LangProvider} from './i18n/LangContext';
import {AppShell} from './components/AppShell';
import {LearnPage} from './pages/LearnPage';
import {ThemePage} from './pages/ThemePage';
import {TestsPage} from './pages/TestsPage';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell/>}>
            {/* / → /learn */}
            <Route path="/" element={<Navigate to="/learn" replace/>}/>

            {/* Навчання */}
            <Route path="/learn" element={<LearnPage/>}/>
            <Route path="/learn/topic/:slug" element={<ThemePage/>}/>

            {/* Тести */}
            <Route path="/tests" element={<TestsPage/>}/>

            {/* 404 → /learn */}
            <Route path="*" element={<Navigate to="/learn" replace/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
