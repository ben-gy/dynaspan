﻿// MIT LICENSE
// Copyright (c) 2014 Daniel P. Clark
(function($){
  $.fn.dynaspan = function(){};

  $.fn.dynaspan.upLast = function(uniq_id_ref){
    $('#dyna_span_field_val_' + uniq_id_ref).val($('#last_dyna_span_val_' + uniq_id_ref).val());
  };

  $.fn.dynaspan.upShow = function(uniq_id_ref){
    $('#dyna_span_div' + uniq_id_ref).show().find('.dyna-span-input').focus();
    $('#dyna_span_span' + uniq_id_ref).hide();
  };

  $.fn.dynaspan.upHide = function(uniq_id_ref){
    var field_val = $('#dyna_span_field_val_' + uniq_id_ref).val();
    $('#dyna_span_div' + uniq_id_ref + ' > form').trigger('submit.rails');
    $('#last_dyna_span_val_' + uniq_id_ref).val(field_val);
    $('#dyna_span_span' + uniq_id_ref).show().html(field_val);
    $('#dyna_span_div' + uniq_id_ref).hide();
    if (field_val.length == 0){
      $("#dyna_span_block" + uniq_id_ref).removeClass("ds-content-present")
    } else {
      $("#dyna_span_block" + uniq_id_ref).addClass("ds-content-present")
    }
  };
})(jQuery);