
var PageName = '地区管理';
var PageId = 'p5bd8993e4c0f48a08f0f4e20ed28aa81'
var PageUrl = '地区管理.html'
document.title = '地区管理';

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

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="房间管理.html" + GetQuerystring();

}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u138 = document.getElementById('u138');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	self.location.href="业主列表.html" + GetQuerystring();

}

}

var u115 = document.getElementById('u115');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="房型设施管理.html" + GetQuerystring();

}

}

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');

var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="会员列表.html" + GetQuerystring();

}

}

var u79 = document.getElementById('u79');

var u139 = document.getElementById('u139');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u5 = document.getElementById('u5');

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="会员列表.html" + GetQuerystring();

}

}

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u67 = document.getElementById('u67');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	self.location.href="权限管理.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u39 = document.getElementById('u39');

var u133 = document.getElementById('u133');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	self.location.href="订单列表.html" + GetQuerystring();

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u103 = document.getElementById('u103');

var u107 = document.getElementById('u107');

var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	self.location.href="房间景观管理.html" + GetQuerystring();

}

}

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="添加手工订单第一步.html" + GetQuerystring();

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u81 = document.getElementById('u81');

var u136 = document.getElementById('u136');

var u27 = document.getElementById('u27');

var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="会员等级管理.html" + GetQuerystring();

}

}

var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="会员咨询.html" + GetQuerystring();

}

}

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u77 = document.getElementById('u77');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="房间管理.html" + GetQuerystring();

}

}

var u21 = document.getElementById('u21');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	self.location.href="房间类型.html" + GetQuerystring();

}

}

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="小区管理.html" + GetQuerystring();

}

}

var u65 = document.getElementById('u65');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	self.location.href="角色管理.html" + GetQuerystring();

}

}

var u130 = document.getElementById('u130');

var u134 = document.getElementById('u134');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u94 = document.getElementById('u94');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u137 = document.getElementById('u137');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u117 = document.getElementById('u117');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="小区增加_编辑.html" + GetQuerystring();

}

}

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="生活圈管理.html" + GetQuerystring();

}

}

var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="添加、修改房间.html" + GetQuerystring();

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u135 = document.getElementById('u135');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="添加会员.html" + GetQuerystring();

}

}

var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="新增_修改_查看业主.html" + GetQuerystring();

}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u59 = document.getElementById('u59');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u75 = document.getElementById('u75');

var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="订单列表.html" + GetQuerystring();

}

}

var u8 = document.getElementById('u8');

var u132 = document.getElementById('u132');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u131 = document.getElementById('u131');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u113 = document.getElementById('u113');

var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="装修程度.html" + GetQuerystring();

}

}

var u53 = document.getElementById('u53');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="业主列表.html" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u111 = document.getElementById('u111');

var u69 = document.getElementById('u69');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	self.location.href="会员咨询.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u105 = document.getElementById('u105');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u140 = document.getElementById('u140');

var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="小区管理.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{

if (true) {

	self.location.href="添加手工订单第一步.html" + GetQuerystring();

}

}

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u3 = document.getElementById('u3');

if (window.OnLoad) OnLoad();
