import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderComponent} from "../../../components/elements/headers/header/header.component";
import {ButtonComponent} from "../../../components/elements/buttons/button/button.component";
import {MatIconModule} from "@angular/material/icon";
import {InputTextComponent} from "../../../components/elements/inputs/input-text/input-text.component";
import {SelectDropdownComponent} from "../../../components/elements/inputs/select-dropdown/select-dropdown.component";
import {ProfilePictureComponent} from "../../../components/elements/user/profil-picture/profile-picture.component";
import {TagComponent} from "../../../components/elements/badge/tag.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    MatIconModule,
    InputTextComponent,
    SelectDropdownComponent,
    ProfilePictureComponent,
    TagComponent
  ],
  templateUrl: './team.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
  readonly value = signal<string>('Owner');

  changeValue($event: string): void {
    this.value.set($event)
  }
}
