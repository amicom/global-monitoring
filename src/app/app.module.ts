import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDividerModule, MatMenuModule} from '@angular/material';
import {MenuComponent} from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {ServersEnvironmentComponent} from './servers-environment/servers-environment.component';
import { ServerComponent } from './server/server.component';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServersEnvironmentComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
