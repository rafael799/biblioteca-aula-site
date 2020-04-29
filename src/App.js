import React from 'react';
import Home from './Home/index';
import PdfView from './PdfView/BatalhaArgumentos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Home></Home>
    </div>
  );
}

export default App;
