import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
