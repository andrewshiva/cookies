// Function to setting cookies
function setCookies() {
    document.cookie = "name = " 
    + document.cookieFrm.nameVal.value + ";";
    document.cookie = "class = "
    + document.cookieFrm.cls.value + ";"
    document.cookie = "subject = " 
    + document.cookieFrm.sub.value + ";"
}

//Function to reading cookies
function showCookies() {
    var arrCookie = document.cookie.split(";");
    /* To store the cookie value in an array separately 
        here use "split()" method, which splits the values
        where ";" is located, such as 
        arrCookie[0]="name=geeksforgeeks"
        arrCookie[1]="class=3rd year" */

    for (var i = 0; i < arrCookie.length; i++) {
        var valArr = arrCookie[i].split("=");
        /* here "valArr" is use to store the acctual value
           of a particular cookie field, such as
           valArr[0]=name
           valArr[1]=geeksforgeeks */

        if (valArr[0].trim() == 'name')
        /* The "trim()" is used for remove unwanted white 
           spaces, otherwise there maybe some mismatch in 
           the values search for "name" */
        {
            document.cookieFrm.nameVal.value = valArr[1];
        }

        if (valArr[0].trim() == 'class') {
            document.cookieFrm.cls.value = valArr[1];
        }

        if (valArr[0].trim() == 'subject') {
            document.cookieFrm.sub.value = valArr[1];
        }

    }

}
    