
var PageName = '个人资料';
var PageId = 'p3356e5aa4c744709bfe2eed39e1b5fd0'
var PageUrl = '个人资料.html'
document.title = '个人资料';

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

eval(GetDynamicPanelScript('u79', 1));

eval(GetDynamicPanelScript('u58', 1));

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

SetWidgetFormText('u85', PopulateVariables('邮件发送成功。请查收！'));

}

}

var u54 = document.getElementById('u54');

var u138 = document.getElementById('u138');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	self.location.href="帮助中心_站点相关.html" + GetQuerystring();

}

}
gv_vAlignTable['u115'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u79 = document.getElementById('u79');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	self.location.href="旅游指南.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="密码修改.html" + GetQuerystring();

}

}

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u149 = document.getElementById('u149');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u141 = document.getElementById('u141');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u146 = document.getElementById('u146');

var u133 = document.getElementById('u133');

var u119 = document.getElementById('u119');

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	SetPanelVisibilityu79("hidden");

}

}

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	SetPanelVisibilityu79("");

}

}
gv_vAlignTable['u55'] = 'top';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	self.location.href="旅游线路.html" + GetQuerystring();

}

}

var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	self.location.href="在线问答.html" + GetQuerystring();

}

}

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u160 = document.getElementById('u160');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u27 = document.getElementById('u27');

var u33 = document.getElementById('u33');

var u154 = document.getElementById('u154');

var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="会议接待.html" + GetQuerystring();

}

}

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u151 = document.getElementById('u151');

var u12 = document.getElementById('u12');

var u65 = document.getElementById('u65');

var u128 = document.getElementById('u128');

var u71 = document.getElementById('u71');

var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{

if (true) {

	self.location.href="我的评论.html" + GetQuerystring();

}

}

var u143 = document.getElementById('u143');

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{

if (true) {

	self.location.href="订单列表.html" + GetQuerystring();

}

}

var u130 = document.getElementById('u130');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u85 = document.getElementById('u85');

var u120 = document.getElementById('u120');

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="首页.html" + GetQuerystring();

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u82 = document.getElementById('u82');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u135 = document.getElementById('u135');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u140 = document.getElementById('u140');

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{

if (true) {

	self.location.href="密码修改.html" + GetQuerystring();

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	self.location.href="首页.html" + GetQuerystring();

}

}

var u59 = document.getElementById('u59');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u8 = document.getElementById('u8');

var u132 = document.getElementById('u132');

var u152 = document.getElementById('u152');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u56 = document.getElementById('u56');

var u157 = document.getElementById('u157');

var u144 = document.getElementById('u144');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="海南景点.html" + GetQuerystring();

}

}

var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	self.location.href="帮助中心_站点相关.html" + GetQuerystring();

}

}
gv_vAlignTable['u122'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	self.location.href="会员登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u113'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="订单列表.html" + GetQuerystring();

}

}

var u53 = document.getElementById('u53');

var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{

if (true) {

	self.location.href="会员注册.html" + GetQuerystring();

}

}
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u124 = document.getElementById('u124');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u78 = document.getElementById('u78');

var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u69 = document.getElementById('u69');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u162 = document.getElementById('u162');

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	self.location.href="会员登录.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	SetPanelVisibilityu58("hidden");

}

}

var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	self.location.href="特惠机票.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u35 = document.getElementById('u35');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u163 = document.getElementById('u163');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u38 = document.getElementById('u38');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
if (window.OnLoad) OnLoad();
