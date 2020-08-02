
var PageName = '账户免费激活(第一步)';
var PageId = 'p657ec484b42d4f0a83be801f93d83e84'
var PageUrl = '账户免费激活[第一步].html'
document.title = '账户免费激活(第一步)';

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

var u20 = document.getElementById('u20');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="嘻游会员激活.html" + GetQuerystring();

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="第二步_邮件手机.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u4 = document.getElementById('u4');

var u2 = document.getElementById('u2');

var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", Clicku0);
else u0.addEventListener("click", Clicku0, true);
function Clicku0(e)
{

if (true) {

	self.location.href="嘻游钱包.html" + GetQuerystring();

}

}
gv_vAlignTable['u0'] = 'top';
var u26 = document.getElementById('u26');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u8 = document.getElementById('u8');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u14 = document.getElementById('u14');

var u28 = document.getElementById('u28');

var u33 = document.getElementById('u33');

var u22 = document.getElementById('u22');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u12 = document.getElementById('u12');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u37 = document.getElementById('u37');

var u7 = document.getElementById('u7');

var u17 = document.getElementById('u17');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u16 = document.getElementById('u16');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
if (window.OnLoad) OnLoad();
