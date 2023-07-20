import { db } from '@/db';
import React from 'react';

export function ClearDatabaseButton() {
  return (
    <button
      onClick={() => {
        db.transaction('rw', db.tables, async () => {
          await Promise.all(db.tables.map((table) => table.clear()));
        });
      }}
    >
      Clear Database
    </button>
  );
}
