var baseUrl ="http://result.eolinker.com/4pRhPgBe1911deea5ab4b01704bbfe0b97948d26eb2d31d?uri=";
function http({url,type="get",dataType="json",data={},success}){
    $.ajax({
        url:baseUrl+url,
        type,
        dataType,
        data,
        success:function(res){
            success(res);
        }
    })
}