export interface Pdf {
  url: string | undefined;
  message: string;
  status: {
    owlly: boolean;
    ots: boolean;
    skribble: boolean;
  };
  skribble: {
    //signatureRequest: string;
    //documentId: string;
    skribbleSigningUrl: string;
  };
}
