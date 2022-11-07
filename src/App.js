/*After much pain I discovered this codepen (https://codepen.io/naicuoctavian/pen/GRgzqBg)
which simply and beutifully recorded audio in the browser with the Web Audio API, and 
without third party libraries or issues.
I have added a few features and imporved the UX to create what should be a nice starting
point for implementing audio recording in your Reactjs App.
*/

import React, { useContext } from "react";
import { MainContext } from "./contexts/MainContext.js";
import AudioRecorder from "./AudioRecorder.js";
import AudioRecorderFunc from "./AudioRecorderFunc.js";
import SimpleRecorder from "./SimpleRecorder.js";
import WaveSurferComponent from "./WaveSurferComponent.js";

import Box from "@material-ui/core/Box";

import "./styles.css";
import styled from "styled-components";

const StyledBox = styled(Box)`
  #waveform {
    margin: 24px auto;
  }
`;

export default function App() {
  const { audioURL } = useContext(MainContext);

  return (
    <div className="App">
      <h2>Audio Recorder</h2>
      <AudioRecorderFunc />
      {/* <AudioRecorder /> */}
      {/* <SimpleRecorder /> */}
      <StyledBox>
        <WaveSurferComponent audioURL={audioURL} />
        <button
          onClick={() => {
            console.log();
          }}
        >
          Log
        </button>
      </StyledBox>{" "}
    </div>
  );
}
