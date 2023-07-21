import { db } from '@/db';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useEffect, useState } from 'react';
import 'regenerator-runtime';
import axios from 'axios';

export function AddVoiceData() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [voice, setVoice] = useState('');

  async function addVoiceData() {
    try {
      // DBにデータを追加
      const id = await db.voicelist.add({
        name,
        voice,
      });
      setStatus(`Voicedata ${name} successfully added. Got id ${id}`);
      setName('');
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  // react-media-recorderのhooksを使用　録音関連
  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true,
  });

  // 音声データ Blob URL → Blobに変換する
  useEffect(() => {
    axios
      .get(mediaBlobUrl, {
        responseType: 'blob',
      })
      .then(({ data }) => {
        setVoice(data);
        console.log(data); // → Blob
      })
      .catch((err) => {
        console.error(err);
      });
  }, [mediaBlobUrl]);

  console.log(voice);
  console.log('url', mediaBlobUrl);

  return (
    <>
      <h2>
        🎤 Recording：<a href="https://www.npmjs.com/package/react-media-recorder">react-media-recorder</a>
      </h2>
      <div>
        <div style={{ display: 'block', margin: '1.5rem 0' }}>
          <audio src={mediaBlobUrl} controls></audio>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <button
                onClick={() => {
                  startRecording();
                }}
              >
                Record Start
              </button>
              <button
                onClick={() => {
                  stopRecording();
                }}
              >
                Record Stop
              </button>
            </div>
            <div>
              <a download href={mediaBlobUrl}>
                Download(.wav)
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2>
        🧰 Add to IndexedDB：<a href="https://dexie.org/docs/Tutorial/React#2-install-dependencies">Dexie.js</a>
      </h2>
      <p>{status}</p>
      Name:
      <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} />
      <button onClick={addVoiceData}>Add</button>
    </>
  );
}
