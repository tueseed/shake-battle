
<!DOCTYPE html>
<html dir="ltr" lang="en_US">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>LINE Login</title>
        <link rel="icon" href="https://line.me/favicon.ico">
        <link rel="apple-touch-icon-precomposed" href="https://line.me/apple-touch-icon-precomposed.png">
        <script>/* analytics */
(function(g,d){
  var v='release/stable';
  g._trmq=[];g._trm=function(){g._trmq.push(arguments)};
  g.onerror=function(m,f,l,c){g._trm('send','exception',m,f,l,c)};
  var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';
  var s=d.createElement('script');s.async=1;
  s.src=h+'/n/_4/torimochi.js/public/v1/'+v+'/min/torimochi.js';
  var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
})(window, document);

_trm('performance', { rate: 0.05 });
_trm('enable', { productKey: "line-web-login-real" });
/* /analytics */</script>
        <script>
  window.currentLang= "en_US";
  window.lang = {
	"loginv21.button.addFriend.submit": "Add friend",
	"loginv21.button.botauth.addedfriend": "Already added",
	"loginv21.button.botauth.addfriend": "Add friend",
	"loginv21.button.botauth.unblock": "Unblock",
	"loginv21.button.cancel": "Cancel",
	"loginv21.button.captcha.refresh": "Refresh CAPTCHA",
	"loginv21.button.emaillogin.modal.forgetpw": "Forgot your password?",
	"loginv21.button.emaillogin.modal.waytoregist": "How to register an email address",
	"loginv21.button.emaillogin.openmodal": "Forgot your email or password?",
	"loginv21.button.emaillogin.qrcodelogin": "QR code login",
	"loginv21.button.general.goback": "Back",
	"loginv21.button.general.login": "Log in",
	"loginv21.button.general.tryagainlogin": "Login screen",
	"loginv21.button.header.download": "Download",
	"loginv21.button.qrcode.emaillogin": "Log in with email",
	"loginv21.button.qrcode.openmodal": "How to scan QR codes",
	"loginv21.button.qrcode.refresh": "Generate new QR code",
	"loginv21.button.registmail": "Email registration",
	"loginv21.button.userConsent.allow": "Allow",
	"loginv21.button.userConsent.allowed": "Authorized",
	"loginv21.button.userConsent.submit": "Allow",
	"loginv21.commonerror.js.desc": "JavaScript is disabled on your browser.",
	"loginv21.commonerror.js.instruction": "Please enable JavaScript to use this site.",
	"loginv21.commonerror.js.title": "JavaScript error",
	"loginv21.err.emaillogin.general": "At least one of the fields above contains an error.",
	"loginv21.err.pincode.temporary": "Unable to log in now.
            <br />Please try again later.",
	"loginv21.err.pincode.timeout": "The verification code expired.
            <br>Please try again.
            <br>",
	"loginv21.err.qrcode.expiration": "Your QR code has expired.
            <br>Please try again.",
	"loginv21.input.captcha.placeholder": "Enter the text in the image",
	"loginv21.input.email.placeholder": "Email address",
	"loginv21.input.password.placeholder": "Password",
	"loginv21.meta.title": "LINE Login",
	"loginv21.text.authzlist.require": "(Required)",
	"loginv21.text.email.modal.description": "You can check your registered email address on the Android or iOS version of LINE by going to the Friends tab, tapping the {0} icon, and then tapping Account.",
	"loginv21.text.emaillogin.modal.note.1": "If you\'ve already registered an email address",
	"loginv21.text.emaillogin.modal.note.2": "If you haven\'t registered an email address yet",
	"loginv21.text.emaillogin.modal.title": "Checking your email address and password",
	"loginv21.text.emaillogin.new": "NEW",
	"loginv21.text.emaillogin.note.1": "or try another login method",
	"loginv21.text.footer.about.line": "About LINE",
	"loginv21.text.footer.about.rules": "Privacy Policy",
	"loginv21.text.footer.about.terms": "Terms and Conditions of Use",
	"loginv21.text.footer.copyright": "LINE Corporation",
	"loginv21.text.general.line": "LINE",
	"loginv21.text.header.appstore": "App Store",
	"loginv21.text.header.description": "Download from {0}",
	"loginv21.text.header.playstore": "Play Store",
	"loginv21.text.instruction": "You must register an email address to authorize this service.",
	"loginv21.text.pincode.description": "This verification code helps keep your LINE account secure.",
	"loginv21.text.pincode.instruction": "Enter this verification code into LINE
            <br>on your Android or iOS device.",
	"loginv21.text.pincode.otherway": "Log in to another account",
	"loginv21.text.pincode.remainingtime": "Time remaining",
	"loginv21.text.pincode.title": "Your verification code",
	"loginv21.text.qrcode.instruction": "Open the QR code reader on the Android or iOS version of LINE and scan this QR code.",
	"loginv21.text.qrcode.modal.instruction.1": "Open the LINE app.",
	"loginv21.text.qrcode.modal.instruction.2": "Go to the Friends tab, tap the {0} icon, and then tap \"QR code.\"",
	"loginv21.text.qrcode.modal.instruction.3": "Scan the QR code displayed on the desktop version of LINE.",
	"loginv21.text.qrcode.modal.instruction.4": "Tap \"Log in.\"",
	"loginv21.text.qrcode.modal.title": "How to scan QR codes",
	"loginv21.text.qrcode.title": "QR code login",
	"loginv21.text.title": "You haven\'t registered an email address yet.",
	"loginv21.text.userConsent.alreadyauthed": "Currently authorized permissions",
	"loginv21.text.userConsent.authnewly": "Newly Requested Permissions",
	"loginv21.text.userConsent.notice": "Important",
	"loginv21.text.userConsent.request": "This service is requesting the following permissions:",
	"loginv21.text.userConsent.title": "Grant permission?",
	"loginv21.text.warning.caseother": "For non-Safari users",
	"loginv21.text.warning.casesafari": "For Safari users",
	"loginv21.text.warning.desc": "Unable to log in automatically. Please try one of the following:",
	"loginv21.text.warning.instruction.other.1": "If attempting to open a link from Twitter or another app, copy the link and open it directly in your browser.",
	"loginv21.text.warning.instruction.other.2": "If you\'re using Private Browsing, try opening a Safari window without Private Browsing enabled. Additionally, you can try allowing cookies if they\'re currently blocked.",
	"loginv21.text.warning.instruction.safari.1": "If opening a link from Twitter or another app, press and hold the link, then select \"Open in Safari.\"",
	"loginv21.text.warning.instruction.safari.2": "If you\'re using Private Browsing, try opening a Safari window without Private Browsing enabled. Additionally, you can try allowing cookies if they\'re currently blocked.",
	"loginv21.text.warning.instruction.safari.3": "You may also be able to log in by tapping \"Log in\" below (depending on your browser version and settings).",
	"loginv21.text.warning.link.other": "Non-Safari users tap here",
	"loginv21.text.warning.link.safari": "Safari users tap here",
    "blank": " "
  };
  
        </script>
        <link href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/css/chunk-common.css" rel="preload" as="style">
        <link href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/js/chunk-common.js" rel="preload" as="script">
        <link href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/js/chunk-vendors.js" rel="preload" as="script">
        <link href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/css/index.css" rel="preload" as="style">
        <link href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/js/index.js" rel="preload" as="script">
        <link href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/css/chunk-common.css" rel="stylesheet">
        <link href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/css/index.css" rel="stylesheet">
        <noscript>
            <link rel="stylesheet" href="https://static.line-scdn.net/line_web_login/16a107f2880/dist/css/chunk-common.css">
        </noscript>
    </head>
    <body ontouchstart="">
        <noscript>
            <div class="LyWrap">
                <!--CONTENTS-AREA-->
                <div class="LyContents" role="main">
                    <div class="lyContentsInner">
                        <div class="MdBox01">
                            <section class="mdBox01Inner MdLYR03Error">
                                <div class="MdLogo01 mdLogo01P01">
                                    <h1 class="mdLogo01Img">LINE</h1>
                                </div>
                                <h2 class="mdLYR03Title mdMN10Title">
                                    <span class="mdLYR03Icon MdIco01Alert">alert</span>
                                    <span>JavaScript error</span>
                                </h2>
                                <p class="mdLYR03Desc mdMN10Desc">
              JavaScript is disabled on your browser.
                                    <br />
