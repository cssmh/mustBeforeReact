const jsonPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  // console.log(data);

  const parent = document.getElementById("card-container");
  data.slice(0, 9).forEach((myPhotos) => {
    console.log(myPhotos);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
    parent.appendChild(div);
  });
};

jsonPhotos();
