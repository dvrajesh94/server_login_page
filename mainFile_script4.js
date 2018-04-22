require('./module1_script4'); //here modue1 was updating the currectUrl of the mainModule so both modules 1&2 will have the changed currentUrl
require('./module2_script4');
// so to get rid of the above stated problem create a function and return required functions as objects