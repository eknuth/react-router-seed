import React, { Component } from 'react';
import { Link } from 'react-router';

import DonutChart from '../components/DonutChart'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className="nav nav-sidebar">
            <li className="active"><a href="#">Neighborhoods <span className="sr-only">(current)</span></a></li>
            <li><a href="#/trees">Trees</a></li>
          </ul>
        </div>
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 className="page-header">Dashboard</h1>
          <div className="row placeholders">
            <div className="col-xs-6 col-sm-3">
              <DonutChart />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src='http://lorempixel.com/200/200/nature/2' className="img-responsive" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src='http://lorempixel.com/200/200/nature/3' className="img-responsive" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src='http://lorempixel.com/200/200/nature/4' className="img-responsive" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}
