// use local storage to manage cart data
const addToDb = id => {
    let exTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('ex-time');
    if (storedTime) {
        exTime = JSON.parse(storedTime);
    }

    // add quantity
    const quantity = exTime[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        exTime[id] = newQuantity;
    }
    else {
        exTime[id] = 1;
    }
    localStorage.setItem('ex-time', JSON.stringify(exTime));
}

const getStoredTime = () => {

    let exTime = {};
    const storedTime = localStorage.getItem('ex-time');
    if (storedTime) {
        exTime = JSON.parse(storedTime);
    }
    return exTime;
}

export {
    addToDb,
    getStoredTime,
}