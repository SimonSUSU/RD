
var PageName = '网站注册';
var PageId = 'pe0892bc655cb4e35bb64cf26b6502fb2'
var PageUrl = '网站注册.html'
document.title = '网站注册';

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

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="网站登录.html" + GetQuerystring();

}

}

var u51 = document.getElementById('u51');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u49 = document.getElementById('u49');

var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="套餐服务.html" + GetQuerystring();

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u14 = document.getElementById('u14');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u28 = document.getElementById('u28');

var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="网站登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u44'] = 'top';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="产品介绍.html" + GetQuerystring();

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u12 = document.getElementById('u12');

var u41 = document.getElementById('u41');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u21 = document.getElementById('u21');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="客户案例.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u17 = document.getElementById('u17');

var u5 = document.getElementById('u5');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u3 = document.getElementById('u3');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u25 = document.getElementById('u25');

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}
gv_vAlignTable['u43'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u39 = document.getElementById('u39');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u9 = document.getElementById('u9');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u30'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u18 = document.getElementById('u18');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u23 = document.getElementById('u23');

if (window.OnLoad) OnLoad();
