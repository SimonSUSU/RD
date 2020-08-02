
var PageName = '常规设置';
var PageId = 'pa0ddeacbbb7b46f39e9e0d6f43caf8b8'
var PageUrl = '常规设置.html'
document.title = '常规设置';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');

var u45 = document.getElementById('u45');

var u51 = document.getElementById('u51');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u23 = document.getElementById('u23');

var u76 = document.getElementById('u76');

var u14 = document.getElementById('u14');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');

var u55 = document.getElementById('u55');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="发送选项.html" + GetQuerystring();

}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u77 = document.getElementById('u77');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u12 = document.getElementById('u12');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u62 = document.getElementById('u62');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u37 = document.getElementById('u37');

var u43 = document.getElementById('u43');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u68 = document.getElementById('u68');

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="邮件内容.html" + GetQuerystring();

}

}

var u31 = document.getElementById('u31');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u8 = document.getElementById('u8');

var u72 = document.getElementById('u72');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u47 = document.getElementById('u47');

var u53 = document.getElementById('u53');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u41 = document.getElementById('u41');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u16 = document.getElementById('u16');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u66 = document.getElementById('u66');

var u6 = document.getElementById('u6');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
if (window.OnLoad) OnLoad();
