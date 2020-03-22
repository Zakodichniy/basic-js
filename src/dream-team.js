module.exports = function createDreamTeam(members) {
  let teamName = "";
  if (!Array.isArray(members)) {
    return false;
  }
  members.filter(function(item){
    return (typeof item === "string");
  }).sort(function(a,b){
    a = a.trim().toUpperCase();
    b = b.trim().toUpperCase();
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }).forEach(function(name){
    if (typeof name === "string") {

      teamName += name.trim()[0];
    } else {
      return false};
  })
  return teamName.toUpperCase();
};