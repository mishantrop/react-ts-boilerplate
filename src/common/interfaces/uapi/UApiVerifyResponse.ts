export interface UApiVerifyResponse {
    response_data: {
      authcode: string;
      state: string;
      redirect_uri: string;
      host?: string;
    };
}
