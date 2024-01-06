import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
  <>
  <h1>Image Gallery</h1>
  <div className="container">
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?cat" />
      <h2>This is a Cat</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?dog" />
      <h2>This is a Dog</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?lion" />
      <h2>This is a Lion</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?tiger" />
      <h2>This is a Tiger</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?zebra" />
      <h2>This is a Zebra</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?horse" />
      <h2>This is a Horse</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?girafee" />
      <h2>This is a Giraffe</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?snake" />
      <h2>This is a snake</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?bettle" />
      <h2>This is a bettle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?monkey" />
      <h2>This is a monkey</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?panda" />
      <h2>This is a panda</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?polarbear" />
      <h2>This is a polar bear</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?elephant" />
      <h2>This is a elephant</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?camel" />
      <h2>This is a camel</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
    <div className="box">
      <img src="https://source.unsplash.com/200x200/?rat" />
      <h2>This is a rat</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        neque.
      </p>
    </div>
  </div>
</>
)
}
export default App