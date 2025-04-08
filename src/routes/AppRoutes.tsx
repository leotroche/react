import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const NotFound = lazy(() => import('../pages/NotFound'))

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={About} path="/about" />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  )
}
