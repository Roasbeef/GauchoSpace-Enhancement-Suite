// $$('input:-webkit-autofill')

if (($('input:-webkit-autofill').length > 0) && ($('span[class="error"]').length == 0)){
    $("form:first[method='post']").submit();
}

