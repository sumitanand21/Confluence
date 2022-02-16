import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DatacommunicationService } from './datacommunication.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SlimScrollModule } from 'ng2-slimscroll';
import { ContextMenuModule } from 'angular2-contextmenu';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ReportsComponent } from './reports/reports.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DragulaModule } from "ng2-dragula";
import { AccordionModule } from "ng2-accordion";
import { DropdownModule } from "ng2-dropdown";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { LandingComponent, AddModuleModalComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { ProjectviewComponent, DeleteAccordianComponent } from './projectview/projectview.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamanalyticsComponent } from './teamanalytics/teamanalytics.component';
import { SowdetailsComponent } from './sowdetails/sowdetails.component';
import { AllmydemandsComponent, CancelDemandComponent } from './allmydemands/allmydemands.component';
import { MytasksComponent, DeleteDialogComponent } from './mytasks/mytasks.component';
import { MyrequestsComponent } from './myrequests/myrequests.component';
import { ManageprojectComponent, BulkAllocationComponent } from './manageproject/manageproject.component';
import { SearchAndAllocatePageComponent, wmgSave } from './search-and-allocate-page/search-and-allocate-page.component';
import { PendingproposalsComponent, employeeDetailsComponent, rejectreasonComponent, submitComponent } from './pendingproposals/pendingproposals.component';
import {
  SearchResultsComponent,
  AllocateModalComponent,
  SearchEmployeeDComponent,
  wmgSave1,
  CostDeviationDComponent,
  transferBudgetDComponent,
  BillabilityModalComponent,
  SubmitModalComponent
} from './search-results/search-results.component';
import { HttpModule } from '@angular/http';
import { AllMyDemandsExpandedComponent, DeleteDemandComponent } from './all-my-demands-expanded/all-my-demands-expanded.component';
import { MyteamComponent, EmployeeDetailsModalComponent, PropelPlanningComponent } from './myteam/myteam.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddManageProjectComponent } from './add-manage-project/add-manage-project.component';
import { VdhComponent } from './vdh/vdh.component';
import { AccountComponent } from './account/account.component';
import { OrderComponent } from './order/order.component';
import { MyTaskMoreComponent } from './my-task-more/my-task-more.component';
import { MyTaskMoreInnerComponent } from './my-task-more-inner/my-task-more-inner.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SowLandingPageComponent } from './sow-landing-page/sow-landing-page.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { SowViewSavedProfileComponent } from './sow-view-saved-profile/sow-view-saved-profile.component';
import { ProceedToAllocateComponent, TransferBudgetMTComponent, CostDeviationMTDComponent, MyTeamEmpDetailsComponent } from './proceed-to-allocate/proceed-to-allocate.component';
import {
  DirectSearchComponent,
  CostDeviationDComponentDirect,
  transferBudgetDComponentDirect,
  BillabilityModalComponentDirect,
  SearchEmployeeDComponentDirect,
  SubmitModalComponentDirect,
  AllocateModalComponentDirect
} from './direct-search/direct-search.component';
import { AnalyticsExpandedComponent } from './analytics-expanded/analytics-expanded.component';
import { TenureRotationComponent, coreComponent } from './tenure-rotation/tenure-rotation.component';
import { ClonesearchComponent, CloneSearchBillabilityPopupComponent, CloneSearchSubmitComponent, CloneSearchEmployeeDetailstComponent } from './clonesearch/clonesearch.component';
import {
  ClonesearchExpandedComponent,
  CloneAllocateModalComponent,
  CloneSearchEmployeeDComponent,
  ClonewmgSave1,
  CloneCostDeviationDComponent,
  ClonetransferBudgetDComponent,
  CloneBillabilityModalComponent,
  CloneSubmitModalComponent
} from './clonesearch-expanded/clonesearch-expanded.component';
const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gotoprojectview', component: ProjectviewComponent },
  { path: 'allmydemandsDetails', component: AllMyDemandsExpandedComponent },
  { path: 'gotosearchallocate', component: SearchAndAllocatePageComponent },
  { path: 'searchResults', component: SearchResultsComponent },
  { path: 'myteam', component: MyteamComponent },
  { path: 'myTaskMore', component: MyTaskMoreComponent },
  { path: 'ProceedToAllocate', component: ProceedToAllocateComponent },
  { path: 'directSearch', component: DirectSearchComponent },
  { path: 'analyticsDetails', component: AnalyticsExpandedComponent },
  { path: 'pendingproposals', component: PendingproposalsComponent },
  { path: 'tenure', component: TenureRotationComponent },
  { path: 'clonesearch', component: ClonesearchComponent },
  { path: 'clonesearchexpanded', component: ClonesearchExpandedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    LandingComponent,
    AddModuleModalComponent,
    DeleteAccordianComponent,
    DeleteDialogComponent,
    CancelDemandComponent,
    HeaderComponent,
    ProjectviewComponent,
    SettingsComponent,
    TeamanalyticsComponent,
    SowdetailsComponent,
    AllmydemandsComponent,
    MytasksComponent,
    MyrequestsComponent,
    ManageprojectComponent,
    BulkAllocationComponent,
    SearchAndAllocatePageComponent,
    wmgSave,
    wmgSave1, CloneSearchBillabilityPopupComponent,
    CloneSearchSubmitComponent, CloneSearchEmployeeDetailstComponent,
    CloneAllocateModalComponent,
    CloneSearchEmployeeDComponent,
    ClonewmgSave1,
    CloneCostDeviationDComponent, ClonetransferBudgetDComponent,
    CloneBillabilityModalComponent,
    CloneSubmitModalComponent,
    SearchResultsComponent,
    SearchEmployeeDComponent,
    AllocateModalComponent,
    CostDeviationDComponent,
    transferBudgetDComponent,
    AllMyDemandsExpandedComponent,
    DeleteDemandComponent,
    AddProjectComponent,
    AddManageProjectComponent,
    MyteamComponent,
    PropelPlanningComponent,
    PendingproposalsComponent,
    employeeDetailsComponent,
    rejectreasonComponent,
    submitComponent,
    EmployeeDetailsModalComponent,
    VdhComponent,
    AccountComponent,
    OrderComponent,
    MyTaskMoreComponent,
    MyTaskMoreInnerComponent,
    ListViewComponent,
    SowLandingPageComponent,
    LeadershipComponent,
    SowViewSavedProfileComponent,
    ProceedToAllocateComponent,
    TransferBudgetMTComponent,
    CostDeviationMTDComponent,
    MyTeamEmpDetailsComponent,
    CostDeviationDComponentDirect,
    transferBudgetDComponentDirect,
    BillabilityModalComponentDirect,
    SearchEmployeeDComponentDirect,
    SubmitModalComponentDirect,
    AllocateModalComponentDirect,
    BillabilityModalComponent,
    SubmitModalComponent,
    DirectSearchComponent,
    AnalyticsExpandedComponent,
    TenureRotationComponent,
    coreComponent,
    ClonesearchComponent,
    ClonesearchExpandedComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    SlimScrollModule,
    ContextMenuModule,
    DragulaModule,
    AccordionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    DropdownModule,
    Ng2AutoCompleteModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    AddModuleModalComponent, AllocateModalComponent,
    EmployeeDetailsModalComponent,
    SearchEmployeeDComponent, CostDeviationDComponent,
    transferBudgetDComponent, DeleteAccordianComponent,
    CostDeviationMTDComponent, TransferBudgetMTComponent,
    MyTeamEmpDetailsComponent, BulkAllocationComponent, CancelDemandComponent,
    PropelPlanningComponent,
    DeleteDemandComponent, CostDeviationDComponentDirect,
    transferBudgetDComponentDirect,
    BillabilityModalComponentDirect,
    PendingproposalsComponent,
    submitComponent,
    CloneAllocateModalComponent,
    CloneSearchEmployeeDComponent,
    ClonewmgSave1,
    CloneCostDeviationDComponent, ClonetransferBudgetDComponent,
    CloneBillabilityModalComponent,
    CloneSubmitModalComponent, CloneSearchBillabilityPopupComponent,
    CloneSearchSubmitComponent, CloneSearchEmployeeDetailstComponent,
    SearchEmployeeDComponentDirect, coreComponent,
    wmgSave, wmgSave1,
    SubmitModalComponentDirect,
    AllocateModalComponentDirect,
    BillabilityModalComponent,
    SubmitModalComponent, DeleteDialogComponent, employeeDetailsComponent, rejectreasonComponent

  ],

  providers: [{provide: APP_BASE_HREF, useValue: '/Confluence'},DatacommunicationService],  
  // providers: [DatacommunicationService],
  bootstrap: [AppComponent],

})
export class AppModule {}
