import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "customer", loadChildren: () => import("./admin/components/customer/customer.module").then(x => x.CustomerModule) },
      { path: "products", loadChildren: () => import("./admin/components/products/products.module").then(x => x.ProductsModule) },
      { path: "orders", loadChildren: () => import("./admin/components/orders/orders.module").then(x => x.OrdersModule) },
    ]
  },
  { path: "", component: HomeComponent },
  { path: "baskets", loadChildren: () => import("./ui/components/baskets/baskets.module").then(x => x.BasketsModule) },
  { path: "products", loadChildren: () => import("./ui/components/products/products.module").then(x => x.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
