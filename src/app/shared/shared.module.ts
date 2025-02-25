import { CommonModule } from '@angular/common';
import {  MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ]
})
export class SharedModule { }