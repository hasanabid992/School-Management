///-- School Management System ----////
//--Arrow Function in EcmaScript --///
record = () => {

    // Variable Initialization Using EcmaScript ---///
    let name = prompt("Enter Your Name");
    let fathername= prompt("Enter Your Father Name");
    let roll_no=+prompt("Enter Your Roll no");
    let Class=+prompt("Enter your class");
    let lastclass =+prompt("Enter your last class");

      ///-- Print The Results of Above Inputs ---////  
    console.log("Your name is: "+name);
    console.log("Your Father Name is "+fathername);
    console.log("Your roll no is :" +roll_no );
    console.log("Your current class is :"+Class);
    console.log("Your last class is :"+lastclass);

}

///-calling Function---///
 record();

console.log (" ")

//--Arrow Function in EcmaScript --///
admission = () => {
    // Variable Initialization Using EcmaScript ---///
     let admissionfee = 1000;
     let monthlyfee = 800;
     let extracirculum_fee = 1200;
     let gamefee = 1500;

     ///-- Print The Results of Above Inputs ---////  
     console.log("Admission is "+admissionfee);
     console.log("Monthly fee "+monthlyfee);
     console.log("Extracirculum activity fee "+extracirculum_fee);
     console.log("Game fee "+gamefee);


 }
 
///-calling Function---///
admission();

console.log (" ");

//--Arrow Function in EcmaScript --///
result_finder = () => {

    // Variable Initialization Using EcmaScript ---///
    let physics = +prompt("Enter Your Physics marks");
    let English = +prompt("Enter Your English marks");

    if (physics < 25) {
        console.log("Your Number is "+ physics + " Status = Failed in Physics");
    }
    else {
        console.log("Your Number is "+ physics + " Status = Passed in Physics")
    }
    if (English < 25) {
        console.log("Your Number is "+ English + " Status = Failed in English");
    }
    else {
        console.log("Your Number is "+ English +  " Status = Passed in English")
    }
} 
///-calling Function---///
result_finder();