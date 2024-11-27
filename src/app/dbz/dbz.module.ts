import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddcharacterComponent } from './components/addcharacter/addcharacter.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddcharacterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
