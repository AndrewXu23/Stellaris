import './Build.css';
import Element from './Element';
import axios from 'axios';
import React, {useState} from "react"

async function handleSubmit(N_value, O_value, Cell_value) {
  await axios.post('http://localhost:5000/listings/record', {
    N: N_value,
    O: O_value,
    cell: Cell_value,
  });
}

function Build() {
  const [N_value, setNValue] = useState(0);
  const [O_value, setOValue] = useState(0);
  const [Cell_value, setCellValue] = useState(0);
  return (
    <section className='App-link'>
      <Element name="N" initialValue={N_value} />
      <button onClick={() => setNValue(N_value+1)}>
        Increase N
      </button>
      <button onClick={() => setNValue(N_value-1)}>
        Decrease N
      </button>
      <Element name="O" initialValue={O_value} />
      <button onClick={() => setOValue(O_value+1)}>
        Increase O
      </button>
      <button onClick={() => setOValue(O_value-1)}>
        Decrease O
      </button>
      <Element name="Cell" initialValue={Cell_value} />
      <button onClick={() => setCellValue(Cell_value+1)}>
        Increase Cell
      </button>
      <button onClick={() => setCellValue(Cell_value-1)}>
        Decrease Cell
      </button>
      <button onClick={() => handleSubmit(N_value, O_value, Cell_value)}>
        Submit
      </button>
    </section>
  );
}

export default Build;
