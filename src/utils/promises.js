
let it_ok = true;

let desafio = (task) => {
    return new Promise((resolve,reject) => {
        if (it_ok){
            setTimeout(() => {
                resolve(task)
            },2000);
        }else{
            reject('Error')
        }
    });
}

export default desafio;