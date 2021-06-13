import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './core/navbar/navbar.component';
import { InfoComponent } from './core/info/info.component';
import { FilterPipe } from './list/filter.pipe';
import { ListComponent } from './list/list.component';
import { LogoComponent } from './shared/svgs/logo.component';
import { EpicComponent } from './shared/svgs/epic.component';
import { SteamComponent } from './shared/svgs/steam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InfoComponent,
    FilterPipe,
    ListComponent,
    LogoComponent,
    EpicComponent,
    SteamComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
