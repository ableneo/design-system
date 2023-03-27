import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconComponent]
})
export class IconModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
