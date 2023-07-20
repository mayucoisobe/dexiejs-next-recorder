import Dexie from 'dexie';

// IndexedDB の初期化
export const db = new Dexie('DemoDB');
db.version(1).stores({
  voicelist: '++id, name, voice', // Primary key and indexed props
});
