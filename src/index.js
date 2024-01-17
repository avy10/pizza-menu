// import react core and reactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// importing css files
import "./index.css";

// data from data.js file
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];



// create our componenet

function App(){
    return (
    <div className="container">
      <Header />
      <Menu />
      <Pizza /> 
      <Pizza /> 
      <Pizza /> 
      <Footer />
    </div>
    )
}
function Header(){
    // return <h1 style={{fontSize: "1.25em", color : "aqua", textTransform : "uppercase"}}>Fast React Pizza Avy </h1>
    return <header className="header">
      <h1>Fast React Pizza Avy </h1>
      
    </header>
}

const Menu = function(){
  /* const style = {color : "teal", textTransform : "capitalize"}
	return <div>
		<h2 style = {style}>Menu: </h2>
	</div> */
	return ( 
  <main className="menu">
    <h2>Menu: </h2>
  </main>
  )
}

const Footer = () => {
    // return a createElement call instead of JSX
    // return React.createElement("footer", null, "We are currently HIRING!!")

	const hour = new Date().getHours();
	const openHour = 9;
	const closeHour = 11;
	const isOpen = hour >= openHour && hour <= closeHour;
	if(isOpen) {
		return <footer className="footer">{new Date().toLocaleTimeString()} We are currently open <br /> we are currently Hiring!!</footer>
	} else {
		return <footer className="footer">{new Date().toLocaleTimeString()} We are currently open <br /> we are currently Hiring!!</footer>
	}
}

function Pizza(){
    return (
    <div>
        <img src="pizzas/spinaci.jpg" alt="Pizza Spincai image"/>
        <h2>Spinaci</h2>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
    )
}

//we now tell react to render the component on the UI
const root = ReactDOM.createRoot(document.getElementById("root"));

// the target DOM is selected and now render the App componenet in that div#root
root.render(<React.StrictMode><App /></React.StrictMode>);