import React from 'react';
import { Recursively } from './tool';

export interface Header
  extends Recursively<{
    label: string;
    key: React.Key;
    isPlaceholder?: boolean;
  }> {}
