const jsonPhotos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    // console.log(data);

   data.forEach((myPhotos) => {
    console.log(myPhotos);
    
   });
}

jsonPhotos()