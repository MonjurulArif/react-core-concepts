import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // var style = {
  //   color: "red",
  //   backgroundColor: "yellow",
  // };

  const heroes = ["Razzak", "Jasim", "Alomgir", "Salman", "Bapparaj", "Riaz"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Premiere El", price: "$6249.99" },
  ];

  // const productNames = products.map((product) => product.name);
  // console.log(productNames);

  // const heroesNames = heroes.map((hero) => hero);
  // console.log(heroesNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Developer</p>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        <Counter></Counter>

        <Users></Users>

        <ul>
          {heroes.map((hero) => (
            <li>{hero}</li>
          ))}
          <br />
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
          <br />
          <li>{heroes[0]}</li>
          <li>{heroes[1]}</li>
          <li>{heroes[2]}</li>
          <li>{heroes[3]}</li>
        </ul>
        {products.map((prod) => (
          <Product product={prod}></Product>
        ))}
        <br />
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Jasim" heroine="Shabana"></Person>
        <Person name="BappaRaz" heroine=""></Person>
        <Person name="Elias K" heroine="Anjana"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10); //[statename, function], statename =10
  const handleIncrease = () => {
    // const newCount = count + 1;
    // setCount(newCount);
    setCount(count + 1);
    // console.log("clicked");
  }; //hendleIncrease is function

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={() => setCount(count - 1)}>Decrease</button> */}
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  //useEffect() auto called
  useEffect(() => {
    // console.log("Calling Effect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setUsers(data))
      .catch((error) => {
        alert("Error: " + error);
      });
  }, []); //will not be called infinite times for []

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {console.log(users)}
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <ul>
        {/* {console.log(users)} */}
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solit gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  // console.log(props);
  const { name, price } = props.product;
  // const { name, price } = { name: "Photoshop", price: "$90.99" };
  console.log(name, price);
  return (
    <div style={productStyle}>
      {/* <h2>{props.name}</h2> */}
      {/* <h2>{props.product.name}</h2> */}
      <h2>{name}</h2>
      {/* <h5>{props.price}</h5> */}
      {/* <h5>{props.product.price}</h5> */}
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  // const personStyle = {
  //   border: "2px solid red",
  //   margin: "10px",
  // };
  return (
    <div style={{ border: "2px solid yellow", margin: "10px" }}>
      {/* <div style={personStyle}> */}
      <h3>Name: {props.name}</h3>
      <p>Heroine: {props.job}</p>
    </div>
  );
}
export default App;

// function App() {
//   // var style = {
//   //   color: "red",
//   //   backgroundColor: "yellow",
//   // };

//   const heroes = ["Razzak", "Jasim", "Alomgir", "Salman", "Bapparaj", "Riaz"];
//   const products = [
//     { name: "Photoshop", price: "$90.99" },
//     { name: "Illustrator", price: "$60.99" },
//     { name: "PDF Reader", price: "$6.99" },
//     { name: "Premiere El", price: "$6249.99" },
//   ];

//   // const productNames = products.map((product) => product.name);
//   // console.log(productNames);

//   // const heroesNames = heroes.map((hero) => hero);
//   // console.log(heroesNames);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>I am a React Developer</p>
//         {/* <Product name={products[0].name} price={products[0].price}></Product> */}

//         <Counter></Counter>

//         <ul>
//           {heroes.map((hero) => (
//             <li>{hero}</li>
//           ))}
//           <br />
//           {products.map((product) => (
//             <li>{product.name}</li>
//           ))}
//           <br />
//           <li>{heroes[0]}</li>
//           <li>{heroes[1]}</li>
//           <li>{heroes[2]}</li>
//           <li>{heroes[3]}</li>
//         </ul>
//         {products.map((prod) => (
//           <Product product={prod}></Product>
//         ))}
//         <br />
//         <Product product={products[0]}></Product>
//         <Product product={products[1]}></Product>
//         <Person name="Jasim" heroine="Shabana"></Person>
//         <Person name="BappaRaz" heroine=""></Person>
//         <Person name="Elias K" heroine="Anjana"></Person>
//       </header>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(10); //[statename, function], statename =10
//   const handleIncrease = () => {
//     // const newCount = count + 1;
//     // setCount(newCount);
//     setCount(count + 1);
//     // console.log("clicked");
//   }; //hendleIncrease is function

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       {/* <button onClick={() => setCount(count - 1)}>Decrease</button> */}
//       <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={handleIncrease}>Increase</button>
//       {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
//     </div>
//   );
// }

