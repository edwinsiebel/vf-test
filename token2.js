const tokenItems = Object.fromEntries(
  Object.keys(localStorage)
    .filter(key => key.includes("Token"))
    .map(key => [key, localStorage.getItem(key)])
);

console.log(tokenItems);

alert(JSON.stringify(tokenItems));
