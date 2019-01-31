"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var core_1 = require("@emotion/core");
var baseStyle = core_1.css({
    background: "pink"
});
function App() {
    return (<div className="App">
      <span css={{ baseStyle: baseStyle }}>hello world</span>
    </div>);
}