// function Product(props) {
//   const productStyle = {
//     border: "1px solit gray",
//     borderRadius: "5px",
//     backgroundColor: "lightgray",
//     height: "200px",
//     width: "200px",
//     float: "left",
//   };
//   // console.log(props);
//   const { name, price } = props.product;
//   // const { name, price } = { name: "Photoshop", price: "$90.99" };
//   console.log(name, price);
//   return (
//     <div style={productStyle}>
//       {/* <h2>{props.name}</h2> */}
//       {/* <h2>{props.product.name}</h2> */}
//       <h2>{name}</h2>
//       {/* <h5>{props.price}</h5> */}
//       {/* <h5>{props.product.price}</h5> */}
//       <h5>{price}</h5>
//       <button>Buy now</button>
//     </div>
//   );
// }

// function Person(props) {
//   // const personStyle = {
//   //   border: "2px solid red",
//   //   margin: "10px",
//   // };
//   return (
//     <div style={{ border: "2px solid yellow", margin: "10px" }}>
//       {/* <div style={personStyle}> */}
//       <h3>Name: {props.name}</h3>
//       <p>Heroine: {props.job}</p>
//     </div>
//   );
// }
// export default App;

// function App() {
//   // var style = {
//   //   color: "red",
//   //   backgroundColor: "yellow",
//   // };

//   const heroes = ["Razzak", "Jasim", "Alomgir", "Salman", "Bapparaj", "Riaz"];
//   const products = [
//     { name: "Photoshop", price: "$90.99" },
//     { name: "Illustrator", price: "$60.99" },
//     { name: "PDF Reader", price: "$6.99" },
//     { name: "Premiere El", price: "$6249.99" },
//   ];

//   // const productNames = products.map((product) => product.name);
//   // console.log(productNames);

//   // const heroesNames = heroes.map((hero) => hero);
//   // console.log(heroesNames);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>I am a React Developer</p>
//         {/* <Product name={products[0].name} price={products[0].price}></Product> */}

//         <ul>
//           {heroes.map((hero) => (
//             <li>{hero}</li>
//           ))}
//           <br />
//           {products.map((product) => (
//             <li>{product.name}</li>
//           ))}
//           <br />
//           <li>{heroes[0]}</li>
//           <li>{heroes[1]}</li>
//           <li>{heroes[2]}</li>
//           <li>{heroes[3]}</li>
//         </ul>
//         {products.map((prod) => (
//           <Product product={prod}></Product>
//         ))}
//         <br />
//         <Product product={products[0]}></Product>
//         <Product product={products[1]}></Product>
//         <Person name="Jasim" heroine="Shabana"></Person>
//         <Person name="BappaRaz" heroine=""></Person>
//         <Person name="Elias K" heroine="Anjana"></Person>
//       </header>
//     </div>
//   );
// }

// function Product(props) {
//   const productStyle = {
//     border: "1px solit gray",
//     borderRadius: "5px",
//     backgroundColor: "lightgray",
//     height: "200px",
//     width: "200px",
//     float: "left",
//   };
//   // console.log(props);
//   const { name, price } = props.product;
//   // const { name, price } = { name: "Photoshop", price: "$90.99" };
//   console.log(name, price);
//   return (
//     <div style={productStyle}>
//       {/* <h2>{props.name}</h2> */}
//       {/* <h2>{props.product.name}</h2> */}
//       <h2>{name}</h2>
//       {/* <h5>{props.price}</h5> */}
//       {/* <h5>{props.product.price}</h5> */}
//       <h5>{price}</h5>
//       <button>Buy now</button>
//     </div>
//   );
// }

// function Person(props) {
//   // const personStyle = {
//   //   border: "2px solid red",
//   //   margin: "10px",
//   // };
//   return (
//     <div style={{ border: "2px solid yellow", margin: "10px" }}>
//       {/* <div style={personStyle}> */}
//       <h3>Name: {props.name}</h3>
//       <p>Heroine: {props.job}</p>
//     </div>
//   );
// }
// export default App;

// function App() {
//   // var style = {
//   //   color: "red",
//   //   backgroundColor: "yellow",
//   // };

