import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsImpactPage from './pages/ProgramsImpactPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/programs',
  component: ProgramsImpactPage,
});

const getInvolvedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/get-involved',
  component: GetInvolvedPage,
});

const donateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/donate',
  component: DonatePage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  programsRoute,
  getInvolvedRoute,
  donateRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
