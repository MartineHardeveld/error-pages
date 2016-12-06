/*
  This key is a public access key, no need to hide it
  https://github.com/Giphy/GiphyAPI
*/
var GIPHY_KEY = 'dc6zaTOxFJmzC';

function insetBackground(payload) {
  if (!payload.data || !Array.isArray(payload.data)) return;

  var randomNumber = Math.floor(Math.random() * payload.data.length);
  var chosenImage = payload.data[randomNumber];
  var gif = chosenImage.images.original.url;
  var body = document.getElementsByTagName('body')[0];

  body.style.backgroundImage = 'url(' + gif + ')';
}

function tracking() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-88574480-1', 'auto');
  ga('send', 'pageview');
}

function init(apiKey) {
  var xhr = new XMLHttpRequest();
  var uri = '//api.giphy.com/v1/gifs/search';

  uri += '?api_key=' + apiKey;
  uri += '&q=' + 'fail';
  uri += '&rating=' + 'pg13';
  uri += '&offset=' + Math.floor(Math.random() * 100);

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE || xhr.status !== 200) return;
    insetBackground(JSON.parse(xhr.response));
  }

  xhr.open('GET', uri, true);
  xhr.send();
}

init(GIPHY_KEY);
tracking();
