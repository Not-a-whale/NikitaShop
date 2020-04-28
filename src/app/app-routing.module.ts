import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { AuthComponent } from './auth/auth.component';
import { ShoppingItemComponent } from './shopping-items/shopping-item/shopping-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'shopping-items',
    component: ShoppingItemsComponent,
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
