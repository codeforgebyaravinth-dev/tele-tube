/**
 * Appwrite Client Configuration
 * This file initializes the Appwrite SDK for TeleTube.
 */
import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('YOUR_PROJECT_ID'); // Replace with your Project ID

/**
 * Account service for managing user authentication
 */
export const account = new Account(client);

/**
 * Databases service for managing collections (videos, comments)
 */
export const databases = new Databases(client);

/**
 * Storage service for managing files (video files, thumbnails)
 */
export const storage = new Storage(client);

export { ID } from 'appwrite';

