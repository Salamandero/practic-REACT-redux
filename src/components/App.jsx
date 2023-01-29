import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AddContactPage } from '../pages/AddContactPage/AddContactPage';
import { HomePage } from '../pages/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" elements={<Layout />}>
        <Route index elements={<HomePage />} />
        <Route path="add" elements={<AddContactPage />} />
      </Route>
    </Routes>
  );
};
