var extLink = $('col2-body').filter(function() { 
    return this.hostname && this.hostname !== location.hostname
  });
  extLink.each(function(){
    $(this).attr('target', '_blank');
  });