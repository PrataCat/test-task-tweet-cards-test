import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('../SharedLayout'));
const HomePage = lazy(() => import('../../pages/HomePage'));
const TweetsPage = lazy(() => import('../../pages/TweetsPage'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

// const App = () => {
//   return (
//     <header>
//       <h1>This is my app</h1>
//     </header>
//   );
// };

// export default App;
