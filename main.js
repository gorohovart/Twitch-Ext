function setUpContextMenus() {
  chrome.contextMenus.create({
    id : "VLCTwitch",
    title : "Open in VLC",
    type : "normal",
    contexts : ["link"],
    targetUrlPatterns: ["*://www.twitch.tv/*"]
  });
}


chrome.runtime.onInstalled.addListener(function() {
  // When the app gets installed, set up the context menus
  setUpContextMenus();
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "VLCTwitch") {
    getClickHandler(info);
  }
});

function httpPOST(data)
{
    var client = new XMLHttpRequest();
    var url = "http://localhost:10000/";
    var body = 'url = ' + data

    client.open("POST", url, true);
    client.setRequestHeader('Content-Type', 'text-plain');


    client.send(body);


    client.onreadystatechange = function() { // (3)
    if (client.readyState != 4) return;
  } 

}


function getClickHandler(info) {
    var url;
    url = info.linkUrl;
    httpPOST(url);
}
