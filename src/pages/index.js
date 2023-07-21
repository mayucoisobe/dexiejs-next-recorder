import { AddVoiceData } from '@/components/AddVoiceData';
import { GetVoiceData } from '@/components/GetVoiceData';
import { ClearDatabaseButton } from '@/components/ClearDatabaseButton';

export default function Home() {
  return (
    <>
      <>
        <h1>
          <a href=" https://dexie.org/">Dexie.js</a> -VoiceRecorder-Demo
        </h1>
        <AddVoiceData />
        <GetVoiceData />
        <ClearDatabaseButton />
      </>
    </>
  );
}
