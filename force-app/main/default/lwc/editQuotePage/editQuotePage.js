/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";
import LightningModal from 'lightning/modal';

export default class EditQuotePage extends LightningElement {
  @api recordId;
  isAdjustClick = false;

  handleAdjustClick(event){
    isAdjustClick = true;
  }
}
