let fetchDataFromDatabase=new Promise((resolve,reject)=>
    {

        const data=true;

        if(data==true)
        {
            resolve("Data fetched successfully!");

        }
        else {
            reject("Data not found!");
        }

}
)
fetchDataFromDatabase
.then(message=>{

    console.log(message);
})

.catch(error=>
    {
        console.log(error);
    })