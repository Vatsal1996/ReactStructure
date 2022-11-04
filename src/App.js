import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes,Navigate  } from 'react-router-dom'
import './scss/style.scss'
// import { Signup } from './views/auth/signup'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Signup = React.lazy(() => import('./views/auth/signup'))
const Signin = React.lazy(() => import('./views/auth/login'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Signin />} />
            <Route exact path="/" name="Register Page" element={<Signup />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
            
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
