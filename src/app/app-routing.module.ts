import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import { MessageListComponent } from './components/message-list/message-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/menu', pathMatch:'full'},
  {path:'menu', component:MenuComponent},
  {path:'contacts', component:ContactListComponent},
  {path:'contact/:id', component:ContactDetailsComponent},
  {path:'whatsapp', component:MessageListComponent},
  {path:'whatsapp/:id', component:MessageDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
