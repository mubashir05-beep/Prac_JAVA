// Classes:
// class Person {
//     constructor(name,age,isWorking){
//         this.name=name;
//         this.age=age;
//         this.isWorking=isWorking; 
//     }
// }
// const user = new Person('Me',12,true);
// console.log(user);

// asynchnorous_Js:

// setInterval:
// setInterval(()=>{
//     console.log('Hello World');
// },1000);

// ClearInterval:
// const myInterval =  setInterval(()=>console.log("HelloWorlds"),1000);
// clearInterval(myInterval);

// setTimeOut:
// const myInterval =  setTimeout(()=>console.log("HelloWorlds"),5000);

// clearTimeout:
// const myInterval =  setTimeout(()=>console.log("HelloWorlds"),5000);
// clearTimeout(myInterval);

// setTimeout(()=>console.log("HelloWorlds"),5000);


// const function1=()=>{
//     console.log("Function 1");
//     functionTwo();
//     function3=()=> console.log("function3"); 
//     function3();
// }
// const functionTwo=()=>{
//     setTimeout(()=>console.log('function2'),2000)
// }
// function1();

// Asynchronus Javascript is one in which 
//Some lines of code take time to return.
//These tasks are run in the background
//While the Javascript engine keeps
//Executing other lines of code.
//when the result of the asynchronus 
//Tasks gets available
//Is then used in the program

//Data Fetching 
// const fetchUser = (username) =>{
//     setTimeout(()=>{
//         return {username};
//     },2000);
// }
// const user=fetchUser('Mubashir');
// console.log(`Your name is: ${user.username}`);

//Callback Function
// const fetchUser = (username,callback) =>{
//     setTimeout(()=>{
//         console.log("Now we have the user.");
//         callback({username});
//     },2000);
// }
// const user=fetchUser('Mubashir',(user)=>{
//     console.log(`Your name is: ${user.username}`);
// });

// const fetchUser=(username,callback)=>{
//     console.log('Fetching ...')
// setTimeout(()=>{
//     console.log("Now we have the user!");
//     callback({username});
// },2000)};
// const fetchUser =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Now we have the user.");
//         resolve({username:"Mubashir"});
//     },2000);
// })
// const fetchUser =(username)=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Now we have the user.");
//         resolve({username});
//     },2000);
// });
// }

// const fetchUserPhoto = (username)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Now we have the photos for ${username}`);
//             resolve(['photo1','photo2']);
//         },2000);
//     });
// };

// const fetchPhotoDetails=(photo)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(`Now we have the photos details for : ${photo}`)
//             resolve('Details...')
//         }, 2000);
//     });
// };
// fetchUser('Mubashir')
// .then((user)=>fetchUserPhoto(user.username))
// .then((photos)=>fetchPhotoDetails(photos[0]))
// .then ((details)=>console.log(`your Photo detaisl are ${details}`))
// Not Using this => CALLBACK

// // The Callback Hell
// fetchUser('Mubashir',(user)=>{
//     console.log(`Your name is ${user.username}`);
//     fetchUserPhoto(user.username,(userphotos)=>{
//         console.log(`Your photos are : ${userphotos}`);
//         fetchPhotoDetails(userphotos[0],(details)=>{
//                console.log(`Your photo details are: ${details}`)
//     })
    
//     });
// });


//Promises
//They are objects that either return
// the successfully fetched data, pr the error.

// const fetchUser =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Now we have the user.");
//         // resolve({username:"Mubashir"});
//        // reject('User not found')
//     },2000);
// })

// fetchUser
// .then((user)=>{console.log(user.username)})
// .catch((error)=>console.log(error));





