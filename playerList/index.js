window.onload = init;
function init() {
    var btn = document.getElementById("addBtn");
    btn.onclick = handleClick;
    loadPlaylist();
}

function handleClick() {
    var songInput = document.getElementById("songInput");
    var songName = songInput.value;

    var ul = document.getElementById("playlist");
    var li = document.createElement("li");
    li.innerHTML = songName;
    ul.appendChild(li);
    save(songName);
}

//存储数据
function save(item){
    var playlistArray = getStoreArray("playlist");
    playlistArray.push(item);
    localStorage.setItem("playlist",JSON.stringify(playlistArray));
}

function  loadPlaylist() {
    var playlistArray;
    playlistArray = getSavedSongs;
    var ul = document.getElementById("playlist");
    if(playlistArray != null){
        for(var i=0;i<playlistArray.length;i++){
            var li = document.createElement("li");
            li.innerHTML = playlistArray[i];
            ul.appendChild(li);
        }
    }
}

function getSavedSongs() {
    return getStoreArray("playlist");
}

function  getStoreArray(key) {
    var playlistArray = localStorage.getItem(key);
    if(playlistArray == null || playlistArray == ""){
        playlistArray = new Array();
    } else{
        playlistArray = JSON.parse(playlistArray);
    }
    return playlistArray;
}