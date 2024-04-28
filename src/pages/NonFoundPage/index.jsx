import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Loader } from '../../components/Loader';
import css from './index.module.css';

export const NonFoundPage = () => {
  return (
    <div className={css.NonFoundPage}>
        <h1 className={css.titleNonFoundPage}>404 Page Not Found</h1>
        <p className={css.textNonFoundPage}>Sorry, this page does not exist.</p>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </div>
  );
}

export default NonFoundPage;