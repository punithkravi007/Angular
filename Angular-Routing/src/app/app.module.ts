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
import { ActiveServersComponent } from './servers/active-servers/active-servers.component';
import { InactiveServersComponent } from './servers/inactive-servers/inactive-servers.component';
import { CreateServersComponent } from './servers/create-servers/create-servers.component';
import { ServerInfoComponent } from './servers/server-info/server-info.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "servers", component: ServersComponent },
  { path: "servers/:id", component: ServerInfoComponent },
  { path: "servers/:id/edit", component: EditServerComponent },
  { path: "users", component: UsersComponent },
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
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
