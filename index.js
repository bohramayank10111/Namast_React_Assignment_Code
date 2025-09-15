 import React from "react";
import ReactDOM from"react-dom/client";
const anotherParent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", { id: "heading1" }, "Heading 1"),
React.createElement("h1", { id: "heading1" }, "Heading 2"),

]),
// Another children
React.createElement("div", { id: "child2" }, [React.createElement("h1", { id: "heading3" }, "Heading 3"),
React.createElement("h1", { id: "heading4" }, "Heading 4"),
])
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(anotherParent);