Please enable JavaScript to use this site.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </noscript>
        <div id="__layout">
            <div class="LyBody" id="app">
                <app :channel-id="1564476560"
         :is-error="false"
         :is-captcha="false"
         verifier=""
         captcha-url="/dialog/captcha/Lq7SViHrmmrwWkv4wfgdSjamJL3eQg8vesiV7MIw98o"
         line-rsa-url="/authct/v1/keys/line"
         naver-rsa-url="/authct/v1/keys/naver"
         pincode-url="/pincode"
         open-authentication-session-url="/dialog/v2/autht/session"
         probe-id-provider-url="/dialog/v2/autht/idProvider"
         issue-connect-key-url="/dialog/v2/autht/connect/key"
         qr-code-url="/qrlogin/v1/session"
         wait-qr-code-verification-complete-url="/qrlogin/v1/qr/wait"
         wait-pin-code-verification-complete-url="/qrlogin/v1/pin/wait"
         :permitted-naver-login="true"
         :using-vae-logic="false"
         login-retry-page-url="/oauth2/v2.1/noauto-login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dprofile%26response_type%3Dcode%26state%3D12345%26redirect_uri%3Dhttps%253A%252F%252Fshake-battle.herokuapp.com%252F%26client_id%3D1564476560&loginChannelId=1564476560&__csrf=V0atHK0hiSmovGVsvDs4uV"
         authorize-page-url="/oauth2/v2.1/authenticate"
         
         
    >
                    <template slot="serverside_field">
                        <input type="hidden" name="__csrf" id="__csrf" value="V0atHK0hiSmovGVsvDs4uV">
                        <input type="hidden" name="loginChannelId" value="1564476560">
                        <input type="hidden" name="returnUri" value="/oauth2/v2.1/authorize/consent?scope=profile&amp;response_type=code&amp;state=12345&amp;redirect_uri=https%3A%2F%2Fshake-battle.herokuapp.com%2F&amp;client_id=1564476560">
                        <input type="hidden" name="lang" value="en_US">
                        <input type="hidden" name="state" value="">
                        <input type="hidden" name="displayType" value="b">
                        <input type="hidden" name="captchaKey" value="Lq7SViHrmmrwWkv4wfgdSjamJL3eQg8vesiV7MIw98o">
      
                    </template>
                    <template slot="serverside_redirect_query">
                        <input type="hidden" name="__csrf" id="__csrf" value="V0atHK0hiSmovGVsvDs4uV">
                        <input type="hidden" name="loginChannelId" value="1564476560">
                        <input type="hidden" name="returnUri" value="/oauth2/v2.1/authorize/consent?scope=profile&amp;response_type=code&amp;state=12345&amp;redirect_uri=https%3A%2F%2Fshake-battle.herokuapp.com%2F&amp;client_id=1564476560">
      
                    </template>
                </app>
            </div>
            <script src="https://static.line-scdn.net/line_web_login/16a107f2880/dist/lc_common.js"></script>
        </div>
        <script src="https://static.line-scdn.net/line_web_login/16a107f2880/dist/js/chunk-vendors.js"></script>
        <script src="https://static.line-scdn.net/line_web_login/16a107f2880/dist/js/chunk-common.js"></script>
        <script src="https://static.line-scdn.net/line_web_login/16a107f2880/dist/js/index.js"></script>
    </body>
</html>