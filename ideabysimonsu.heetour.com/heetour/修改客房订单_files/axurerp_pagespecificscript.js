
var PageName = '修改客房订单';
var PageId = 'pa58f17d447c4463b952c3af018f9f5e5'
var PageUrl = '修改客房订单.html'
document.title = '修改客房订单';

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

eval(GetDynamicPanelScript('u32', 1));

eval(GetDynamicPanelScript('u362', 1));

eval(GetDynamicPanelScript('u265', 1));

eval(GetDynamicPanelScript('u347', 1));

eval(GetDynamicPanelScript('u310', 1));

var u33 = document.getElementById('u33');

var u65 = document.getElementById('u65');

var u126 = document.getElementById('u126');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u129 = document.getElementById('u129');

var u86 = document.getElementById('u86');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u131 = document.getElementById('u131');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u74 = document.getElementById('u74');

var u216 = document.getElementById('u216');

var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u323 = document.getElementById('u323');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u366 = document.getElementById('u366');

u366.style.cursor = 'pointer';
if (bIE) u366.attachEvent("onclick", Clicku366);
else u366.addEventListener("click", Clicku366, true);
function Clicku366(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u366'] = 'top';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u270 = document.getElementById('u270');

var u128 = document.getElementById('u128');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u306 = document.getElementById('u306');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u240 = document.getElementById('u240');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u346'] = 'top';
var u32 = document.getElementById('u32');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');

var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');

var u212 = document.getElementById('u212');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	SetPanelVisibilityu32("");

}

}

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u103 = document.getElementById('u103');

var u9 = document.getElementById('u9');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u365 = document.getElementById('u365');

u365.style.cursor = 'pointer';
if (bIE) u365.attachEvent("onclick", Clicku365);
else u365.addEventListener("click", Clicku365, true);
function Clicku365(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u365'] = 'top';
var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');

var u36 = document.getElementById('u36');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u143 = document.getElementById('u143');

var u122 = document.getElementById('u122');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u349 = document.getElementById('u349');

u349.style.cursor = 'pointer';
if (bIE) u349.attachEvent("onclick", Clicku349);
else u349.addEventListener("click", Clicku349, true);
function Clicku349(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u349'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u169 = document.getElementById('u169');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u137 = document.getElementById('u137');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u180 = document.getElementById('u180');

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href="在线收藏夹.html" + GetQuerystring();

}

}

var u77 = document.getElementById('u77');

var u300 = document.getElementById('u300');

var u246 = document.getElementById('u246');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u364 = document.getElementById('u364');

u364.style.cursor = 'pointer';
if (bIE) u364.attachEvent("onclick", Clicku364);
else u364.addEventListener("click", Clicku364, true);
function Clicku364(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u364'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u109 = document.getElementById('u109');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u206 = document.getElementById('u206');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u336 = document.getElementById('u336');

if (bIE) u336.attachEvent("onmouseover", MouseOveru336);
else u336.addEventListener("mouseover", MouseOveru336, true);
function MouseOveru336(e)
{
if (!IsTrueMouseOver('u336',e)) return;
if (true) {

	SetPanelVisibilityu265("");

}

}

if (bIE) u336.attachEvent("onmouseout", MouseOutu336);
else u336.addEventListener("mouseout", MouseOutu336, true);
function MouseOutu336(e)
{
if (!IsTrueMouseOut('u336',e)) return;
if (true) {

	SetPanelVisibilityu265("hidden");

}

}

var u210 = document.getElementById('u210');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u136 = document.getElementById('u136');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u140 = document.getElementById('u140');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');

var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="支付卡管理.html" + GetQuerystring();

}

}

var u111 = document.getElementById('u111');

var u294 = document.getElementById('u294');

var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	SetPanelVisibilityu32("");

}

}

var u362 = document.getElementById('u362');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	SetPanelVisibilityu32("");

}

}

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u276 = document.getElementById('u276');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u334 = document.getElementById('u334');

u334.style.cursor = 'pointer';
if (bIE) u334.attachEvent("onclick", Clicku334);
else u334.addEventListener("click", Clicku334, true);
function Clicku334(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u282 = document.getElementById('u282');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u342 = document.getElementById('u342');

var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u92 = document.getElementById('u92');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u97 = document.getElementById('u97');

var u190 = document.getElementById('u190');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	SetPanelVisibilityu32("hidden");

}

}

var u198 = document.getElementById('u198');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u208 = document.getElementById('u208');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');

var u376 = document.getElementById('u376');

if (bIE) u376.attachEvent("onmouseover", MouseOveru376);
else u376.addEventListener("mouseover", MouseOveru376, true);
function MouseOveru376(e)
{
if (!IsTrueMouseOver('u376',e)) return;
if (true) {

	SetPanelVisibilityu310("");

}

}

if (bIE) u376.attachEvent("onmouseout", MouseOutu376);
else u376.addEventListener("mouseout", MouseOutu376, true);
function MouseOutu376(e)
{
if (!IsTrueMouseOut('u376',e)) return;
if (true) {

	SetPanelVisibilityu310("hidden");

}

}

