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
    this.registerIcon('information');
    this.registerIcon('files');
    this.registerIcon('fine-tuning');
    this.registerIcon('playground');
    this.registerIcon('settings');
    this.registerIcon('usage');
    this.registerIcon('documentation');
    this.registerIcon('help');
    this.registerIcon('run');
    this.registerIcon('link');
    this.registerIcon('all-products');
    this.registerIcon('robot');
    this.registerIcon('clean');
    this.registerIcon('logs');
    this.registerIcon('edit-square');
    this.registerIcon('dropdown');
    this.registerIcon('bin');
    this.registerIcon('attach-file');
    this.registerIcon('chevron-right');
    this.registerIcon('chevron-left');

  }

  private registerIcon(iconName: string) {
    const formattedName = iconName.trim();
    const path = `./assets/img/svg/${formattedName}.svg`;
    this.iconRegistry.addSvgIcon(
      formattedName,
      this.sanitizer.bypassSecurityTrustResourceUrl(path)
    );
  }
}
