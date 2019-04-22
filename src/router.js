import React from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notifce from './pages/ui/notification'
import Messages from './pages/ui/messages'
import Tab from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
export default class IRouter extends React.Component{
    
    render() {
        
        return(
            <HashRouter>
                <App>
                    {/* <Route path="/login" component={Login}/> */}
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>
                    <Admin>
                        <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons} />
                            <Route path="/admin/ui/modals" component={Modals}/>
                            <Route path="/admin/ui/loadings" component={Loading}/>
                            <Route path="/admin/ui/notification" component={Notifce}/>
                            <Route path="/admin/ui/messages" component={Messages}/>
                            <Route path="/admin/ui/tabs" component={Tab}/>
                            <Route path="/admin/ui/gallery" component={Gallery}/>
                            <Route path="/admin/ui/carousel" component={Carousels}/>
                            <Route path="/admin/form/login" component={FormLogin}/>
                            <Route path="/admin/form/reg" component={FormRegister}/>
                            <Route component={NoMatch}/> 
                        </Switch>
                    </Admin>
                    }/>
                </App>
            </HashRouter>
        );
    }
}