//http://latentflip.com/loupe/?code=CnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZSgpewogICAgY29uc29sZS5sb2coJ0hleXknKQp9LDApOwpjb25zb2xlLmxvZygiZmlyc3Qgc3RyIik7Cgpjb25zb2xlLmxvZygiSGV5eSBmcm9tIGdsb2JhbCBzY29wZSIpOwoKZnVuY3Rpb24gZmlyc3RGbigpewogICAgY29uc29sZS5sb2coImhleXl5IGZyb21maXJzdCBmbiIpOwogICAgc2Vjb25kRm4oKQp9CgpmdW5jdGlvbiBzZWNvbmRGbigpewogICAgY29uc3QgbiA9NTsgICAgCiAgICB0aGlyZEZuKG4pIDsKICAgIGNvbnNvbGUubG9nKCdIZXl5eXknKQp9CgpmdW5jdGlvbiB0aGlyZEZuKG4pIHsKICAgIGNvbnNvbGUubG9nKG4pOwp9CmZpcnN0Rm4oKTsKCnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZSgpewogICAgY29uc29sZS5sb2coJ015IHNlY29uZCBzZXRUaW1lb3V0Jyk7Cn0sMCk7CgoK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D;
//https://www.jsv9000.app/
// how call stack works? find the resurces or Event loop, or Callback Queue


console.log("first str");

setTimeout(()=>{
    console.log("Heyy from setTimeout()")
},0);

console.log("Heyy from global scope");

function firstFn(){
    console.log("heyyy fromfirst fn");
}

firstFn();