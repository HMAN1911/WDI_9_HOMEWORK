(function(){

    function define_wdi(){
        var wdi = {};
        wdi.shuffle = function(obj) {
            return _.shuffle(obj);
        };
        wdi.sample = function(obj, n, guard) {
            return _.sample(obj, n, guard);
        };
        wdi.each = function(obj, func) {
            return _.each(obj, func);
        };
        wdi.map = function(obj, func) {
            return _.map(obj, func);
        };
        wdi.filter = function(obj, func) {
            return _.map(obj, func);
        };
        return wdi;
    }
    //define globally if it doesn't already exist
    if(typeof(wdi) === 'undefined'){
        window.wdi = define_wdi();
    }
    else{
        console.log("wdi already defined.");
    }
})();