var recipes = new Object();
function updateObjectWithKeyAndValue(object, key, value) {
  var recipes2 = Object.assign({key: value}, object);
  return recipes2;
}
