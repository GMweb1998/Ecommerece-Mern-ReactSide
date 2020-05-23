import React from 'react';
import {BrowserRouter, Switch , Route}  from 'react-router-dom'; 
//Browser router is component that will make props available to other nested components
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import  PrivateRoute  from './auth/PrivateRoute';
import  AdminRoute  from './auth/AdminRoute';
import DashBoard from './user/UserDashboard';
import AdminDashBoard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import AddProduct from'./admin/AddProduct';
import Orders from './admin/Orders';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Profile from './user/Profile';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';





const Routes = () => {
    return (

    <BrowserRouter>
     
        <Switch>
            <Route path = '/' exact component={Home} />
            <Route path = '/shop' exact component={Shop} />
            <Route path = '/signin' exact component={Signin} />
            <Route path = '/signup' exact component={Signup} />
            <Route path = '/product/:productId' exact component={Product} />
            <Route path = '/cart' exact component={Cart} />
            <PrivateRoute path='/user/dashboard' exact component={DashBoard}/>
            <PrivateRoute path='/profile/:userId' exact component={Profile}/>
            <AdminRoute path='/admin/dashboard' exact component={AdminDashBoard}/>
            <AdminRoute path='/create/category' exact component={AddCategory}/>
            <AdminRoute path='/create/product' exact component={AddProduct}/>
            <AdminRoute path='/admin/products' exact component={ManageProducts}/>
            <AdminRoute path='/admin/orders' exact component={Orders}/>
            <AdminRoute path='/admin/product/update/:productId' exact component={UpdateProduct}/>

        </Switch>
    </BrowserRouter>
    )
}

export default Routes