import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

export const MatComp = [
   MatButtonModule, MatCardModule,  MatListModule, MatDividerModule, MatRippleModule,
   MatToolbarModule, MatGridListModule, MatButtonToggleModule, MatDialogModule, MatIconModule,
  MatCheckboxModule,  MatFormFieldModule, MatInputModule, MatSelectModule,
  MatSlideToggleModule,MatProgressSpinnerModule, MatSliderModule, MatPaginatorModule,
  MatRadioModule, MatTableModule, MatMenuModule
];


@NgModule({
  imports: [MatComp],
  exports: [MatComp]
})
export class MaterialModule { }
