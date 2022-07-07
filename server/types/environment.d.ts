export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URL: string;
      ACTIVE_TOKEN_SECRET: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      MAIL_CLIENT_ID: string;
      MAIL_CLIENT_SECRET: string;
      MAIL_REFRESH_TOKEN: string;
      SENDER_EMAIL_ADDRESS: string;
      GENERATE_EMAIL_PASSWORD: string;
    }
  }
}
