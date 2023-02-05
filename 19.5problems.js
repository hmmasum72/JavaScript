// // ajke amar mon valo nei
// var count = 1;
// while (count < 39) {
//     console.log('ajke amar mon valo nei')
//     count++
// }

// // while loop kivabe kaj kore
// var i = 1;
// while (i <= 10){
//     console.log('while loop')
//     i++
// }

// // for loop kivabe kaj kore
// for (i = 1; i < 2; i++){
//     console.log('for loop')
// }

// // while loop er moddhe loop variable change na korle loop choltei thake

// // 58 to 98
// for(i = 58; i <= 98; i++){
//     console.log(i)
// }

// // 412 to 456
// var i = 412;
// while ( i <= 456 ){
//     console.log(i)
//     i +=2
// }

// // 581 to 623
// for(i = 581; i < 623; i += 2){
//     console.log(i)
// }

// // parthokko skip

// var phero =['HTML', 'CSS', 'Bootstrap', 'Tailwind'];
// for(i = 0 ; i < phero.length; i++){
//     var topic = phero[i];
//     console.log(topic)
// }

// // 34 num
// var phoneModel =['nokia', 'mi', 'micromax', 'simphony'];
// let i = 0;
// while ( i < phoneModel.length){
//     console.log(phoneModel[i]);
//     i++
// }

// // break
// for (i = 30; i <= 86; i++){
//     console.log(i)
//     if(i > 44){
//         break;
//     }
// }

var books = [120, 170, 199, 651, 220, 130, 340, 180];

for ( i = 0; i < 8; i++){
    var book = books[i];
    if(book > 200){
        break
    }
    console.log(book);
}