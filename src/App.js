import React from "react";
import Card from "./components/Card";

function App() {
    return <div>
        <h1 className="headingStyle">Todo App</h1>
        <Card titleText="Call Mother" descText="This is desc1" />
        <Card titleText="Call Father" descText="This is desc2" />
        <Card titleText="Call Wife" descText="This is desc3" />
        <Card titleText="Call Son" descText="This is desc4" />
    </div>

}

export default App;