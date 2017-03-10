var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var _viewData = {};

var Store = assign({}, EventEmitter.prototype, {
    /**
     * Get the entire collection of Items.
     * @return {object}
     */
    getData() {
	$.ajax({
	    url: '/appdata/get',
	    dataType: 'json',
	    cache: false,
	    success: function(response){
		if(response.success == true)
		    {
			_viewData = response.data;
			Store.emitChange();
			return  response.data;
		    }
		else
		    {
			handleResponse(response.error.code, response.error.message);		    
		    }
	    },
	    error: function(xhr, status, err){
		alert(err);
		console.error(status, err.toString());
	    }
	});
    },
    
    reloadData(){
	if(_viewData && _viewData.error)
	    setTimeout(function(){
		_viewData.error = null;
	    }, 100);
	return _viewData;
    },

    getError() {
	return _viewData ? _viewData.error : null;
    },

    emitChange() {
	this.emit(CHANGE_EVENT);
	    },

    /**
     * @param {function} callback
     */
    addChangeListener(callback) {
	this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
	this.removeListener(CHANGE_EVENT, callback);
    },

    reportError(error){
	_viewData.error = error;
	Store.emitChange();
    },
});


module.exports = Store;
