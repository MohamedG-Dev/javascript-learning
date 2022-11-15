// ----------------------Comments in Javascript---------------------------------
// This is an in-line comment.
/* This is a
multi-line comment */

//--------- Declare JavaScript Variables ----------------------
    var myName;

//--------- Storing Values with the Assignment Operator ------------------
    var a;
    a=8;

//---------- Assigning the Value of One Variable to Another -------------------
    var a;
    a = 7;
    var b;
    b=a;

//----------- Initializing Variables with the Assignment Operator ------------------
    var a=9;

//------------ Declare String Variables --------------------------
    var myFirstName="John";
    var myLastName="Wick";

//-------------- Understanding Uninitialized Variables -------------------------------
    /*Initializing the three variables a, b, and c with 5, 10, 
            and "I am a" respectively so that they will not be undefined*/
    var a=5;
    var b=10;
    var c="I am a";
    a = a + 1;
    b = b + 5;
    c = c + " String!";

//-------------------------- Understanding Case Sensitivity in Variables ------------------
    // Variable declarations
    var studlyCapVar ;
    var properCamelCase;
    var titleCaseOver;

    // Variable assignments
    studlyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;

//-------------------- Explore Differences Between the var and let Keywords -------------------
    //One of the biggest problems with declaring variables with the var keyword is that 
        //you can easily overwrite variable declarations:

    var camper = "James";
    var camper = "David";
    console.log(camper);
    //A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. 
    //You'll learn about other ES6 features in later challenges.
    //If you replace var with let in the code above, it results in an error:
        let camper = "James";
        let camper = "David";
    
//---------------------- Declare a Read-Only Variable with the const Keyword ----------------------
    //The keyword let is not the only new way to declare variables. 
    //In ES6, you can also declare variables using the const keyword.

    //const has all the awesome features that let has, with the added bonus that variables declared using const are read-only.
    //They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

    const FAV_PET = "Cats";
    FAV_PET = "Dogs";
    //The console will display an error due to reassigning the value of FAV_PET

    //Example:
    const FCC = "freeCodeCamp"; 
    let fact = "is cool!"; 
    fact = "is awesome!";
    console.log(FCC, fact); 