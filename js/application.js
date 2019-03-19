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

var timeout;
$(document).on('input','.itemQty input', function() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    calculateTotal();
  }, 1000);
});

$(document).ready(function() {
  calculateTotal();
  $(document).on('click','.remove', function(event) {
    $(this).closest('.item').remove();
    calculateTotal();
  });
  $(document).on('click','.item input', function(event) {
    calculateTotal();
  });
  $('#addStock').on('submit', function(event) {
    event.preventDefault();
    var item = $(this).children('[name=name]').val();
    var cost = $(this).children('[name=cost]').val();

    $('.shoppingCart').prepend('<div class="row item">'+'<div class="col-xs-3 itemName">' + item + '</div>' + '<div class="col-xs-3 itemCost">'+ cost +'</div>'+'<div class="col-xs-3 itemQty"><strong>QTY </strong><input type="number" value="4"></div>'+'<div class="col-xs-1"><button class="remove">remove</button></div>' + '<div class="col-xs-2 itemSubTotal">0</div>'+'</div>');
    calculateTotal();
    $(this).children('[name=name]').val('');
    $(this).children('[name=cost]').val('');
  })
});
