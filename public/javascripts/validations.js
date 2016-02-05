module.exports = {
  isNotBlank: function(input) {
    if(!input.trim() == ''){
      return '';
    } else {
      return'Cannot leave blank'
    }
  }
}
