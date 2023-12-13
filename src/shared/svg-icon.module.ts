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
    this.registerIcon('home');
    this.registerIcon('questionnaires');
    this.registerIcon('settings');
    this.registerIcon('upload');
    this.registerIcon('loading');
    this.registerIcon('check-circle');
    this.registerIcon('upload-hover');
    this.registerIcon('global');
    this.registerIcon('resources');
    this.registerIcon('document');
    this.registerIcon('download');
    this.registerIcon('edit');
    this.registerIcon('delete');
    this.registerIcon('magic');
    this.registerIcon('extra');
    this.registerIcon('error-circle');
    this.registerIcon('info-circle');
    this.registerIcon('success-circle');
    this.registerIcon('warning-circle');
    this.registerIcon('edit-link');
    this.registerIcon('fast');
    this.registerIcon('calendar');
    this.registerIcon('table');
    this.registerIcon('file');
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
