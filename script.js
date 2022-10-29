const name = document.getElementById("name");
const button = document.getElementById("button");
const address = document.getElementById("address");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const phone = document.getElementById("phone");
const picture = document.getElementById("picture");

button.addEventListener("click", () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://randomuser.me/api?nat=us,ca,fr,au,nz/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      name.textContent = `${result.results[0].name.title} ${result.results[0].name.first} ${result.results[0].name.last}`;
      address.textContent = `${result.results[0].location.street.number} ${result.results[0].location.street.name}.\n${result.results[0].location.city}, ${result.results[0].location.state},\n${result.results[0].location.country}\n${result.results[0].location.postcode}`;
      email.textContent = `${result.results[0].email}`;
      dob.textContent = `${result.results[0].dob.date} (${result.results[0].dob.age} years old)`;
      phone.textContent = `home: ${result.results[0].phone}\ncell: ${result.results[0].phone}`;
      picture.textContent = `${result.results[0].picture.large}`;
      console.log(result.results[0].email);
    })
    .catch((error) => console.log("error", error));
});

// Tip: If you can't understand the breakdown of the json file, open the preview up in separate browser & inspect element, it's much easier to understand