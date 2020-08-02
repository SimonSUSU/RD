
var PageName = '注册后提示';
var PageId = 'p62e42b081bfa40eea2d9b6832a724d1c'
var PageUrl = '注册后提示.html'
document.title = '注册后提示';

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

eval(GetDynamicPanelScript('u53', 1));

eval(GetDynamicPanelScript('u150', 1));

eval(GetDynamicPanelScript('u98', 1));

eval(GetDynamicPanelScript('u135', 1));

var u109 = document.getElementById('u109');

var u86 = document.getElementById('u86');

var u54 = document.getElementById('u54');

var u138 = document.getElementById('u138');

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u138'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u115'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u139 = document.getElementById('u139');

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u139'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u99 = document.getElementById('u99');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u76 = document.getElementById('u76');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u155'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u116 = document.getElementById('u116');

var u103 = document.getElementById('u103');

var u107 = document.getElementById('u107');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u154'] = 'top';
var u101 = document.getElementById('u101');

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u30 = document.getElementById('u30');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u58 = document.getElementById('u58');

var u166 = document.getElementById('u166');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u164 = document.getElementById('u164');

if (bIE) u164.attachEvent("onmouseover", MouseOveru164);
else u164.addEventListener("mouseover", MouseOveru164, true);
function MouseOveru164(e)
{
if (!IsTrueMouseOver('u164',e)) return;
if (true) {

	SetPanelVisibilityu98("");

}

}

if (bIE) u164.attachEvent("onmouseout", MouseOutu164);
else u164.addEventListener("mouseout", MouseOutu164, true);
function MouseOutu164(e)
{
if (!IsTrueMouseOut('u164',e)) return;
if (true) {

	SetPanelVisibilityu98("hidden");

}

}

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u128 = document.getElementById('u128');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u130 = document.getElementById('u130');

var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u134'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u94 = document.getElementById('u94');

var u62 = document.getElementById('u62');

var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u137'] = 'top';
var u147 = document.getElementById('u147');

var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u126 = document.getElementById('u126');

var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u153'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u43 = document.getElementById('u43');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u82 = document.getElementById('u82');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u135 = document.getElementById('u135');

var u68 = document.getElementById('u68');

var u150 = document.getElementById('u150');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u22 = document.getElementById('u22');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u88 = document.getElementById('u88');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u152'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u56 = document.getElementById('u56');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u113'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');

var u92 = document.getElementById('u92');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u124 = document.getElementById('u124');

if (bIE) u124.attachEvent("onmouseover", MouseOveru124);
else u124.addEventListener("mouseover", MouseOveru124, true);
function MouseOveru124(e)
{
if (!IsTrueMouseOver('u124',e)) return;
if (true) {

	SetPanelVisibilityu53("");

}

}

if (bIE) u124.attachEvent("onmouseout", MouseOutu124);
else u124.addEventListener("mouseout", MouseOutu124, true);
function MouseOutu124(e)
{
if (!IsTrueMouseOut('u124',e)) return;
if (true) {

	SetPanelVisibilityu53("hidden");

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u111 = document.getElementById('u111');

var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u161'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u98 = document.getElementById('u98');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u162 = document.getElementById('u162');

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	SetPanelVisibilityu135("");

	SetPanelVisibilityu150("hidden");

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u105 = document.getElementById('u105');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u140 = document.getElementById('u140');

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u140'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

	SetPanelVisibilityu150("");

	SetPanelVisibilityu135("hidden");

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
if (window.OnLoad) OnLoad();
