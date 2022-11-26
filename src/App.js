import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Link , Routes} from "react-router-dom";
import Formulario from './brincando';

import 'bootstrap/dist/js/bootstrap.bundle'
import Brincando from './brincando';
import Brincandoz from './bincandoz';
import Brincandov1 from './brincandov1';

import Spinner from './boostrap structs/Spinner';
import Paginacao from './boostrap structs/Paginacao';
import ListGroup from './boostrap structs/Listgroup';
import Table from './boostrap structs/Table';
import Card from './boostrap structs/Card';
import Dropdown from './boostrap structs/Dropdown';
import Collapse from './boostrap structs/Collapse';
import Nav from './boostrap structs/Nav';
import NavDD from './boostrap structs/NavDD';
import Menusand from './boostrap structs/Menusand';
import Carousel from './boostrap structs/Carousel';
import Modal from './boostrap structs/Modal';
import Offcanvas from './boostrap structs/Offcanvas';


function App() {
  return (
 
  <Router> 
<Routes>

{/* <Route path='/' element={<><Brincando/><Brincandoz/></>}/>
 */}
 <Route path='/' element={<Offcanvas/>}> </Route>


</Routes>
    

  </Router>
  );
}

export default App;
