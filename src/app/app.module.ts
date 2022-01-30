import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FinanceComponent } from './components/finance/finance.component';
import { SingleFinanceComponent } from './components/single-finance/single-finance.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    FilterPipePipe,
    NotFoundComponent,
    FinanceComponent,
    SingleFinanceComponent,
    LoadingComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
