
console.log("JS loaded");

let password = document.getElementById('Pass');

async function hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

password.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log("Input: ", password.value);
    const Input = await hash(password.value)
    console.log("Hash: ", Input);

    if (Input === "49f0bce976e06e2bd471502a26052377dc9298cb339dade9ed82866a2069745e") {
      console.log("success");
      window.location.href = "HTML/main/indox.html";
    } else if (Input === "f2d83ceffc56b21f412fbbc4453607a91b715aa875fe0e4c53f5f3445479a322") {
      console.log("success");
      window.location.href = "HTML/Console/index.html";
    } else {
      console.log("Wrong Password");
      password.value = "";

    }
  }
});
