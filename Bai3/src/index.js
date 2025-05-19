import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import AddForm from './components/Form/AddForm';
import Form from './components/Form/Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AddForm></AddForm>
      <Form></Form>
    </Provider>
  </React.StrictMode>
);


