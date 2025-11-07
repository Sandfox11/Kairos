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

    if (Input === "9b8769a4a742959a2d0298c36fb70623f2dfacda8436237df08d8dfd5b37374c") {
      console.log("success");
      window.location.href = "main/index.html";
    } else {
      console.log("Wrong Password");
      password.value = "";
      
    }
  }
});
