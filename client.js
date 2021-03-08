function render({ json = {}, status }) {
  const JSONScreen = document.querySelector('.JSON-screen');
  JSONScreen.innerHTML = JSON.stringify(json, null, 2);
  const statusScreen = document.querySelector('.status-screen');
  statusScreen.innerHTML = JSON.stringify(status, null, 2);
}

async function getHeader() {
  const res = await fetch('http://localhost:3000/get-header');
  const json = await res.json();
  render({ status: res.status, json });
}

async function get200() {
  const res = await fetch('http://localhost:3000/200');
  const json = await res.json();
  render({ status: res.status, json });
}

async function get301() {
  const res = await fetch('http://localhost:3000/301');
  const json = await res.json();
  render({ status: res.status, json });
}

async function get404() {
  const res = await fetch('http://localhost:3000/404');
  if (res.status === 404) render({ status: res.status });
}

async function post200() {
  const requestBody = {
    user: 'john',
  };

  const res = await fetch('http://localhost:3000/200', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(requestBody),
  });
  const json = await res.json();
  render({ status: res.status, json });
}

const get200Button = document.getElementById('get-200-button');
get200Button.addEventListener('click', get200);
const getHeaderButton = document.getElementById('get-header-button');
getHeaderButton.addEventListener('click', getHeader);
const get301Button = document.getElementById('get-301-button');
get301Button.addEventListener('click', get301);
const get404Button = document.getElementById('get-404-button');
get404Button.addEventListener('click', get404);
const post200Button = document.getElementById('post-200-button');
post200Button.addEventListener('click', post200);
