import { AddVoiceData } from '@/components/AddVoiceData';
import { GetVoiceData } from '@/components/GetVoiceData';
import { ClearDatabaseButton } from '@/components/ClearDatabaseButton';

export default function Home() {
  return (
    <>
      <>
        <h1>Dexie.js-VoiceRecorder-Demo</h1>
        <h2 className="ttl">- ブラウザでの録音~保存 -</h2>
        <AddVoiceData />
        <h2 className="ttl">- Audio List -</h2>
        <GetVoiceData />
        <ClearDatabaseButton />
      </>
    </>
  );
}
