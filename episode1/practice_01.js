/* problem 1
* <div id ="parent">
*    <div id="child">
*        <h1></h1>
*       <h2></h2>
*   </div>
*  </div>  */



const parent =
    React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
        ]
    )
    );

const body = ReactDOM.createRoot(document.getElementById("body"));

body.render(parent);

               