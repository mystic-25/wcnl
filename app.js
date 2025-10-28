//npx create-react-app react-practical
//cd react-practical
//npm install react react-router-dom react-router
//npm start



import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// =========================
// 1️⃣ JSX, COMPONENTS, PROPS
// =========================

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// =========================
// 2️⃣ STATE, EVENTS, FORMS
// =========================

function Counter() {
  const [count, setCount] = useState(0); //State hook

  function increment() {
    setCount(count + 1); //Event Handling
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className="p-3">
      <h3>Counter Example (State and events)</h3>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// =========================
// 3️⃣ FORM HANDLING + VALIDATION
// =========================

function FormExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.includes("@")) {
      setSubmitted(true);
    } else {
      alert("Please enter a valid name and email.");
    }
  };

  return (
    <div className="p-3">
      <h3>Form Example</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email :
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Submitted Successfully : {name} ({email})
        </p>
      )}
    </div>
  );
}


// =========================
// 4️⃣ REFS EXAMPLE
// =========================

function RefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-3">
      <h3>Refs Example</h3>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// =========================
// 5️⃣ KEYS (LIST RENDERING)
// =========================

function ListExample() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <div className="p-3">
      <h3>Keys Example (List Rendering)</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key="index">{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// =========================
// 6️⃣ ROUTER SETUP
// =========================

function Home() {
  return (
    <div>
      <Welcome name="Student" />
      <p>Welcome to the React Practical Home Page.</p>
    </div>
  );
}

function About() {
  return <p>This is About Page.</p>
}


// =========================
// 7️⃣ MAIN APP COMPONENT
// =========================

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Practical Examples</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
          <Link to="/form">Form</Link> | <Link to="/refs">Refs</Link> |{" "}
          <Link to="/list">List</Link> | <Link to="/about">About</Link>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/form' element={<FormExample />} />
          <Route path='/refs' element={<RefExample />} />
          <Route path='/list' element={<ListExample />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
