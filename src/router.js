import React from 'react';
import { HashRouter,Route,Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from './pages/home'
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
import BasicTable from './pages/table/basicTable'
import HightTable from './pages/table/highTable'
import City from './pages/city'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail  from './pages/order/detail'
import User from './pages/user/index'
import BikeMap from './pages/map/bikeMap'
import RichText from './pages/rich'
import PermissionUser from './pages/permission'
export default class IRouter extends React.Component{
    
    render() {
        
        return(
            <HashRouter>
                <App>
                    <Switch>
                    {/* <Route path="/login" component={Login}/> */}
                    <Route path="/login" component={Login} />
                    <Route path="/common" render={()=>
                        <Common >
                            <Route path="/common/order/detail/:orderId"  component={OrderDetail}/>
                        </Common >
                    }/>
                    <Route path="/" render={()=>
                    <Admin>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path="/ui/buttons" component={Buttons} />
                            <Route path="/ui/modals" component={Modals}/>
                            <Route path="/ui/loadings" component={Loading}/>
                            <Route path="/ui/notification" component={Notifce}/>
                            <Route path="/ui/messages" component={Messages}/>
                            <Route path="/ui/tabs" component={Tab}/>
                            <Route path="/ui/gallery" component={Gallery}/>
                            <Route path="/ui/carousel" component={Carousels}/>
                            <Route path="/form/login" component={FormLogin}/>
                            <Route path="/form/reg" component={FormRegister}/>
                            <Route path="/table/basic" component={BasicTable}/>
                            <Route path="/table/high" component={HightTable}/>
                            <Route path="/city" component={City}/>
                            <Route path="/order" component={Order}/>
                            <Route path="/user"component={User}/>
                            <Route path='/bikeMap' component={BikeMap} />
                            <Route path='/rich' component={RichText} />
                            <Route path='/permission' component={PermissionUser} />
                            <Redirect to="/home" />
                           
                        </Switch>
                    </Admin>
                    }/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}