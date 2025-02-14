import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Calendar';
import { FAQ } from './App/FAQ';
import { CV } from './App/CV';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="faq/*" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
