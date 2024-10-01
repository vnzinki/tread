import { Routes } from '@angular/router'
import { ConfigComponent } from './page/config/config.component'
import { InfoComponent } from './page/info/info.component'
import { QaComponent } from './page/qa/qa.component'
import { RelatedComponent } from './page/related/related.component'
import { SummaryComponent } from './page/summary/summary.component'

export const routes: Routes = [
  {
    path: '',
    component: SummaryComponent,
  },
  { path: 'config', component: ConfigComponent },
  { path: 'info', component: InfoComponent },
  { path: 'related', component: RelatedComponent },
  { path: 'qa', component: QaComponent },
]
