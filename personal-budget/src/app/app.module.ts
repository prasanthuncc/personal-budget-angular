import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HeroComponent} from './hero/hero.component';
import {FooterComponent} from './footer/footer.component';
import {ArticleComponent} from './article/article.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {P404Component} from './p404/p404.component';
import {provideHttpClient, withFetch} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    ArticleComponent,
    HomepageComponent,
    AboutComponent,
    LoginComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
