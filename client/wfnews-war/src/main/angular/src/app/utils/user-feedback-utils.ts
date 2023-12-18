import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { WF_SNACKBAR_TYPES } from '.';

export interface ErrorHandlingInstructions {
  redirectToRoute?: string;
  redirectToRouteData?: any;
  snackBarErrorMsg?: string;
}

export function getSnackbarConfig(message, type): MatSnackBarConfig {
  const config = {
    panelClass: 'snackbar-' + type,
    data: {
      message,
      type,
    },
  };
  if (type === WF_SNACKBAR_TYPES.SUCCESS) {
    config['duration'] = 5000;
  }
  return config;
}
