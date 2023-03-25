self.onmessage = function (e) {
    let x = e.data;
    if (x <= 6){
        x++;
    }
    self.postMessage(x);
}
