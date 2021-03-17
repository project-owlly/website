export interface Pdf {
  url: string | undefined;
  message: string;
  configuration: string;
  status: {
    owlly: boolean;
    ots: boolean;
    skribble: boolean;
  };
  skribbleSigningUrl: string;
}
