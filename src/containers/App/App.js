import React, { Component } from 'react';
import { connect } from 'react-redux';

/*Containers*/
import ColumnContainer from '../Column';

/*Components*/
import CardComponent from '../../components/Card';

/*Styles*/
import logo from '../../logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

    };

  }

  componentDidMount() {

  }

  render() {
    return (
      <h1>This is the app container.</h1>
      <hr/>
      <ColumnContainer />
      <ColumnContainer />
      <ColumnContainer />
    );
  }

  const mapStateToProps = (state) => {
    //sth
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      loadBooks : (books) => {
        console.log('Dispatching the action');
        dispatch(loadBooks(books));
      }
    }
  }

  const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)

}//end class

export default ConnectedApp;