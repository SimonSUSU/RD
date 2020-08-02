
var PageName = '我要咨询';
var PageId = 'p10d345005f024d86a9aba33f6df2162c'
var PageUrl = '我要咨询.html'
document.title = '我要咨询';

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

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u86 = document.getElementById('u86');

var u54 = document.getElementById('u54');

var u138 = document.getElementById('u138');

var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u102 = document.getElementById('u102');

var u104 = document.getElementById('u104');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u96 = document.getElementById('u96');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u106 = document.getElementById('u106');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u142 = document.getElementById('u142');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u110 = document.getElementById('u110');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u48 = document.getElementById('u48');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="首页.html" + GetQuerystring();

}

}

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u116 = document.getElementById('u116');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u84 = document.getElementById('u84');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u90 = document.getElementById('u90');

var u36 = document.getElementById('u36');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u136 = document.getElementById('u136');

var u27 = document.getElementById('u27');

var u33 = document.getElementById('u33');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u30 = document.getElementById('u30');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u128 = document.getElementById('u128');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u130 = document.getElementById('u130');

var u134 = document.getElementById('u134');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u94 = document.getElementById('u94');

var u62 = document.getElementById('u62');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{

if (true) {

	self.location.href="业主管理通道.html" + GetQuerystring();

}

}
gv_vAlignTable['u147'] = 'top';
var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u120 = document.getElementById('u120');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="房型地图列表.html" + GetQuerystring();

}

}

var u82 = document.getElementById('u82');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u68 = document.getElementById('u68');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u132 = document.getElementById('u132');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u112 = document.getElementById('u112');

var u72 = document.getElementById('u72');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u56 = document.getElementById('u56');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u122 = document.getElementById('u122');

var u108 = document.getElementById('u108');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u114 = document.getElementById('u114');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u92 = document.getElementById('u92');

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u2'] = 'top';
var u124 = document.getElementById('u124');

var u44 = document.getElementById('u44');

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u78 = document.getElementById('u78');

var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="注册.html" + GetQuerystring();

}

}
gv_vAlignTable['u7'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u98 = document.getElementById('u98');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u66 = document.getElementById('u66');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u140 = document.getElementById('u140');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="房型列表.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u145 = document.getElementById('u145');

var u38 = document.getElementById('u38');

var u118 = document.getElementById('u118');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
if (window.OnLoad) OnLoad();
