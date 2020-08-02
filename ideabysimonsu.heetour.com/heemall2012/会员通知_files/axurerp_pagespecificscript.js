
var PageName = '会员通知';
var PageId = 'pefe64f27c48b45848f74274413f8fe2c'
var PageUrl = '会员通知.html'
document.title = '会员通知';

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
gv_vAlignTable['u109'] = 'top';
var u86 = document.getElementById('u86');

var u54 = document.getElementById('u54');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u115 = document.getElementById('u115');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="销售员管理.html" + GetQuerystring();

}

}

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="商品分类管理.html" + GetQuerystring();

}

}

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	self.location.href="商品评论管理.html" + GetQuerystring();

}

}

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="统计报表.html" + GetQuerystring();

}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}
gv_vAlignTable['u5'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u76 = document.getElementById('u76');

var u110 = document.getElementById('u110');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="系统设置.html" + GetQuerystring();

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="交易管理列表.html" + GetQuerystring();

}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u48 = document.getElementById('u48');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u103 = document.getElementById('u103');

var u107 = document.getElementById('u107');

var u84 = document.getElementById('u84');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="交易管理列表.html" + GetQuerystring();

}

}

var u90 = document.getElementById('u90');

var u36 = document.getElementById('u36');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="信息管理列表.html" + GetQuerystring();

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="商家管理列表.html" + GetQuerystring();

}

}

var u100 = document.getElementById('u100');

var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u12 = document.getElementById('u12');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u121 = document.getElementById('u121');

var u94 = document.getElementById('u94');

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="信息分类管理.html" + GetQuerystring();

}

}

var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="推荐类型管理.html" + GetQuerystring();

}

}

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
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

	self.location.href="商品管理列表.html" + GetQuerystring();

}

}

var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="商家店铺咨询管理.html" + GetQuerystring();

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');

var u40 = document.getElementById('u40');

var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	self.location.href="友情链接管理.html" + GetQuerystring();

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
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

	self.location.href="会员管理列表.html" + GetQuerystring();

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u88 = document.getElementById('u88');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u72 = document.getElementById('u72');

var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	self.location.href="会员管理列表.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u113 = document.getElementById('u113');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="商家类型管理.html" + GetQuerystring();

}

}

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="特卖活动管理列表.html" + GetQuerystring();

}

}

var u2 = document.getElementById('u2');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="商品品牌管理.html" + GetQuerystring();

}

}

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	self.location.href="商品管理列表.html" + GetQuerystring();

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u78 = document.getElementById('u78');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u111 = document.getElementById('u111');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u123 = document.getElementById('u123');

var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="商家管理列表.html" + GetQuerystring();

}

}

var u98 = document.getElementById('u98');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	self.location.href="信息管理列表.html" + GetQuerystring();

}

}

var u105 = document.getElementById('u105');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="网站管理后台.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="商家等级管理.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u38 = document.getElementById('u38');

var u118 = document.getElementById('u118');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
