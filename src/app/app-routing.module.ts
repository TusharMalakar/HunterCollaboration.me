import { NgModule } from '@angular/core';
import { CollabCardComponent } from './home/collab-card/collab-card.component';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/collab-list/home.component';
import { LoginComponent } from './login/login-page/login.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register-page/register.component';

/**
* @author Tushar Malakar
* 
*	@brief Configure the routes to allow for lazy loading of feature modules.
*         Each feature module will have it's own routing module that will tell
*         the router where to go to load relevant components.
*
*	@param[routes] ,  array that will contain our routes
*	@param[path]       ,  string that will redirect to the module specified on 'loadChildren'
*	@param[loadChildren]       , relative path to the module, a hash mark, and the module's class name
*	@param[canActivate]       , auth guard that will prevent un-authorized users from gaining access to the module
*	@return nothing
*/
const routes: Routes = [
  {
    path : 'login', 
    loadChildren : './login/login.module#LoginModule',
    canActivate: [AuthGuard]
  },
  {
    path:'register', 
    loadChildren : './register/register.module#RegisterModule',
    canActivate: [AuthGuard]
  },
  {
    path:'home', 
    loadChildren : './home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'conversations',
    loadChildren: './conversations/conversations.module#ConversationsModule',
    canLoad: [AuthGuard]
  },

  //default component
  {
    path:'**', 
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  //Lets angular know that this module is the root routing module.
  //It will configure all the routes passed to it, give access to router directives, and register the RouterService.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }