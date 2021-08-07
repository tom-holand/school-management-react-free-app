import SchoolList from "./components/SchoolList";
import CreateSchool from "./components/CreateSchool";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditSchool from "./components/EditSchool";
import NavLinks from "./components/NavLinks";
import CreateSchoolDetail from "./components/CreateSchoolDetail";


function App() {
  return (
    <>
      <Router>
        <NavLinks />
        <Switch>
          <Route exact path='/' > <SchoolList /> </Route>
          <Route exact path='/createschool' ><CreateSchool /> </Route>
          <Route exact path='/createschooldetail' ><CreateSchoolDetail /> </Route>
          <Route exact path='/editschool/:id' ><EditSchool /> </Route>
          <Route exact path='/editschool/:id' ><EditSchool /> </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
