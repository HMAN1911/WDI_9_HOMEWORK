(function(){

    function define_wdi(){
        var wdi = {};
        wdi.shuffle = function(array_input) {
            var array = array_input.concat();

            for (var i=0; i<array.length; i++) {
                var new_index = Math.floor(Math.random() * array.length);
                var temp = array[new_index];
                array[new_index] = array[i];
                array[i] = temp;
            }

            return array;
        };
        wdi.sample = function(array_input, n) {
            var array = wdi.shuffle(array_input);

            if (n === undefined) {
                return array[0];
            }
            else {
                return array.slice(0,n);
            }
        };
        wdi.each = function(array_input, func) {
            for (var i=0; i<array_input.length; i++) {
                func(array_input[i]);
            }
            return array_input;
        };
        wdi.map = function(array_input, func) {
            var array = [];
            for (var i=0; i<array_input.length; i++) {
                array [i] = func(array_input[i]);
            }
            return array;
        };
        wdi.filter = function(array_input, func) {
            var array = [];
            for (var i=0; i<array_input.length; i++) {
                if ( func(array_input[i]) ) {
                    array.push(array_input[i]);
                }
            }
            return array;
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