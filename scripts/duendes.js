self.onmessage = function (e) {
    let x = e.data;
    if (x <= 2){
        x++;
    }
    self.postMessage(x);
}
