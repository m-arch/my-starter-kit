var React = require('react');
var Store = require('./store.jsx');


function startApp() {
    return {data: Store.getData(), error: Store.getError()};
};
    
function getPageView() {
    return {	
	data: Store.reloadData(),
	error: Store.getError() 
   };
};	

var myApp = React.createClass({
    
    getInitialState: function() {
	return startApp(); //will initalize pages and variables.
    }, 

    componentDidMount: function() {
	Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){	
	Store.removeChangeListener(this._onChange);
    },
    
    _closeError: function(){
	this.setState({error: null});
    },
    
 
    render: function() {
	return (
	    <div> 
		<div data-alert className="alert-box info radius">
		    {this.props.error}
		</div>
		<div className="row">
		    <div className ="small-12 columns">Hello world</div>
		</div>
	    </div>
	);
    },

    _onChange: function() {
	this.setState(getPageView());
    }
});

module.exports = myApp;
