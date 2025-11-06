import * as sdk from "node-appwrite";

// Public
export const PUBLIC = {
  ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  BUCKET_ID: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
};

// Private
const client = new sdk.Client()
  .setEndpoint(PUBLIC.ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);

export const PRIVATE = {
  DATABASE_ID: process.env.APPWRITE_DATABASE_ID!,
  CUSTOMERS_TABLE_ID: process.env.APPWRITE_CUSTOMERS_TABLE_ID!,
  AGENTS_TABLE_ID: process.env.APPWRITE_AGENTS_TABLE_ID!,
  APPOINTMENTS_TABLE_ID: process.env.APPWRITE_APPOINTMENTS_TABLE_ID!,
};
