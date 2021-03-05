import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { ServersService } from "./servers/servers.service";
import { Router, RouterModule, Routes } from "@angular/router";
import { ActiveServersComponent } from "./servers/active-servers/active-servers.component";
import { InactiveServersComponent } from "./servers/inactive-servers/inactive-servers.component";
import { CreateServersComponent } from "./servers/create-servers/create-servers.component";
import { ServerInfoComponent } from "./servers/server-info/server-info.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGaurd } from "./auth-gaurd-service";

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "servers",
    canActivate: [AuthGaurd],
    component: ServersComponent,
  },
  {
    path: "servers/:id",
    component: ServerInfoComponent,
    children: [{ path: "edit", component: EditServerComponent }],
  },
  {
    path: "users",
    component: UsersComponent,
    canActivateChild: [AuthGaurd],
    children: [{ path: ":id", component: UserComponent }],
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    ActiveServersComponent,
    InactiveServersComponent,
    CreateServersComponent,
    ServerInfoComponent,
    EditServerComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
