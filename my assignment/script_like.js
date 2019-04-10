function likeVideo(){

 if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("likebutton").innerHTML = localStorage.clickcount;
  }


}
function unlikeVideo(){

 if (typeof(Storage) !== "undefined") {
    if (localStorage.reducecount) {
      localStorage.reducecount = Number(localStorage.reducecount)+1;
    } else {
      localStorage.reducecount = 1;
    }
    document.getElementById("unlikebutton").innerHTML = localStorage.reducecount;
  }
}