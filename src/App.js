import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InvoiceDetail from './components/invoiceDetail';
import InvoiceForm from './components/invoiceForm';
import InvoiceTable from './components/invoiceTable'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <InvoiceTable></InvoiceTable>
          </Route>
          <Route exact path="/new">
            <InvoiceForm></InvoiceForm>
          </Route>
          <Route exact path="/:id">
            <InvoiceDetail></InvoiceDetail>
          </Route>
          <Route exact path="/edit/:idEdit">
            <InvoiceForm></InvoiceForm>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;