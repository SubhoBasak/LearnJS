/*

TOPICS:
1.Callbacks
2.SetTimeout
3.SetInterval
4.async/sync concepts
5.promises
6.promises handling using them/catch
7.promises handling using  async/await

*/

// 1.Callbacks
// A function calling another function by getting the function in its parameters
function foo() {
  console.log("foo");
}
function bar(cb) {
  console.log("bar");
  cb();
}
bar(foo);

// understanding callbacks through setTimeout and setInterval
// 2.setTimeout(callback,time(in ms))
setTimeout(() => {
  console.log("I will get printed after 5 seconds only!");
}, 5000);

// 3.setInterval(callback,time(in ms))
setInterval(() => {
  console.log("I will get printed repeatedly after a interval of 2 seconds!");
}, 2000);

/*
4.sync/async
in synchronous js  a operation takes place one at a after the completion of previous task
in asynchronous js  more than one operation can take place simultaneously without having to wait for previous task to be completed
*/

// 5.Promises
// promise creation
// let obj1 = new Promise(callback(resolve,reject))
let obj1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("I will give my response after 5 sec!"), 5000);
});

// a) promise handling using then and catch
obj1
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });

// b) promise handling using async/await
async function handler() {
  const response = await obj1;
  console.log(response);
}

handler();
