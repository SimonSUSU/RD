
var PageName = '订单编辑';
var PageId = 'pe9388521942f4ef3b53e4bf203cd27cf'
var PageUrl = '订单编辑.html'
document.title = '订单编辑';

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
gv_vAlignTable['u126'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u417 = document.getElementById('u417');

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u86'] = 'top';
var u428 = document.getElementById('u428');

var u162 = document.getElementById('u162');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u42 = document.getElementById('u42');

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'center';
var u493 = document.getElementById('u493');

var u82 = document.getElementById('u82');

var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{

if (true) {

	self.location.href="角色管理.html" + GetQuerystring();

}

}

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	self.location.href="会员列表.html" + GetQuerystring();

}

}

var u386 = document.getElementById('u386');

var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u277 = document.getElementById('u277');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	self.location.href="会员咨询.html" + GetQuerystring();

}

}

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u323 = document.getElementById('u323');

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'top';
var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'center';
var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'center';
var u229 = document.getElementById('u229');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'center';
var u366 = document.getElementById('u366');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u459 = document.getElementById('u459');

var u331 = document.getElementById('u331');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u68 = document.getElementById('u68');

var u416 = document.getElementById('u416');

var u257 = document.getElementById('u257');

var u306 = document.getElementById('u306');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u324 = document.getElementById('u324');

var u346 = document.getElementById('u346');

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="业主列表.html" + GetQuerystring();

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u489 = document.getElementById('u489');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="添加手工订单第一步.html" + GetQuerystring();

}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="订单列表.html" + GetQuerystring();

}

}
gv_vAlignTable['u5'] = 'top';
var u360 = document.getElementById('u360');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'center';
var u365 = document.getElementById('u365');

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="会员等级管理.html" + GetQuerystring();

}

}

var u295 = document.getElementById('u295');

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'center';
var u122 = document.getElementById('u122');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'center';
var u505 = document.getElementById('u505');

var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'center';
var u439 = document.getElementById('u439');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u215 = document.getElementById('u215');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u275 = document.getElementById('u275');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u180 = document.getElementById('u180');

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="添加、修改房间.html" + GetQuerystring();

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u364 = document.getElementById('u364');

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u414 = document.getElementById('u414');

var u255 = document.getElementById('u255');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u424 = document.getElementById('u424');

var u259 = document.getElementById('u259');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u54 = document.getElementById('u54');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u344 = document.getElementById('u344');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u186 = document.getElementById('u186');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u191 = document.getElementById('u191');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
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

	self.location.href="房型设施管理.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u106 = document.getElementById('u106');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u400 = document.getElementById('u400');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u408 = document.getElementById('u408');

var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');

var u289 = document.getElementById('u289');

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	self.location.href="小区增加_编辑.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u390 = document.getElementById('u390');

var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');

var u467 = document.getElementById('u467');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u281 = document.getElementById('u281');

var u503 = document.getElementById('u503');

var u168 = document.getElementById('u168');

var u227 = document.getElementById('u227');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u384 = document.getElementById('u384');

var u521 = document.getElementById('u521');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u362 = document.getElementById('u362');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u447 = document.getElementById('u447');

var u333 = document.getElementById('u333');

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'center';
var u209 = document.getElementById('u209');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u421 = document.getElementById('u421');

var u154 = document.getElementById('u154');

var u451 = document.getElementById('u451');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u523 = document.getElementById('u523');

var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'center';
var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u342 = document.getElementById('u342');

var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u487 = document.getElementById('u487');

var u284 = document.getElementById('u284');

var u525 = document.getElementById('u525');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u335 = document.getElementById('u335');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u431 = document.getElementById('u431');

var u526 = document.getElementById('u526');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u97 = document.getElementById('u97');

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'top';
var u190 = document.getElementById('u190');

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
gv_vAlignTable['u208'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{

if (true) {

	self.location.href="新增_修改_查看业主.html" + GetQuerystring();

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u412 = document.getElementById('u412');

var u66 = document.getElementById('u66');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u376 = document.getElementById('u376');

var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{

if (true) {

	self.location.href="添加手工订单第二步.html" + GetQuerystring();

}

}

var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u288 = document.getElementById('u288');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'center';
var u465 = document.getElementById('u465');

var u11 = document.getElementById('u11');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="添加会员.html" + GetQuerystring();

}

}

var u356 = document.getElementById('u356');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u213 = document.getElementById('u213');

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'center';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'top';
var u445 = document.getElementById('u445');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u528 = document.getElementById('u528');

var u239 = document.getElementById('u239');

var u237 = document.getElementById('u237');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="房间类型.html" + GetQuerystring();

}

}

var u469 = document.getElementById('u469');

var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'center';
var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');

var u326 = document.getElementById('u326');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u435 = document.getElementById('u435');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u184 = document.getElementById('u184');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u195 = document.getElementById('u195');

var u355 = document.getElementById('u355');

var u449 = document.getElementById('u449');

var u491 = document.getElementById('u491');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u221 = document.getElementById('u221');

var u352 = document.getElementById('u352');

var u499 = document.getElementById('u499');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u293 = document.getElementById('u293');

var u370 = document.getElementById('u370');

