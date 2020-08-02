
var PageName = '客房价格';
var PageId = 'p010923ecbf454e2284863413f25b3f30'
var PageUrl = '客房价格.html'
document.title = '客房价格';

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

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u402 = document.getElementById('u402');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u126 = document.getElementById('u126');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u332 = document.getElementById('u332');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u417 = document.getElementById('u417');

var u86 = document.getElementById('u86');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="酒店管理.html" + GetQuerystring();

}

}

var u82 = document.getElementById('u82');

var u74 = document.getElementById('u74');

var u216 = document.getElementById('u216');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u277 = document.getElementById('u277');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u104 = document.getElementById('u104');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u323 = document.getElementById('u323');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u440 = document.getElementById('u440');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'center';
var u366 = document.getElementById('u366');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u270 = document.getElementById('u270');

var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

	self.location.href="会员等级管理.html" + GetQuerystring();

}

}

var u68 = document.getElementById('u68');

var u416 = document.getElementById('u416');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u306 = document.getElementById('u306');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');

var u324 = document.getElementById('u324');

var u346 = document.getElementById('u346');

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="房态汇总.html" + GetQuerystring();

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{

if (true) {

	self.location.href="添加_编辑文章.html" + GetQuerystring();

}

}

var u212 = document.getElementById('u212');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u360 = document.getElementById('u360');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'center';
var u365 = document.getElementById('u365');

var u330 = document.getElementById('u330');

var u314 = document.getElementById('u314');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u36 = document.getElementById('u36');

var u295 = document.getElementById('u295');

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u256 = document.getElementById('u256');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u454 = document.getElementById('u454');

var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	self.location.href="票务管理.html" + GetQuerystring();

}

}

var u260 = document.getElementById('u260');

var u450 = document.getElementById('u450');

var u138 = document.getElementById('u138');

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{

if (true) {

	self.location.href="添加修改特产.html" + GetQuerystring();

}

}

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'top';
var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u231 = document.getElementById('u231');

var u169 = document.getElementById('u169');

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{

if (true) {

	self.location.href="酒店图库.html" + GetQuerystring();

}

}

var u215 = document.getElementById('u215');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="添加_修改景点.html" + GetQuerystring();

}

}

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u300 = document.getElementById('u300');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u20 = document.getElementById('u20');

var u226 = document.getElementById('u226');

var u364 = document.getElementById('u364');

var u458 = document.getElementById('u458');

var u264 = document.getElementById('u264');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'top';
var u414 = document.getElementById('u414');

var u255 = document.getElementById('u255');

var u183 = document.getElementById('u183');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u13 = document.getElementById('u13');

var u466 = document.getElementById('u466');

var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');

var u387 = document.getElementById('u387');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u344 = document.getElementById('u344');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	self.location.href="自由行管理.html" + GetQuerystring();

}

}

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u279 = document.getElementById('u279');

var u336 = document.getElementById('u336');

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'top';
var u210 = document.getElementById('u210');

var u318 = document.getElementById('u318');

var u191 = document.getElementById('u191');

var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{

if (true) {

	self.location.href="特产管理.html" + GetQuerystring();

}

}

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'center';
var u199 = document.getElementById('u199');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u140 = document.getElementById('u140');

var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	self.location.href="自由行管理.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if (true) {

	self.location.href="旅游指南.html" + GetQuerystring();

}

}

var u88 = document.getElementById('u88');

var u400 = document.getElementById('u400');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');

var u408 = document.getElementById('u408');

var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');

var u289 = document.getElementById('u289');

var u40 = document.getElementById('u40');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	self.location.href="酒店管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u160'] = 'top';
var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	self.location.href="添加_修改周边游.html" + GetQuerystring();

}

}

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	self.location.href="添加_修改供应商.html" + GetQuerystring();

}

}

var u467 = document.getElementById('u467');

var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{

if (true) {

	self.location.href="添加_修改酒店.html" + GetQuerystring();

}

}

var u281 = document.getElementById('u281');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="添加_修改自由行.html" + GetQuerystring();

}

}

