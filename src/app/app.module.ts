import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModelModule } from './model';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HeadingComponentComponent } from './components/heading-component/heading-component.component';
import { ListPageComponentComponent } from './pages/list-page-component/list-page-component.component';
import { DetailsPageComponentComponent } from './pages/details-page-component/details-page-component.component';
import { PartyComponent } from './pages/details-page-component/party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponentComponent,
    ListPageComponentComponent,
    DetailsPageComponentComponent,
    PartyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
