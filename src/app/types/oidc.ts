export interface OidcAuthDataRequest {
  owllyId: string;
  configuration: string;
}

// tslint:disable-next-line:no-empty-interface
export interface OidcAuthLoginDataRequest {}

export interface OidcAuth {
  url: string;
  type: 'login' | 'wizard';
  owllyId?: string;
}

export interface OidcState {
  type: 'login' | 'wizard';
  owllyId?: string;
  configuration: 'sh' | 'zg';
}
