export interface Pdf {
  url: string | undefined;
  message: string;
  configuration: string;
  status: {
    owlly: true | false;
    ots: true | false;
    skribble: true | false;
  };
  skribbleSigningUrl: string;
}
