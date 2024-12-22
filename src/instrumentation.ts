import { MongoClient } from 'mongodb';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    let client;
    try {
      const uri = process.env.MONGODB_URI;
      
      if (!uri) {
        throw new Error('MongoDB URI is not defined in environment variables');
      }

      client = new MongoClient(uri);
      await client.connect();
      console.log('Connected to MongoDB');

      const db = client.db();

      // Create collections if they don't exist
      const collections = await db.listCollections().toArray();
      const collectionNames = collections.map(col => col.name);

      if (!collectionNames.includes('users')) {
        await db.createCollection('users');
        await db.collection('users').createIndex({ email: 1 }, { unique: true });
        console.log('Created users collection and indexes');
      }

      if (!collectionNames.includes('accounts')) {
        await db.createCollection('accounts');
        await db.collection('accounts').createIndex(
          { provider: 1, providerAccountId: 1 },
          { unique: true }
        );
        console.log('Created accounts collection and indexes');
      }

      if (!collectionNames.includes('sessions')) {
        await db.createCollection('sessions');
        await db.collection('sessions').createIndex(
          { sessionToken: 1 },
          { unique: true }
        );
        console.log('Created sessions collection and indexes');
      }

      if (!collectionNames.includes('verificationTokens')) {
        await db.createCollection('verificationTokens');
        await db.collection('verificationTokens').createIndex(
          { identifier: 1, token: 1 },
          { unique: true }
        );
        console.log('Created verificationTokens collection and indexes');
      }

      if (!collectionNames.includes('listings')) {
        await db.createCollection('listings');
        await db.collection('listings').createIndex({ userId: 1 });
        await db.collection('listings').createIndex({ category: 1 });
        await db.collection('listings').createIndex(
          { title: 'text', description: 'text' },
          { default_language: 'english' }
        );
        console.log('Created listings collection and indexes');
      }

      if (!collectionNames.includes('reservations')) {
        await db.createCollection('reservations');
        await db.collection('reservations').createIndex({ userId: 1 });
        await db.collection('reservations').createIndex({ listingId: 1 });
        await db.collection('reservations').createIndex(
          { startDate: 1, endDate: 1 },
          { background: true }
        );
        console.log('Created reservations collection and indexes');
      }

      console.log('Database initialization completed successfully');
    } catch (error) {
      console.error('Error initializing database:', error);
    } finally {
      if (client) {
        await client.close();
        console.log('Closed MongoDB connection');
      }
    }
  }
}
