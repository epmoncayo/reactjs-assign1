var React = require('react');

var Header = require('./Header');
var Hero = require('./Hero');
var Footer = require('./Footer');
var Section = require('./Section');
var Card = require('./Card');

//var Alert = require('react-bootstrap/lib/Alert');
var Alert = require('react-bootstrap').Alert;

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Hero />
        <div id="cards" className="clearfix">
          <Section />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />      
        <Alert bsStyle="warning">
            <h1>Alert React JS!</h1>
        </Alert>          
      </div>
    );
  }
});

module.exports = Main;