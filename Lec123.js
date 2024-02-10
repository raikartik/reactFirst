{/* <div id = "parent">
        <div id = "child">
            <h1 id = heading>

            </h1>
        </div>
</div> */}

const React = require('react');
const ReactDOM = require('react-dom/client');


// const div = React.createElement("div", { id: parent }, 
//                                         [React.createElement("div", { id: "child" }, 
//                                         [React.createElement("h1", { id: "heading" }, "I am inner react tag"),React.createElement("h2", { id: "heading" }, "I am inner react tag")]),React.createElement("div", { id: "child" }, 
//                                         [React.createElement("h1", { id: "heading" }, "I am inner react tag"),React.createElement("h2", { id: "heading" }, "I am inner react tag")])]);

// // const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const reactHeading = React.createElement("h1",{id:"heading"},"kartik");
// console.log(reactHeading);
// const jsxheading = (<h1 id ="heading">
//     kartik
//     </h1>)
// console.log(jsxheading);

// // root.render(jsxheading);

// root.render(jsxheading);


const Title = ( <h1 id = "heading">Kartik rai is flexing</h1>)

const HeadingComponent = ()=>(
     <div>
         {Title}
        <h1 id = "heading">Kartik rai is Conponent Composition</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);