var u280 = document.getElementById('u280');

var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u288 = document.getElementById('u288');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	SetPanelVisibilityu32("");

}

}

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u83 = document.getElementById('u83');

var u222 = document.getElementById('u222');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u244 = document.getElementById('u244');

var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u202 = document.getElementById('u202');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u69 = document.getElementById('u69');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u184 = document.getElementById('u184');

var u347 = document.getElementById('u347');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u23 = document.getElementById('u23');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u352 = document.getElementById('u352');

u352.style.cursor = 'pointer';
if (bIE) u352.attachEvent("onclick", Clicku352);
else u352.addEventListener("click", Clicku352, true);
function Clicku352(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u352'] = 'top';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u310 = document.getElementById('u310');

var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

var u117 = document.getElementById('u117');

var u378 = document.getElementById('u378');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u374 = document.getElementById('u374');

u374.style.cursor = 'pointer';
if (bIE) u374.attachEvent("onclick", Clicku374);
else u374.addEventListener("click", Clicku374, true);
function Clicku374(e)
{

if (true) {

	SetPanelVisibilityu347("");

	SetPanelVisibilityu362("hidden");

}

}

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u292 = document.getElementById('u292');

var u325 = document.getElementById('u325');

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u325'] = 'top';
var u166 = document.getElementById('u166');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u220 = document.getElementById('u220');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	SetPanelVisibilityu32("");

}

}

var u146 = document.getElementById('u146');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u373 = document.getElementById('u373');

u373.style.cursor = 'pointer';
if (bIE) u373.attachEvent("onclick", Clicku373);
else u373.addEventListener("click", Clicku373, true);
function Clicku373(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u373'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u165 = document.getElementById('u165');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u315 = document.getElementById('u315');

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u196 = document.getElementById('u196');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u304 = document.getElementById('u304');

var u145 = document.getElementById('u145');

var u351 = document.getElementById('u351');

u351.style.cursor = 'pointer';
if (bIE) u351.attachEvent("onclick", Clicku351);
else u351.addEventListener("click", Clicku351, true);
function Clicku351(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u351'] = 'top';
var u359 = document.getElementById('u359');

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u328 = document.getElementById('u328');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u89 = document.getElementById('u89');

var u100 = document.getElementById('u100');

var u286 = document.getElementById('u286');

var u134 = document.getElementById('u134');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u214 = document.getElementById('u214');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u149 = document.getElementById('u149');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u178 = document.getElementById('u178');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u219 = document.getElementById('u219');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u268 = document.getElementById('u268');

var u327 = document.getElementById('u327');

u327.style.cursor = 'pointer';
if (bIE) u327.attachEvent("onclick", Clicku327);
else u327.addEventListener("click", Clicku327, true);
function Clicku327(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u327'] = 'top';
var u252 = document.getElementById('u252');

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	SetPanelVisibilityu32("");

}

}

var u182 = document.getElementById('u182');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u350 = document.getElementById('u350');

u350.style.cursor = 'pointer';
if (bIE) u350.attachEvent("onclick", Clicku350);
else u350.addEventListener("click", Clicku350, true);
function Clicku350(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u350'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u241 = document.getElementById('u241');

var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u204 = document.getElementById('u204');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u115 = document.getElementById('u115');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u321 = document.getElementById('u321');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u67 = document.getElementById('u67');

var u133 = document.getElementById('u133');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u298 = document.getElementById('u298');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u142 = document.getElementById('u142');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u340 = document.getElementById('u340');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');

u367.style.cursor = 'pointer';
if (bIE) u367.attachEvent("onclick", Clicku367);
else u367.addEventListener("click", Clicku367, true);
function Clicku367(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u367'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u22 = document.getElementById('u22');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u112 = document.getElementById('u112');

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u250 = document.getElementById('u250');

var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u313 = document.getElementById('u313');

var u194 = document.getElementById('u194');

var u357 = document.getElementById('u357');

u357.style.cursor = 'pointer';
if (bIE) u357.attachEvent("onclick", Clicku357);
else u357.addEventListener("click", Clicku357, true);
function Clicku357(e)
{

if (true) {

	SetPanelVisibilityu362("");

	SetPanelVisibilityu347("hidden");

}

}

var u265 = document.getElementById('u265');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u114 = document.getElementById('u114');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u274 = document.getElementById('u274');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u71 = document.getElementById('u71');

var u200 = document.getElementById('u200');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u158 = document.getElementById('u158');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

SetWidgetFormText('u12', PopulateVariables('刘华德'));

	SetPanelVisibilityu32("hidden");

}

}

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="订单.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u174 = document.getElementById('u174');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u188 = document.getElementById('u188');

var u248 = document.getElementById('u248');

var u338 = document.getElementById('u338');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
if (window.OnLoad) OnLoad();
