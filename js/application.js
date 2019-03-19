var calculateSubTotal = function (ele) {
  var itemCost = parseFloat($(ele).children('.itemCost').text());
  var itemQty = parseFloat($(ele).find('.itemQty input').val());
  var itemSubTotal = itemQty * itemCost;
  $(ele).children('.itemSubTotal').html(itemSubTotal);
  return itemSubTotal;
};

var sum = function(acc, x) {
  return acc + x;
};

var calculateTotal = function() {
  var itemsSubTotals = [];
  $('.item').each(function (i, ele) {
    var itemSubTotal = calculateSubTotal(ele);
    itemsSubTotals.push(itemSubTotal);
  });
  var totalPrice = itemsSubTotals.reduce(sum);
  $('.totalPrice').html(totalPrice);
};

$(document).ready(function() {
  calculateTotal();
  $('.remove').on('click', function(event) {
    $(this).closest('.item').remove();
    calculateTotal();
  });
  $('.item input').on('click', function(event) {
    calculateTotal();
  });
});