var u283 = document.getElementById('u283');

var u78 = document.getElementById('u78');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u374 = document.getElementById('u374');

var u201 = document.getElementById('u201');

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u419 = document.getElementById('u419');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u463 = document.getElementById('u463');

var u166 = document.getElementById('u166');

var u70 = document.getElementById('u70');

var u6 = document.getElementById('u6');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u524 = document.getElementById('u524');

var u207 = document.getElementById('u207');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u501 = document.getElementById('u501');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u146 = document.getElementById('u146');

var u443 = document.getElementById('u443');

var u427 = document.getElementById('u427');

u427.style.cursor = 'pointer';
if (bIE) u427.attachEvent("onclick", Clicku427);
else u427.addEventListener("click", Clicku427, true);
function Clicku427(e)
{

if (true) {

	self.location.href="添加手工订单第二步.html" + GetQuerystring();

}

}

var u225 = document.getElementById('u225');

var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="生活圈管理.html" + GetQuerystring();

}

}

var u382 = document.getElementById('u382');

var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'top';
var u509 = document.getElementById('u509');

var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u329 = document.getElementById('u329');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u269 = document.getElementById('u269');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u315 = document.getElementById('u315');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u485 = document.getElementById('u485');

var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="业主列表.html" + GetQuerystring();

}

}

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u337 = document.getElementById('u337');

var u477 = document.getElementById('u477');

var u304 = document.getElementById('u304');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u475 = document.getElementById('u475');

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u527 = document.getElementById('u527');

var u359 = document.getElementById('u359');

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u372 = document.getElementById('u372');

var u64 = document.getElementById('u64');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u116 = document.getElementById('u116');

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	self.location.href="房间管理.html" + GetQuerystring();

}

}

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u286 = document.getElementById('u286');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
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

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u308 = document.getElementById('u308');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u299 = document.getElementById('u299');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	self.location.href="订单列表.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');

var u144 = document.getElementById('u144');

var u433 = document.getElementById('u433');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u178 = document.getElementById('u178');

var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u219 = document.getElementById('u219');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'center';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	self.location.href="装修程度.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u273 = document.getElementById('u273');

var u322 = document.getElementById('u322');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u8 = document.getElementById('u8');

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'center';
var u394 = document.getElementById('u394');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u327 = document.getElementById('u327');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'center';
var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="会员列表.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');

var u309 = document.getElementById('u309');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'center';
var u350 = document.getElementById('u350');

var u203 = document.getElementById('u203');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u241 = document.getElementById('u241');

var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u358 = document.getElementById('u358');

var u455 = document.getElementById('u455');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
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
gv_vAlignTable['u422'] = 'top';
var u406 = document.getElementById('u406');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u479 = document.getElementById('u479');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u410 = document.getElementById('u410');

var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'center';
var u301 = document.getElementById('u301');

var u142 = document.getElementById('u142');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u507 = document.getElementById('u507');

var u340 = document.getElementById('u340');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="地区管理.html" + GetQuerystring();

}

}

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'center';
var u84 = document.getElementById('u84');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="权限管理.html" + GetQuerystring();

}

}

var u223 = document.getElementById('u223');

var u380 = document.getElementById('u380');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u267 = document.getElementById('u267');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u388 = document.getElementById('u388');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'center';
var u22 = document.getElementById('u22');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	self.location.href="小区管理.html" + GetQuerystring();

}

}

var u112 = document.getElementById('u112');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	self.location.href="添加手工订单第一步.html" + GetQuerystring();

}

}

var u481 = document.getElementById('u481');

var u473 = document.getElementById('u473');

var u313 = document.getElementById('u313');

var u483 = document.getElementById('u483');

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u357 = document.getElementById('u357');

var u265 = document.getElementById('u265');

var u189 = document.getElementById('u189');

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{

if (true) {

	self.location.href="添加手工订单第二步.html" + GetQuerystring();

}

}

var u339 = document.getElementById('u339');

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');

var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u513 = document.getElementById('u513');

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

var u497 = document.getElementById('u497');

var u148 = document.getElementById('u148');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u429 = document.getElementById('u429');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'center';
var u176 = document.getElementById('u176');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u396 = document.getElementById('u396');

var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u423 = document.getElementById('u423');

var u158 = document.getElementById('u158');

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'center';
var u217 = document.getElementById('u217');

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u495 = document.getElementById('u495');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="小区管理.html" + GetQuerystring();

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u511 = document.getElementById('u511');

var u249 = document.getElementById('u249');

var u235 = document.getElementById('u235');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u392 = document.getElementById('u392');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'center';
var u287 = document.getElementById('u287');

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="房间景观管理.html" + GetQuerystring();

}

}

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="订单列表.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u174 = document.getElementById('u174');

var u471 = document.getElementById('u471');

var u24 = document.getElementById('u24');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u56 = document.getElementById('u56');

var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'center';
var u263 = document.getElementById('u263');

var u193 = document.getElementById('u193');

var u343 = document.getElementById('u343');

var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u338 = document.getElementById('u338');

var u457 = document.getElementById('u457');

var u437 = document.getElementById('u437');

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="房间管理.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
