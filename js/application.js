var calculateSubTotal = function (ele) {
  var itemQty = parseFloat($(ele).children('.itemQty').text());
  var itemCost = parseFloat($(ele).children('.itemCost').text());
  var itemSubTotal = itemQty * itemCost;
  $(ele).children('.itemSubTotal').html(itemSubTotal);
  return itemSubTotal;
};

var sum = function(acc, x) {
  return acc + x;
};

var calculateTotal = function (ele) {
  var itemsSubTotals = [];
  $('.item').each(function (i, ele) {
    itemSubTotal = calculateSubTotal(ele);
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
});
