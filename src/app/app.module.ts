import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { ShoppingItemComponent } from './shopping-items/shopping-item/shopping-item.component';
import { SimilarItemsComponent } from './shopping-items/shopping-item/similar-items/similar-items.component';
import { LoginComponent } from './login/login.component';
import { DataStorageService } from './shared/data-storage.service';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingItemsComponent,
    ShoppingItemComponent,
    SimilarItemsComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
