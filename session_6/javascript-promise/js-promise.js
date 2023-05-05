// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://cat-fact.herokuapp.com/facts/random
// https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2
// https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// https://alicemoretti.medium.com/xmlhttprequest-callbacks-and-promises-257a4e63fe9a

// create a XMLHttpRequest and demonstrate the synchronous behavior

// URLSearchParams

const params = { animal_type: "horse", amount: 2 };
const baseUrl = "https://cat-fact.herokuapp.com/facts";
let cats;

function fetchData(method, url, params, cb) {
    const reqUrl = params ? `${url}?${new URLSearchParams(Object.entries(params))}` : url;
    const request = new XMLHttpRequest();
    request.open(method, reqUrl);
    request.responseType = 'json';
    request.onload = () => {
        if (request.status === 200) {
            cb(request.response);
        } else {
            console.log("something went wrong")
        }
    }

    request.onerror = (e) => {
        console.log(e)
    }

    request.send();
}

fetchData('GET', baseUrl, undefined, (data) => {
    console.log(data);
    const id = data[0]._id;
    fetchData('GET', `${baseUrl}/${id}`, undefined, (data) => {
        console.log(data);
        fetchData('GET', `${baseUrl}/random`, params, (data) => {
            console.log(data);
        })
    })
});

// create a promise example with setTimeout()

const myPromise = new Promise((resolve, reject) => {
    const num = Math.round(Math.random() * 10);
    setTimeout(() => {
        if (num < 5) {
            resolve(`The promise was resolved with number ${num}`);
        } else {
            reject(`Something was wrong with number ${num}`)
        }
    }, 0)
})

myPromise
    .then((data) => console.log(data))
    .catch((e) => console.log(`The error is : => ${e}`))


// create a promise with real request

function fetchDataWithPromise(method, url, params ) {
    const reqUrl = params ? `${url}?${new URLSearchParams(Object.entries(params))}` : url;
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method, reqUrl);
        request.responseType = 'json';
        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject("something went wrong");
            }
        }

        request.onerror = (e) => {
            reject(e)
        }

        request.send();
    })
}


fetchDataWithPromise('GET', baseUrl)
.then(data=>{
    console.log(data, 'fetchDataWithPromise');
    const id_ = data[0]._id;
    return fetchDataWithPromise('GET', `${baseUrl}/${id_}`);
})
.then(data=>{
    console.log(data, 'fetchDataWithPromise');
    return fetchDataWithPromise('GET', `${baseUrl}/random`, params);
})
.then(data=>{
    console.log(data, 'fetchDataWithPromise');
})
.catch(e=>console.log(e))

// async/await

async function getData() {
    try {
        console.log('1');
        const alldata = await fetchDataWithPromise('GET', baseUrl);
        console.log('2');
        console.log(alldata);
        const dataById = await fetchDataWithPromise('GET', `${baseUrl}/${alldata[0]._id}`);
        console.log('3');
        console.log(dataById);
        const dataRandom = await fetchDataWithPromise('GET', `${baseUrl}/random`, params);
        console.log('4');
        console.log(dataRandom);
    } catch (error) {
        console.log(error);
    }
}

//getData();

async function getDataWithJsFetch() {
try {
    const responseAll = await fetch(baseUrl, {method:'GET'});
    const alldata_ = await responseAll.json();
    console.log(`${baseUrl}/${alldata_[0]._id}`)
    const resnonseById = await fetch(`${baseUrl}/${alldata_[0]._id}`,{method:'GET'});
    const dataById_ = await resnonseById.json();
    console.log(alldata_, "All data");
    console.log(dataById_, "Data by ID");
} catch (error) {
  console.log(error)  
}
}

getDataWithJsFetch();





