import 'regenerator-runtime/runtime';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/* ====================

ここまで初期値

==================== */

// import { motion, AnimatePresence } from 'framer-motion';
// import '../styles/globals.css';
// import { useRouter } from 'next/router';

// function App({ Component, pageProps }) {
//   const router = useRouter();
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={router.route}
//         initial="initialState"
//         animate="animateState"
//         exit="exitState"
//         transition={{
//           duration: 0.75,
//         }}
//         variants={{
//           initialState: {
//             opacity: 0,
//             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
//           },
//           animateState: {
//             opacity: 1,
//             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
//           },
//           exitState: {
//             clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
//           },
//         }}
//         className="base-page-size"
//       >
//         <Component {...pageProps} />
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default App;

/* ====================

ここまでFramar Motion

==================== */
// import './App.css';
// import { useState, useRef } from 'react';
// import VideoRecorder from '../components/VideoRecorder';
// import AudioRecorder from '../components/AudioRecorder';

// const App = () => {
//   let [recordOption, setRecordOption] = useState('video');
//   const toggleRecordOption = (type) => {
//     return () => {
//       setRecordOption(type);
//     };
//   };
//   return (
//     <div>
//       <h1>React Media Recorder</h1>
//       <div className="button-flex">
//         <button onClick={toggleRecordOption('video')}>Record Video</button>
//         <button onClick={toggleRecordOption('audio')}>Record Audio</button>
//       </div>
//       <div>{recordOption === 'video' ? <VideoRecorder /> : <AudioRecorder />}</div>
//     </div>
//   );
// };
// export default App;

/* ====================

ここまでaudio ライブラリなしバージョン

==================== */

// import { useReactMediaRecorder } from 'react-media-recorder';
// import React, { useEffect, useState } from 'react';
// import 'regenerator-runtime';

// const RecordView = (props) => {
//   const [second, setSecond] = useState('00');
//   const [minute, setMinute] = useState('00');
//   const [isActive, setIsActive] = useState(false);
//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     let intervalId;

//     if (isActive) {
//       intervalId = setInterval(() => {
//         const secondCounter = counter % 60;
//         const minuteCounter = Math.floor(counter / 60);

//         let computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
//         let computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

//         setSecond(computedSecond);
//         setMinute(computedMinute);

//         setCounter((counter) => counter + 1);
//       }, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isActive, counter]);

//   function stopTimer() {
//     setIsActive(false);
//     setCounter(0);
//     setSecond('00');
//     setMinute('00');
//   }
//   const { status, startRecording, stopRecording, pauseRecording, mediaBlobUrl } = useReactMediaRecorder({
//     video: false,
//     audio: true,
//     echoCancellation: true,
//   });
//   console.log('url', mediaBlobUrl);

//   return (
//     <div
//       style={{
//         border: '1px solid black',
//         backgroundColor: 'black',
//         width: '700px',
//         height: '350px',
//       }}
//     >
//       <div
//         style={{
//           border: '1px solid #bd9f61',
//           height: '70px',
//           backgroundColor: '#bd9f61',
//           display: 'flex',
//         }}
//       >
//         <h4
//           style={{
//             marginLeft: '10px',
//             textTransform: 'capitalize',
//             fontFamily: 'sans-serif',
//             fontSize: '18px',
//             color: 'white',
//           }}
//         >
//           {status}
//         </h4>
//       </div>
//       <div style={{ height: '38px' }}>
//         {' '}
//         <video src={mediaBlobUrl} controls loop />
//       </div>

//       <div
//         className="col-md-6 col-md-offset-3"
//         style={{
//           backgroundColor: 'black',
//           color: 'white',
//           marginLeft: '357px',
//         }}
//       >
//         <button
//           style={{
//             backgroundColor: 'black',
//             borderRadius: '8px',
//             color: 'white',
//           }}
//           onClick={stopTimer}
//         >
//           Clear
//         </button>
//         <div style={{ marginLeft: '70px', fontSize: '54px' }}>
//           <span className="minute">{minute}</span>
//           <span>:</span>
//           <span className="second">{second}</span>
//         </div>

//         <div style={{ marginLeft: '20px', display: 'flex' }}>
//           <label
//             style={{
//               fontSize: '15px',
//               fontWeight: 'Normal',
//               // marginTop: "20px"
//             }}
//             htmlFor="icon-button-file"
//           >
//             <h3 style={{ marginLeft: '15px', fontWeight: 'normal' }}>Press the Start to record</h3>

//             <div>
//               <button
//                 style={{
//                   padding: '0.8rem 2rem',
//                   border: 'none',
//                   marginLeft: '15px',
//                   fontSize: '1rem',
//                   cursor: 'pointer',
//                   borderRadius: '5px',
//                   fontWeight: 'bold',
//                   backgroundColor: '#42b72a',
//                   color: 'white',
//                   transition: 'all 300ms ease-in-out',
//                   transform: 'translateY(0)',
//                 }}
//                 onClick={() => {
//                   if (!isActive) {
//                     startRecording();
//                   } else {
//                     pauseRecording();
//                   }

//                   setIsActive(!isActive);
//                 }}
//               >
//                 {isActive ? 'Pause' : 'Start'}
//               </button>
//               <button
//                 style={{
//                   padding: '0.8rem 2rem',
//                   border: 'none',
//                   backgroundColor: '#df3636',
//                   marginLeft: '15px',
//                   fontSize: '1rem',
//                   cursor: 'pointer',
//                   color: 'white',
//                   borderRadius: '5px',
//                   fontWeight: 'bold',
//                   transition: 'all 300ms ease-in-out',
//                   transform: 'translateY(0)',
//                 }}
//                 onClick={() => {
//                   stopRecording();
//                   pauseRecording();
//                 }}
//               >
//                 Stop
//               </button>
//             </div>
//           </label>
//         </div>
//         <b></b>
//       </div>
//     </div>
//   );
// };
// export default RecordView;