var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'top';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="酒店管理.html" + GetQuerystring();

}

}

var u362 = document.getElementById('u362');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u209 = document.getElementById('u209');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u421 = document.getElementById('u421');

var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	self.location.href="添加_修改秒杀抢购.html" + GetQuerystring();

}

}

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u334 = document.getElementById('u334');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u377 = document.getElementById('u377');

var u258 = document.getElementById('u258');

var u342 = document.getElementById('u342');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u487 = document.getElementById('u487');

u487.style.cursor = 'pointer';
if (bIE) u487.attachEvent("onclick", Clicku487);
else u487.addEventListener("click", Clicku487, true);
function Clicku487(e)
{

if (true) {

	self.location.href="房态.html" + GetQuerystring();

}

}

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u179 = document.getElementById('u179');

var u185 = document.getElementById('u185');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');

var u431 = document.getElementById('u431');

var u92 = document.getElementById('u92');

var u228 = document.getElementById('u228');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u348 = document.getElementById('u348');

var u253 = document.getElementById('u253');

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u34 = document.getElementById('u34');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u412 = document.getElementById('u412');

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	self.location.href="添加手工订单第一步.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u376 = document.getElementById('u376');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'top';
var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	self.location.href="添加_修改别墅.html" + GetQuerystring();

}

}

var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{

if (true) {

	self.location.href="酒店设施.html" + GetQuerystring();

}

}

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u438 = document.getElementById('u438');

var u465 = document.getElementById('u465');

var u11 = document.getElementById('u11');

var u28 = document.getElementById('u28');

var u356 = document.getElementById('u356');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u222 = document.getElementById('u222');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u383 = document.getElementById('u383');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	self.location.href="秒杀抢购管理.html" + GetQuerystring();

}

}

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'top';
var u239 = document.getElementById('u239');

var u237 = document.getElementById('u237');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u202 = document.getElementById('u202');

var u52 = document.getElementById('u52');

var u469 = document.getElementById('u469');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u316 = document.getElementById('u316');

var u30 = document.getElementById('u30');

var u326 = document.getElementById('u326');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u435 = document.getElementById('u435');

var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{

if (true) {

	self.location.href="别墅群管理.html" + GetQuerystring();

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u195 = document.getElementById('u195');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u352 = document.getElementById('u352');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u293 = document.getElementById('u293');

var u370 = document.getElementById('u370');

var u283 = document.getElementById('u283');

var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	self.location.href="添加_修改会员.html" + GetQuerystring();

}

}

var u310 = document.getElementById('u310');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u201 = document.getElementById('u201');

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'top';
var u411 = document.getElementById('u411');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u292 = document.getElementById('u292');

var u419 = document.getElementById('u419');

var u325 = document.getElementById('u325');

var u463 = document.getElementById('u463');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	self.location.href="周边游管理.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u460 = document.getElementById('u460');

var u171 = document.getElementById('u171');

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u207 = document.getElementById('u207');

var u220 = document.getElementById('u220');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u146 = document.getElementById('u146');

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u427 = document.getElementById('u427');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u46 = document.getElementById('u46');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u373 = document.getElementById('u373');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="酒店客房.html" + GetQuerystring();

}

}

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{

if (true) {

	self.location.href="别墅管理.html" + GetQuerystring();

}

}

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u485 = document.getElementById('u485');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u477 = document.getElementById('u477');

var u304 = document.getElementById('u304');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u442 = document.getElementById('u442');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u475 = document.getElementById('u475');

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u375 = document.getElementById('u375');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	self.location.href="订单管理.html" + GetQuerystring();

}

}

var u328 = document.getElementById('u328');

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	self.location.href="别墅管理.html" + GetQuerystring();

}

}

var u452 = document.getElementById('u452');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

	self.location.href="景点管理.html" + GetQuerystring();

}

}

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u385 = document.getElementById('u385');

var u453 = document.getElementById('u453');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u461 = document.getElementById('u461');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u291 = document.getElementById('u291');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'center';
var u214 = document.getElementById('u214');

