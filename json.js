const jsonPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  // console.log(data);

  const parent = document.getElementById("card-container");
  data.slice(400, 418).forEach((myPhotos) => {
    console.log(myPhotos);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src="${myPhotos?.url}" alt="Nop" /></figure>
         <div class="card-body">
            <h2>ID: ${myPhotos?.id}</h2>
            <p class="card-title">${myPhotos?.title.slice(0, 35)}</p>
         </div>
    </div>
    `;
    parent.appendChild(div);
  });
};

jsonPhotos();
