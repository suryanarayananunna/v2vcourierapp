import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
   
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
   
  },
  {
    path: 'received-package',
    loadChildren: () => import('./received-package/received-package.module').then( m => m.ReceivedPackagePageModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qrgenerate',
    loadChildren: () => import('./qrgenerate/qrgenerate.module').then( m => m.QrgeneratePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'get-product-details',
    loadChildren: () => import('./get-product-details/get-product-details.module').then( m => m.GetProductDetailsPageModule)
  },
  {
    path: 'get-courier-details',
    loadChildren: () => import('./get-courier-details/get-courier-details.module').then( m => m.GetCourierDetailsPageModule)
  },
  {
    path: 'get-customer-details',
    loadChildren: () => import('./get-customer-details/get-customer-details.module').then( m => m.GetCustomerDetailsPageModule)
  },
  {
    path: 'get-delivery-details',
    loadChildren: () => import('./get-delivery-details/get-delivery-details.module').then( m => m.GetDeliveryDetailsPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
