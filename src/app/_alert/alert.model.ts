export class Alert {
  id: string = '';
  type!: AlertType;
  message: string = '';
  autoClose: boolean = false;
  keepAfterRouteChange: boolean = false;
  fade: boolean = true;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning,
}
