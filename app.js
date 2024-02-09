{/* <div id = "parent">
        <div id = "child">
            <h1 id = heading>

            </h1>
        </div>
</div> */}


const div = React.createElement("div", { id: parent }, 
                                        [React.createElement("div", { id: "child" }, 
                                        [React.createElement("h1", { id: "heading" }, "I am inner react tag"),React.createElement("h2", { id: "heading" }, "I am inner react tag")]),React.createElement("div", { id: "child" }, 
                                        [React.createElement("h1", { id: "heading" }, "I am inner react tag"),React.createElement("h2", { id: "heading" }, "I am inner react tag")])]);

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
