
var code = $.getUrlParam('code') || '';
var localUrl = window.location.href;
var encodeUrl = encodeURIComponent(localUrl);

getInitData();
function getInitData() {
    if(code ==''){
        var na = window.navigator.userAgent.toLowerCase();
        if (na.match(/MicroMessenger/i) == 'micromessenger') {
            var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + wxAppId +  '&redirect_uri=' + encodeUrl + '&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect';
            location.href = url;
        }else{
            alert("请在微信客户端打开");
        }
    }else{
        $.ajax({
            url: 'https://h5.hdiandian.com/wxbackstage/wechat/gzh/login/'+code,
            type: 'GET',
            data: '',
            dataType: "json",
            contentType: 'application/json;charset=UTF-8',
            async: false,
            success: function (res) {
                if(res.code == 0){
                    localStorage.setItem('openId',res.data.openId);
                    localStorage.setItem('id',res.data.id);
                }
            }
        });
    }
}
