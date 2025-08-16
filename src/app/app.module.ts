import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './content-projection/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceExampleComponent } from './service-example/service-example.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, ContentProjectionComponent, ProductComponent, ServiceExampleComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
