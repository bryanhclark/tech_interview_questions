// async function
async function fetchAsync() {
  // await response of fetch call
  let response = await fetch('http://s3.amazonaws.com/nomadhealth/youtube.json');
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}


console.log(fetchAsync())