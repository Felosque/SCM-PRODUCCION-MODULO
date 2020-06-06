import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MachinstateShowComponent} from './components/machinestate/show/machinstate-show/machinstate-show.component';
import {MachinestateEditComponent} from './components/machinestate/edit/machinestate-edit/machinestate-edit.component';
import {MachinestateShowOneComponent} from './components/machinestate/show/machinestate-show-one/machinestate-show-one.component';
import {RequeststatusShowComponent} from './components/requeststatus/show/requeststatus-show/requeststatus-show.component';
import {RequeststatusShowOneComponent} from './components/requeststatus/show/requeststatus-show-one/requeststatus-show-one.component';
import {RequeststatusEditComponent} from './components/requeststatus/edit/requeststatus-edit/requeststatus-edit.component';
import {StatebranchofficeShowComponent} from './components/statebranchoffice/show/statebranchoffice-show/statebranchoffice-show.component';
import {StatebranchofficeEditComponent} from './components/statebranchoffice/edit/statebranchoffice-edit/statebranchoffice-edit.component';
import {StatebranchofficeShowOneComponent} from './components/statebranchoffice/show/statebranchoffice-show-one/statebranchoffice-show-one.component';
import {HomeComponent} from './components/home/home.component';
import {RequestanalysisShowComponent} from './components/requestanalysis/show/requestanalysis-show/requestanalysis-show.component';
import {RequestanalysisShowOneComponent} from './components/requestanalysis/show/requestanalysis-show-one/requestanalysis-show-one.component';
import {RequestanalysisEditComponent} from './components/requestanalysis/edit/requestanalysis-edit/requestanalysis-edit.component';
import {BranchofficeShowComponent} from './components/branchoffice/show/branchoffice-show/branchoffice-show.component';
import {BranchofficeShowOneComponent} from './components/branchoffice/show/branchoffice-show-one/branchoffice-show-one.component';
import {BranchofficeEditComponent} from './components/branchoffice/edit/branchoffice-edit/branchoffice-edit.component';
import {ProductShowComponent} from './components/product/show/product-show/product-show.component';
import {ProductShowOneComponent} from './components/product/show/product-show-one/product-show-one.component';
import {ProductEditComponent} from './components/product/edit/product-edit/product-edit.component';
import {ProcessShowComponent} from './components/process/show/process-show/process-show.component';
import {ProcessShowOneComponent} from './components/process/show/process-show-one/process-show-one.component';
import {ProcessCreateComponent} from './components/process/create/process-create/process-create.component';
import {ProcessEditComponent} from './components/process/edit/process-edit/process-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'machinestate', component: MachinstateShowComponent},
  {path: 'Machinestate/:code', component: MachinestateEditComponent},
  {path: 'machinestate/show/:code', component: MachinestateShowOneComponent},
  {path: 'requeststatus', component: RequeststatusShowComponent},
  {path: 'Requeststatus/:code', component: RequeststatusEditComponent},
  {path: 'requeststatus/show/:code', component: RequeststatusShowOneComponent},
  {path: 'StateBranchOffice', component: StatebranchofficeShowComponent},
  {path: 'StateBranchOffice/:code', component: StatebranchofficeEditComponent},
  {path: 'StateBranchOffice/show/:code', component: StatebranchofficeShowOneComponent},
  {path: 'requestanalysis', component: RequestanalysisShowComponent},
  {path: 'requestanalysis/show/:code', component: RequestanalysisShowOneComponent},
  {path: 'requestanalysis/:code', component: RequestanalysisEditComponent},
  {path: 'branchoffice', component: BranchofficeShowComponent},
  {path: 'branchoffice/show/:code', component: BranchofficeShowOneComponent},
  {path: 'branchoffice/:code', component: BranchofficeEditComponent},
  {path: 'product', component: ProductShowComponent},
  {path: 'product/show/:code', component: ProductShowOneComponent},
  {path: 'product/:code', component: ProductEditComponent},
  {path: 'process', component: ProcessShowComponent},
  {path: 'process/show/:code', component: ProcessShowOneComponent},
  {path: 'process/:code', component: ProcessEditComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
