export interface EidDataRequest {
  authorization_code: string;
  configuration: string;
}

// TODO: Sandro add type definition details
export interface EidUserData {
  given_name?: string;
}
