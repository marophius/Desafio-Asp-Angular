import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './home-component/home-component.component';
import { EquipeFormComponent } from './equipe-form/equipe-form.component';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { EquipeService } from './services/equipe.service';
import {FormsModule} from '@angular/forms';
import { ColaboradorService } from './services/colaborador.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DemoNgZorroAntdModule } from 'src/assets/globalstyles/ng-zorro-antd.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EquipeFormComponent,
    ColaboradorFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DemoNgZorroAntdModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CalendarModule,
    FormsModule,
    TableModule,
    ToastModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    DialogModule,
    DropdownModule,

  ],
  providers: [
    EquipeService,
    ColaboradorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
