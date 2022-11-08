

// let parent = document.querySelector('.d1')
// const x =new XMLHttpRequest()
// x.open('Get', 'https://reqres.in/api/users?page=2')
// x.onload = ()=>{
//     console.log(x.response);
//     if(x.readyState==4 && x.status==200){
//        let users = JSON.parse(x.response)
//        users.data.forEach(el=>{
//          let hr = document.createElement("h2")
//          hr.innerHTML=el.first_name
//          parent.append(hr)
//        } )
//     }
// }
// x.send()



// let parent1 = document.querySelector('.d2')
// const y =new XMLHttpRequest()
// y.open('Get', 'https://jsonplaceholder.typicode.com/posts')

// y.onload = ()=>{
//     console.log(y.response);
//     if(y.readyState==4 && y.status==200){
//        let users = JSON.parse(y.response)
//        console.log(users);
//        users.forEach(el=>{
//          let h3 = document.createElement("h3")
//          h3.innerHTML=el.title
//          parent1.append(h3)
//        })
//     }
// }
// y.send()


// let a =3 
// let promise = new Promise((resolve,rejected)=>{
//   if(a>1 ){
//     resolve('es kaarveci')
//   }
//   rejected('chkatarveci')
// })
// //  //  console.log(promise);



// promise
// .then(i=>console.log('es katarveci'))
// .catch(err=>console.log('es chkatarveci'))




// let arr = [9809,98]
// let newArr = arr.map(i=>i*i)
// console.log(newArr);  // // kta 96216481,9604
// let filNewArr = newArr.filter(i=>i%2===0)
// console.log(filNewArr); // // kta 9604
// let redFillNewArr = filNewArr.reduce((sum,item)=>sum+item)
// console.log(redFillNewArr);



// let arr = [9809,98]
// let newArr = arr
// .map(i=>i*i) // // kta [9621481, 9604]
// .filter(i=>i%2===0) // // kta [9604]
// .reduce((sum,item)=>sum + item) // // kta 9604 qani vor ayl gumarvox chka




// let promise = new Promise((resolve,rejected)=>{
//   resolve([89,36,12]);
//   rejected('es chkatarveci')
// })
// promise
// .then(i=>i)  // // [89,36,12]
// .then(item=>item.map(i=>console.log(i*i)))





let parent = document.querySelector('.d2')

 fetch('https://jsonplaceholder.typicode.com/todos') 
.then(todos=>todos.json())
.then(items=>items.forEach(todo=>{
  let div = document.createElement('div');
  div.style.display='flex'
  div.dataset.id = todo.id
  div.innerHTML=`<input type="checkbox" ${todo.completed && "checked"}><p>${todo.title}</p>`;
  parent.append(div)
}))
.catch(err=>console.error(err))