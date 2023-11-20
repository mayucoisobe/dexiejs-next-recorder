import { db } from '@/db';
import { useLiveQuery } from 'dexie-react-hooks';

export function GetVoiceData() {
  // IndexedDBからデータを取得
  const IndexedData = useLiveQuery(async () => {
    const allVoiceList = await db.voicelist.toArray();
    // // 音声データ Blob → Blob URLに変換する
    const convertVoicesData = allVoiceList.map((list) => {
      if (list.voice) {
        const url = URL.createObjectURL(list.voice);
        return { ...list, voiceUrl: url };
      } else {
        return { ...list, voiceUrl: '' };
      }
    });

    console.log(convertVoicesData);
    return convertVoicesData;
  });

  return (
    <>
      <h3>
        🎧 IndexedDBからデータ取得：<a href="https://dexie.org/">Dexie.js</a> 使用
      </h3>
      <ul>
        {IndexedData?.map((data) => (
          <li key={data.id}>
            {data.name}
            <audio controls src={data.voiceUrl}></audio>
          </li>
        ))}
      </ul>
    </>
  );
}
