import {NgModule} from '@angular/core';
import {LoadingComponent} from './loading/loading.component';
import {NoDataComponent} from './no-data/no-data.component';


@NgModule({
  declarations: [LoadingComponent, NoDataComponent],
  imports: [],
  exports: [LoadingComponent, NoDataComponent]
})
export class ComponentsModule {
}
