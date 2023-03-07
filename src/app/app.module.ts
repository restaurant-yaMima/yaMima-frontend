import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/modules/angularMateial.module';
import { RoutingModule } from 'src/routing/routing-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from 'src/modules/PrimeNgModule';
import { CreerproduitComponent } from './creerproduit/creerproduit.component';
import { Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProduitServiceService } from './produit-service.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    CreerproduitComponent,
    LayoutComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    PrimeNgModule,
    ToastModule,

  ],
  providers: [Dialog ,DialogService ,MessageService ,ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
