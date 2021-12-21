import styled from 'styled-components';
import './App.css';
import Counter from './components/Counter';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}

export default App;
