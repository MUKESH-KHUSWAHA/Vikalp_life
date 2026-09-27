// serviceAccountKey.js — exports Firebase Admin service account config from env vars.
// Used by firebase.js when FIREBASE_SERVICE_ACCOUNT JSON string is not set.
export const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID || '',
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID || '',
  // Replace escaped newline literals (\n) with real newlines — safe even if undefined
  private_key: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL || '',
  client_id: process.env.FIREBASE_CLIENT_ID || '',
  auth_uri: process.env.FIREBASE_AUTH_URI || 'https://accounts.google.com/o/oauth2/auth',
  token_uri: process.env.FIREBASE_TOKEN_URI || 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL || 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL || '',
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN || 'googleapis.com',
};
