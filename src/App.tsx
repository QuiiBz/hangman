import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './lib/Layout';
import Home from './routes/Home';

const LazyPlay = lazy(() => import('./routes/Play'));
const LazyStatistics = lazy(() => import('./routes/Statistics'));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/play"
          element={
            <Suspense fallback="Loading...">
              <LazyPlay />
            </Suspense>
          }
        />
        <Route
          path="/statistics"
          element={
            <Suspense fallback="Loading...">
              <LazyStatistics />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
