
var PageName = '商家店铺首页';
var PageId = 'pe6405bd0b0a5412c98fd05d6761d55c5'
var PageUrl = '商家店铺首页.html'
document.title = '商家店铺首页';

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

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

	self.location.href="商家的商品列表.html" + GetQuerystring();

}

}
gv_vAlignTable['u109'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u138 = document.getElementById('u138');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	self.location.href="商家单页面.html" + GetQuerystring();

}

}

var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u102 = document.getElementById('u102');

var u104 = document.getElementById('u104');

var u45 = document.getElementById('u45');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u76 = document.getElementById('u76');

var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u142'] = 'top';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u14 = document.getElementById('u14');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="搜索列表.html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="商家单页面.html" + GetQuerystring();

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u133 = document.getElementById('u133');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u87 = document.getElementById('u87');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u93 = document.getElementById('u93');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	self.location.href="商家的商品列表.html" + GetQuerystring();

}

}
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u158 = document.getElementById('u158');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="信用评价.html" + GetQuerystring();

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u168 = document.getElementById('u168');

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u100 = document.getElementById('u100');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u12 = document.getElementById('u12');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u128 = document.getElementById('u128');

var u71 = document.getElementById('u71');

var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u143 = document.getElementById('u143');

var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u62 = document.getElementById('u62');

var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u137'] = 'top';
var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u147'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u153 = document.getElementById('u153');

var u117 = document.getElementById('u117');

u117.style.cursor = 'pointer';
if (bIE) u117.attachEvent("onclick", Clicku117);
else u117.addEventListener("click", Clicku117, true);
function Clicku117(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u117'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="商家单页面.html" + GetQuerystring();

}

}

var u43 = document.getElementById('u43');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="商家单页面.html" + GetQuerystring();

}

}

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	self.location.href="商家的商品列表.html" + GetQuerystring();

}

}
gv_vAlignTable['u97'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u8 = document.getElementById('u8');

var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u132'] = 'top';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u152'] = 'top';
var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u112'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u157'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u95 = document.getElementById('u95');

var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u122'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u113 = document.getElementById('u113');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u127'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u2 = document.getElementById('u2');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u167'] = 'top';
var u78 = document.getElementById('u78');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u41 = document.getElementById('u41');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u69 = document.getElementById('u69');

var u123 = document.getElementById('u123');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u16 = document.getElementById('u16');

var u98 = document.getElementById('u98');

var u9 = document.getElementById('u9');

var u162 = document.getElementById('u162');

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u162'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u66 = document.getElementById('u66');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u6 = document.getElementById('u6');

var u148 = document.getElementById('u148');

var u140 = document.getElementById('u140');

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="商家单页面.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u163 = document.getElementById('u163');

var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

	self.location.href="商品详细页.html" + GetQuerystring();

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u118 = document.getElementById('u118');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
