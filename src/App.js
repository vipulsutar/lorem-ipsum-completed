import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const HandleClick = (e) => {
    e.preventDefault()
    let amount = parseInt(count);
    if (count <= 0) {
       amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  function HandleChange(e) {
    setCount(e.target.value)
  }

  return (
    <section className='section-center'>
      <h3>tired of lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={HandleClick}>
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          name="amount"
          value={count}
          onChange={HandleChange}
        ></input>
        <button className="btn" type="submit">Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
