import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = lazy(() => import("./Navbars/header"));
const Footer = lazy(() => import("./Navbars/footer"));
const ModulePage = lazy(() => import("./Modules/modulePage"));
const ImageResize = lazy(() => import("./Modules/imageResize"));
const Home = lazy(() => import("./Home"));


const App: React.FC = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            {}
            <Switch>
                <Route path="/imageResize">
                    <Header />
                    <ImageResize />
                    <Footer />
                </Route>

                <Route path="/modules">
                    <Header />
                    <ModulePage />
                    <Footer />
                </Route>

                <Route path="/">
                    <Header />
                    <Home />
                    <Footer />
                </Route>

            </Switch>
        </Suspense>
    </Router>
);

export default App;