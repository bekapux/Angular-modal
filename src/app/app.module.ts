import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './layout/header/header.component';
import { RequestSourcesComponent } from './modals/request-sources/request-sources.component';
import { ReasonsForVisitComponent } from './modals/reasons-for-visit/reasons-for-visit.component';
import { CancelRescheduleReasonsComponent } from './modals/cancel-reschedule-reasons/cancel-reschedule-reasons.component';
import { UploadDocumentLabelsComponent } from './modals/upload-document-labels/upload-document-labels.component';
import { HostDomainsComponent } from './modals/host-domains/host-domains.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequestSourcesComponent,
    ReasonsForVisitComponent,
    CancelRescheduleReasonsComponent,
    UploadDocumentLabelsComponent,
    HostDomainsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
