var x = "Some string";
var y = x.charAt(2);
var Justin = (function () {
    function Justin(hairLength, bearQuality, nickname) {
        this.hairLength = hairLength;
        this.bearQuality = bearQuality;
        this.nickname = nickname;
        this.awesmeness = 1000;
    }
    return Justin;
})();
var ourJustin = new Justin(10, 2, "Sweet Cheeks");
