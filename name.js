var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();
// The first output in the console is the name of the variable="bar"this is because it is in the outer scoops.
// the second output is undefined because the function is in the innerside the scoop.
// The second function has no variable inside the scoops
// it has use the locally scoope to call the function
// The fuction has being concantenated to get the name of the property which "baz"
// The use of self help to call the function outside and also to concantenated the two variable.





