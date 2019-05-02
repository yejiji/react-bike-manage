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
import BasicTable from './pages/table/basicTable'
import HightTable from './pages/table/highTable'
import City from './pages/city'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail  from './pages/order/detail'
import User from './pages/user/index'
import BikeMap from './pages/map/bikeMap'
import RichText from './pages/rich'
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
                            <Route path="/admin/table/basic" component={BasicTable}/>
                            <Route path="/admin/table/high" component={HightTable}/>
                            <Route path="/admin/city" component={City}/>
                            <Route path="/admin/order" component={Order}/>
                            <Route path="/admin/user"component={User}/>
                            <Route path='/admin/bikeMap' component={BikeMap} />
                            <Route path='/admin/rich' component={RichText} />
                            <Route component={NoMatch}/> 
                        </Switch>
                    </Admin>
                    }/>
                    <Route path="/common" render={()=>

                        <Common >
                            <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                        </Common >
                        
                    }/>
                </App>
            </HashRouter>
        );
    }
}