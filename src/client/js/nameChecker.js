var validUrl = require('valid-url');


function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (!inputText || inputText.length===0 || inputText.trim().length===0){
        alert("Please insert a text");
        return false;
    }

    if (validUrl.isUri(inputText)){
        console.log('Looks like an URI');
        return true;
        
    } else {
        console.log('Not a URI');
        return false;
    }
 
}

export { checkForName }
