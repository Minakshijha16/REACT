import React from "react"; 
import ReactDOM from "react-dom/client"
const jsxheading = <h1 id="heading" className="head" tabIndex="5"> Namaste React from jsx</h1>
const root = ReactDOM.createElement(document.getElementById("root"));
const Title = () => (
    <h1 className="head">Namaste using JSX</h1>
);

//component composition and js inside jsx
const num = 10000;
const elem = <span>js inside jsx</span>
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {elem}
        <h1>hello from functional componenet</h1>
        <h2>{num}</h2>
    </div>
);
root.render(<HeadingComponent/>);