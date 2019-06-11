Array.prototype.getShortMessage = function() {
return this.filter((shorty)=>shorty.length < 50);
}
