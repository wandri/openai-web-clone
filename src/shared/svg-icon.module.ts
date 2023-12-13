import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule],
})
export class SvgIconModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcon('api-keys');
    this.registerIcon('assistants');
    this.registerIcon('files');
    this.registerIcon('fine-tuning');
    this.registerIcon('playground');
    this.registerIcon('settings');
    this.registerIcon('usage');
    this.registerIcon('documentation');
    this.registerIcon('help');
    this.registerIcon('all-products');

  }

  private registerIcon(iconName: string) {
    const formattedName = iconName.trim();
    const path = `../assets/img/svg/${formattedName}.svg`;
    this.iconRegistry.addSvgIcon(
      formattedName,
      this.sanitizer.bypassSecurityTrustResourceUrl(path)
    );
  }
}
