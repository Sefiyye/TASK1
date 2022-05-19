fetch("https://jsonplaceholder.typicode.com/photos",{
    method: "GET",
})





.then((resp) => resp.json())
.then((datas) => {
  
  

  let container = document.querySelector(".container");
  let row = document.createElement("div");
  row.className = "row justify-content-between mt-5";

  for (let i = 0; i < datas.length-4952; i++) {
      
    let card = document.createElement("div");
    let forimg = document.createElement("div")
    let images = document.createElement("img")
    let thumbnail = document.createElement("img")
    let card_body = document.createElement("div");
    let title = document.createElement("h5");
    let text = document.createElement("p");
    let body_link = document.createElement("div")
    let link = document.createElement("a");


    card.className = "card mt-5 ";
    card.style.width = "18rem";
    forimg.className = "tural d-flex"
    images.className = "card-img-top mt-2"
    images.style.width = "150px"
    thumbnail.className = "card-thm-top ms-3"
    thumbnail.style.width = "100px"
    card_body.className = "card-body";
    title.className = "card-title";
    text.className = "card-text";
    body_link.className = "card-body-link"
    link.className = "card-link";
    link.innerText = "If you show datas click here"

    images.src = datas[i].url
    thumbnail.src = datas[i].thumbnailUrl
    title.innerText = datas[i].id;
    text.innerText = datas[i].title;
    link.href = `index.html?params=${datas[i].id}`

    forimg.appendChild(images);
    forimg.appendChild(thumbnail);
    card_body.appendChild(title);
    card_body.appendChild(text);
    body_link.appendChild(link);

    card.appendChild(forimg)
    card.appendChild(card_body);
    card.appendChild(body_link);
    row.appendChild(card);

    link.addEventListener("click",function(){

      localStorage.setItem("url",datas[i].url)
      localStorage.setItem("thumbnail",datas[i].thumbnailUrl)
      localStorage.setItem("id",datas[i].id)
      localStorage.setItem("title",datas[i].title)

    })
  }
  container.appendChild(row);
  console.log(container);
});