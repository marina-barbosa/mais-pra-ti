import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { Header } from './components/header'
import { Gallery } from './components/gallery'
import { Settings } from './components/settings'
import { Profile } from './components/profile'
import { Login } from './components/login'
import { HeaderReforcando } from './components/reforcando/headerReforcando'
import UserDetail from './components/reforcando/userDetail'
import LoginReforcando from './components/reforcando/loginReforcando'
import Dashboard from './components/reforcando/dashboard/dashboard'
import Overview from './components/reforcando/dashboard/overview'
import Reports from './components/reforcando/dashboard/reports'
import NotFound from './components/notFound'
import ProtectedRoute from './components/protectedRoute'
import { AuthProvider } from './components/authContext';
import Breadcrumbs from './components/reforcando/breadcrumb'
import Search from './components/reforcando/search'
import SearchResults from './components/reforcando/searchResults'
import { Suspense, lazy } from 'react';
import Tabs from './components/reforcando/tabs/tabs'
import TabContent1 from './components/reforcando/tabs/tabContent1'
import TabContent2 from './components/reforcando/tabs/tabContent2'
import TabContent3 from './components/reforcando/tabs/tabContent3'
import ModalRoutes from './components/reforcando/modalRoutes'


const HeavyComponent1 = lazy(() => import('./components/reforcando/heavyComponent1'));
const HeavyComponent2 = lazy(() => import('./components/reforcando/heavyComponent2'));

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          {/* <Header /> */}
          <HeaderReforcando />
          <Breadcrumbs />
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <Routes>
              <Route path="/" Component={Gallery} />
              <Route path="/login" Component={Login} />
              <Route path="/profile" Component={Profile} />
              <Route path="/settings" Component={Settings} />
              <Route path="*" element={<NotFound />} />
              {/* reforcando */}
              <Route path="/user/:userId" element={<UserDetail />} />
              <Route path="/loginreforcando" element={<LoginReforcando />} />
              <Route path="heavy1" element={<HeavyComponent1 />} />
              <Route path="heavy2" element={<HeavyComponent2 />} />
              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route index element={<Navigate to="overview" />} />
                <Route path="overview" element={<Overview />} >
                  <Route path="settings" element={<Settings />} />
                  <Route path="reports" element={<Reports />} />
                </Route>
              </Route>
              <Route path="/tab" element={<Tabs />}>
                <Route path="tab1" element={<TabContent1 />} />
                <Route path="tab2" element={<TabContent2 />} />
                <Route path="tab3" element={<TabContent3 />} />
              </Route>
              <Route path="/modal" element={<ModalRoutes />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search-results" element={<SearchResults />} />
            </Routes>
          </Suspense>

        </Router>
      </AuthProvider>
    </>
  )
}

export default App
