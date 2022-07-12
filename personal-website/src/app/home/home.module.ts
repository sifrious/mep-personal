import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { IconComponent } from './icons/icons.component'
import { MakingComponent } from './making/making.component';
import { UsingComponent } from './using/using.component';
import { DoingComponent } from './doing/doing.component';
import { DiggingComponent } from './digging/digging.component'

@NgModule({
    imports: [CommonModule],
    declarations: [IconComponent, MakingComponent, UsingComponent, DoingComponent, DiggingComponent],
    exports: [IconComponent, MakingComponent, UsingComponent, DoingComponent, DiggingComponent]
})

export class HomeModule {}