//   const heroes = ["Anwar", "Jafor", "Alomgir", "Salman"];
//   const products = [
//     { name: "Photoshop", price: "$90.99" },
//     { name: "Illustrator", price: "$60.99" },
//     { name: "PDF Reader", price: "$6.99" },
//   ];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>I am a React Developer</p>
//         {/* <Product name={products[0].name} price={products[0].price}></Product> */}
//         <Product product={products[0]}></Product>
//         <Product product={products[1]}></Product>
//         <Person name="Jasim" heroine="Shabana"></Person>
//         <Person name="BappaRaz" heroine=""></Person>
//         <Person name="Elias K" heroine="Anjana"></Person>
//       </header>
//     </div>
//   );
// }

// function Product(props) {
//   const productStyle = {
//     border: "1px solit gray",
//     borderRadius: "5px",
//     backgroundColor: "lightgray",
//     height: "200px",
//     width: "200px",
//     float: "left",
//   };
//   // console.log(props);
//   const { name, price } = props.product;
//   // const { name, price } = { name: "Photoshop", price: "$90.99" };
//   console.log(name, price);
//   return (
//     <div style={productStyle}>
//       {/* <h2>{props.name}</h2> */}
//       {/* <h2>{props.product.name}</h2> */}
//       <h2>{name}</h2>
//       {/* <h5>{props.price}</h5> */}
//       {/* <h5>{props.product.price}</h5> */}
//       <h5>{price}</h5>
//       <button>Buy now</button>
//     </div>
//   );
// }

// function Person(props) {
//   // const personStyle = {
//   //   border: "2px solid red",
//   //   margin: "10px",
//   // };
//   return (
//     <div style={{ border: "2px solid yellow", margin: "10px" }}>
//       {/* <div style={personStyle}> */}
//       <h3>Name: {props.name}</h3>
//       <p>Heroine: {props.job}</p>
//     </div>
//   );
// }
// export default App;

// function App() {
//   // var style = {
//   //   color: "red",
//   //   backgroundColor: "yellow",
//   // };

//   const heroes = ["Anwar", "Jafor", "Alomgir", "Salman"];

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>I am a React Developer</p>
//         <Person name={heroes[0]} food="Fruit"></Person>
//         <Person name="Jasim" heroine="Shabana"></Person>
//         <Person name="BappaRaz" heroine=""></Person>
//         <Person name="Elias K" heroine="Anjana"></Person>
//       </header>
//     </div>
//   );
// }

// function Person(props) {
//   const personStyle = {
//     border: "2px solid red",
//     margin: "10px",
//   };
//   return (
//     // <div style={{ border: "2px solid yellow", margin: "10px" }}>
//     <div style={personStyle}>
//       <h1>Name: {props.name}</h1>
//       <h3>Heroine: {props.heroine}</h3>
//     </div>
//   );
// }
// export default App;

// function App() {
//   // var style = {
//   //   color: "red",
//   //   backgroundColor: "yellow",
//   // };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>I am a React Developer</p>
//         <Person></Person>
//         <Person></Person>
//         <Person></Person>
//       </header>
//     </div>
//   );
// }

// function Person() {
//   const personStyle = {
//     border: "2px solid red",
//     margin: "10px",
//   };
//   return (
//     // <div style={{ border: "2px solid yellow", margin: "10px" }}>
//     <div style={personStyle}>
//       <h1>Name: Monjurul Arif</h1>
//       <h3>New Program</h3>
//     </div>
//   );
// }
// export default App;

// function App() {
//   var person = { name: "Dr.Mahfuz", job: "Singer" };
//   var person2 = { name: "Eva Rahman", job: "female singer" };
//   var style = {
//     color: "red",
//     backgroundColor: "yellow",
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit Done <code>src/App.js</code> and save to reload.
//         </p>
//         <h1 className="" style={style}>
//           My heading
//         </h1>
//         <h2>my heading: {(2 + 3) * 20 + 70}</h2>
//         <h2>my heading: {person.name + " " + person.job}</h2>
//         <h3 style={{ backgroundColor: "cyan", color: "tomato" }}>Singer: {person2.name + " " + person2.job}</h3>
//         <p>My first React Paragraph</p>
//       </header>
//     </div>
//   );
// }

// export default App;
