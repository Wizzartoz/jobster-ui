import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeSizePipe} from "../pipes/change-size.pipe";
import {AddStringIfPipe} from "../pipes/add-string-if.pipe";
import {ConvertExpirienceToStringPipe} from "../pipes/convert-expirience-to-string.pipe";


@NgModule({
  declarations: [
    ChangeSizePipe,
    AddStringIfPipe,
    ConvertExpirienceToStringPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChangeSizePipe,
    AddStringIfPipe,
    ConvertExpirienceToStringPipe,
  ]
})
export class SharedModule { }
