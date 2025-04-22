import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ContactComponent } from "./contact/contact.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations:[AppComponent,HeaderComponent,HomeComponent,AboutComponent,ServicesComponent,SkillsComponent,PortfolioComponent,ContactComponent, SidebarComponent],
    bootstrap:[AppComponent],
    imports: [BrowserModule, AppRoutingModule],
})

export class AppModule{}