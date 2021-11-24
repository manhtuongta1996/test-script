
import './App.css';
import styled from 'styled-components';
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react';
const CanvasContainer = styled.div
function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
