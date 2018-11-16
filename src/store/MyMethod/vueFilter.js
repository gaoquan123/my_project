import Vue from 'vue'
// 利率格式
Vue.filter('formatRate', function(value, isRound) {
    if (!isRound) {
        return (value * 100).toFixed(2);
    } else {
        return Math.round(value * 100);
    }
});
//title格式化 字符串截取，默认截取18位
Vue.filter('formatTitle', function(value, maxwidth) {
   maxwidth = maxwidth || 18;
   value = value || "";
   if (value.length > 0 && value.length > maxwidth) {
       value = value.substring(0, maxwidth) + '...';
   }
   return value;
});


// svg首页利率
const computedProgressRate = function(currentInvestmentAmount, totalAmount, status) {
    if (status == 'FUNDED' || status == 'SIGNED' || status == 'PORTION_FUNDED') {
        return 100;
    }
    if (totalAmount == null || totalAmount == 0 || totalAmount == "") {
        return 100;
    }
    var rate = currentInvestmentAmount * 100 / totalAmount;
    if (rate > 0 && rate <= 1) {
        rate = 1;
    } else if (rate >= 99.5 && rate < 100) {
        rate = 99;
    }
    return parseInt(Math.round(rate));
};
Vue.filter('formatProgressRate', function(currentInvestmentAmount, totalAmount, status) {
    return computedProgressRate(currentInvestmentAmount, totalAmount, status);
});

Vue.filter('formatProgressBar', function(value, total, full) {
    if (full == 'PORTION_FUNDED' || full == 'SIGNED') {
        return 1 * 190;
    }
    if (total == 0 || total == null || total == "") {
        return 1 * 190;
    }
    var v = value / total;
    var al = value * 100 / total;
    if (al > 0 && al <= 1) {
        v = 0.01;
    }
    if (al > 99 && al < 100) {
        v = 0.95;
    }
    return v * 190;
});