var u308 = document.getElementById('u308');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u299 = document.getElementById('u299');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	self.location.href="后台管理系统_登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u58'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{

if (true) {

	self.location.href="添加餐饮美食.html" + GetQuerystring();

}

}

var u433 = document.getElementById('u433');

var u98 = document.getElementById('u98');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u224 = document.getElementById('u224');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u381 = document.getElementById('u381');

var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u456 = document.getElementById('u456');

var u389 = document.getElementById('u389');

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	self.location.href="票务管理.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u322 = document.getElementById('u322');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="信息控制管理.html" + GetQuerystring();

}

}

var u8 = document.getElementById('u8');

var u486 = document.getElementById('u486');

var u394 = document.getElementById('u394');

var u268 = document.getElementById('u268');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u444 = document.getElementById('u444');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u484 = document.getElementById('u484');

var u26 = document.getElementById('u26');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u379 = document.getElementById('u379');

var u446 = document.getElementById('u446');

var u350 = document.getElementById('u350');

var u203 = document.getElementById('u203');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u241 = document.getElementById('u241');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u361 = document.getElementById('u361');

var u204 = document.getElementById('u204');

var u358 = document.getElementById('u358');

var u455 = document.getElementById('u455');

var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	self.location.href="后台备注.html" + GetQuerystring();

}

}

var u398 = document.getElementById('u398');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u321 = document.getElementById('u321');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u285 = document.getElementById('u285');

var u422 = document.getElementById('u422');

var u406 = document.getElementById('u406');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u479 = document.getElementById('u479');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u410 = document.getElementById('u410');

var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u177 = document.getElementById('u177');

var u448 = document.getElementById('u448');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	self.location.href="餐饮美食.html" + GetQuerystring();

}

}

var u363 = document.getElementById('u363');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u340 = document.getElementById('u340');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="周边游管理.html" + GetQuerystring();

}

}

var u425 = document.getElementById('u425');

var u84 = document.getElementById('u84');

var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

	self.location.href="添加_修改票务.html" + GetQuerystring();

}

}

var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="会员管理.html" + GetQuerystring();

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u218 = document.getElementById('u218');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u161 = document.getElementById('u161');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'center';
var u22 = document.getElementById('u22');

var u272 = document.getElementById('u272');

var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	self.location.href="管理员管理.html" + GetQuerystring();

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u250 = document.getElementById('u250');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u473 = document.getElementById('u473');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u483 = document.getElementById('u483');

var u181 = document.getElementById('u181');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u189 = document.getElementById('u189');

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{

if (true) {

	self.location.href="其它订单.html" + GetQuerystring();

}

}

var u62 = document.getElementById('u62');

var u409 = document.getElementById('u409');

var u354 = document.getElementById('u354');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'center';
var u243 = document.getElementById('u243');

var u114 = document.getElementById('u114');

var u404 = document.getElementById('u404');

var u245 = document.getElementById('u245');

var u297 = document.getElementById('u297');

var u247 = document.getElementById('u247');

var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="广告管理.html" + GetQuerystring();

}

}

var u274 = document.getElementById('u274');

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u175 = document.getElementById('u175');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'top';
var u429 = document.getElementById('u429');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u200 = document.getElementById('u200');

var u396 = document.getElementById('u396');

var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u423 = document.getElementById('u423');

var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{

if (true) {

	self.location.href="角色管理.html" + GetQuerystring();

}

}

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u249 = document.getElementById('u249');

var u235 = document.getElementById('u235');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u392 = document.getElementById('u392');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u287 = document.getElementById('u287');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u471 = document.getElementById('u471');

var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="供应商管理.html" + GetQuerystring();

}

}

var u312 = document.getElementById('u312');

var u56 = document.getElementById('u56');

var u482 = document.getElementById('u482');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u193 = document.getElementById('u193');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u248 = document.getElementById('u248');

var u338 = document.getElementById('u338');

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="添加_修改酒店.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
