// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// ################################### switch case ########################################
// it is a way to compare the value of the variable with multiple values


// ----------------------jaha pr match hoga uske baad ka sara code execute hoga agr break nahi hoga to------------------------
                        //   except the default case
// ----------------------break ke baad ka code nahi chalega--------------------------------

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}