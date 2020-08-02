
var PageName = '商品管理列表';
var PageId = 'p8df32c9b05f04fc9a7838f3f8bb22018'
var PageUrl = '商品管理列表.html'
document.title = '商品管理列表';

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
gv_vAlignTable['u402'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u545 = document.getElementById('u545');

u545.style.cursor = 'pointer';
if (bIE) u545.attachEvent("onclick", Clicku545);
else u545.addEventListener("click", Clicku545, true);
function Clicku545(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u126 = document.getElementById('u126');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u157 = document.getElementById('u157');

var u129 = document.getElementById('u129');

var u417 = document.getElementById('u417');

var u555 = document.getElementById('u555');

u555.style.cursor = 'pointer';
if (bIE) u555.attachEvent("onclick", Clicku555);
else u555.addEventListener("click", Clicku555, true);
function Clicku555(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u86 = document.getElementById('u86');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u131 = document.getElementById('u131');

var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="推荐类型管理.html" + GetQuerystring();

}

}

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'center';
var u493 = document.getElementById('u493');

var u82 = document.getElementById('u82');

var u74 = document.getElementById('u74');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'center';
var u277 = document.getElementById('u277');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u323 = document.getElementById('u323');

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'center';
var u391 = document.getElementById('u391');

var u541 = document.getElementById('u541');

u541.style.cursor = 'pointer';
if (bIE) u541.attachEvent("onclick", Clicku541);
else u541.addEventListener("click", Clicku541, true);
function Clicku541(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'center';
var u229 = document.getElementById('u229');

var u399 = document.getElementById('u399');

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
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
gv_vAlignTable['u416'] = 'center';
var u257 = document.getElementById('u257');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u32 = document.getElementById('u32');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u489 = document.getElementById('u489');

var u549 = document.getElementById('u549');

u549.style.cursor = 'pointer';
if (bIE) u549.attachEvent("onclick", Clicku549);
else u549.addEventListener("click", Clicku549, true);
function Clicku549(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u60 = document.getElementById('u60');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u103 = document.getElementById('u103');

var u529 = document.getElementById('u529');

u529.style.cursor = 'pointer';
if (bIE) u529.attachEvent("onclick", Clicku529);
else u529.addEventListener("click", Clicku529, true);
function Clicku529(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u107 = document.getElementById('u107');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u401 = document.getElementById('u401');

var u365 = document.getElementById('u365');

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u36 = document.getElementById('u36');

var u295 = document.getElementById('u295');

var u415 = document.getElementById('u415');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u143 = document.getElementById('u143');

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

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'center';
var u439 = document.getElementById('u439');

var u349 = document.getElementById('u349');

var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');

var u169 = document.getElementById('u169');

var u215 = document.getElementById('u215');

var u137 = document.getElementById('u137');

var u275 = document.getElementById('u275');

var u539 = document.getElementById('u539');

u539.style.cursor = 'pointer';
if (bIE) u539.attachEvent("onclick", Clicku539);
else u539.addEventListener("click", Clicku539, true);
function Clicku539(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u102 = document.getElementById('u102');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u369 = document.getElementById('u369');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="信息管理列表.html" + GetQuerystring();

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'center';
var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u109 = document.getElementById('u109');

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'center';
var u255 = document.getElementById('u255');

var u183 = document.getElementById('u183');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u259 = document.getElementById('u259');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');

var u387 = document.getElementById('u387');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u279 = document.getElementById('u279');

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

var u101 = document.getElementById('u101');

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

	self.location.href="交易管理列表.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="特卖活动管理列表.html" + GetQuerystring();

}

}

var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}
gv_vAlignTable['u111'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u537 = document.getElementById('u537');

u537.style.cursor = 'pointer';
if (bIE) u537.attachEvent("onclick", Clicku537);
else u537.addEventListener("click", Clicku537, true);
function Clicku537(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u289 = document.getElementById('u289');

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	self.location.href="商品品牌管理.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');

var u467 = document.getElementById('u467');

var u163 = document.getElementById('u163');

var u281 = document.getElementById('u281');

var u503 = document.getElementById('u503');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u227 = document.getElementById('u227');

var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'center';
var u96 = document.getElementById('u96');

var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u521 = document.getElementById('u521');

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="交易管理列表.html" + GetQuerystring();

}

}

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="商家管理列表.html" + GetQuerystring();

}

}

var u447 = document.getElementById('u447');

var u333 = document.getElementById('u333');

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'center';
var u209 = document.getElementById('u209');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u421 = document.getElementById('u421');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u451 = document.getElementById('u451');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u523 = document.getElementById('u523');

var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'center';
var u377 = document.getElementById('u377');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u487 = document.getElementById('u487');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u525 = document.getElementById('u525');

var u179 = document.getElementById('u179');

var u185 = document.getElementById('u185');

var u335 = document.getElementById('u335');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u431 = document.getElementById('u431');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'center';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="销售员管理.html" + GetQuerystring();

}

}

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u353 = document.getElementById('u353');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u253 = document.getElementById('u253');

var u407 = document.getElementById('u407');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u34 = document.getElementById('u34');

var u153 = document.getElementById('u153');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'center';
var u66 = document.getElementById('u66');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'center';
var u465 = document.getElementById('u465');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u515 = document.getElementById('u515');

var u28 = document.getElementById('u28');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u502 = document.getElementById('u502');
gv_vAlignTable['u502'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u213 = document.getElementById('u213');

var u383 = document.getElementById('u383');

var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'center';
var u445 = document.getElementById('u445');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'center';
var u239 = document.getElementById('u239');

var u237 = document.getElementById('u237');

var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}
gv_vAlignTable['u1'] = 'top';
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

	self.location.href="会员管理列表.html" + GetQuerystring();

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

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u435 = document.getElementById('u435');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u347 = document.getElementById('u347');

var u195 = document.getElementById('u195');

var u355 = document.getElementById('u355');

var u449 = document.getElementById('u449');

var u491 = document.getElementById('u491');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u553 = document.getElementById('u553');

u553.style.cursor = 'pointer';
if (bIE) u553.attachEvent("onclick", Clicku553);
else u553.addEventListener("click", Clicku553, true);
function Clicku553(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u221 = document.getElementById('u221');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u499 = document.getElementById('u499');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u293 = document.getElementById('u293');

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u283 = document.getElementById('u283');

var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	self.location.href="商家店铺咨询管理.html" + GetQuerystring();

}

}

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u151 = document.getElementById('u151');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u201 = document.getElementById('u201');

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u411 = document.getElementById('u411');

var u135 = document.getElementById('u135');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u419 = document.getElementById('u419');

var u325 = document.getElementById('u325');

var u463 = document.getElementById('u463');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u70 = document.getElementById('u70');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="商家等级管理.html" + GetQuerystring();

}

}

var u397 = document.getElementById('u397');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u171 = document.getElementById('u171');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'center';
var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u207 = document.getElementById('u207');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u501 = document.getElementById('u501');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u443 = document.getElementById('u443');

var u427 = document.getElementById('u427');

var u225 = document.getElementById('u225');

var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u517 = document.getElementById('u517');

var u509 = document.getElementById('u509');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u373 = document.getElementById('u373');

var u329 = document.getElementById('u329');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'center';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u269 = document.getElementById('u269');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u315 = document.getElementById('u315');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'center';
var u485 = document.getElementById('u485');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u535 = document.getElementById('u535');

u535.style.cursor = 'pointer';
if (bIE) u535.attachEvent("onclick", Clicku535);
else u535.addEventListener("click", Clicku535, true);
function Clicku535(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u337 = document.getElementById('u337');

var u477 = document.getElementById('u477');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u145 = document.getElementById('u145');

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u351 = document.getElementById('u351');

var u475 = document.getElementById('u475');

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'center';
var u527 = document.getElementById('u527');

u527.style.cursor = 'pointer';
if (bIE) u527.attachEvent("onclick", Clicku527);
else u527.addEventListener("click", Clicku527, true);
function Clicku527(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u359 = document.getElementById('u359');

var u375 = document.getElementById('u375');

var u105 = document.getElementById('u105');

var u531 = document.getElementById('u531');

u531.style.cursor = 'pointer';
if (bIE) u531.attachEvent("onclick", Clicku531);
else u531.addEventListener("click", Clicku531, true);
function Clicku531(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	self.location.href="友情链接管理.html" + GetQuerystring();

}

}

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u116 = document.getElementById('u116');

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u385 = document.getElementById('u385');

var u453 = document.getElementById('u453');

var u147 = document.getElementById('u147');

var u461 = document.getElementById('u461');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u291 = document.getElementById('u291');

var u395 = document.getElementById('u395');

var u441 = document.getElementById('u441');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u149 = document.getElementById('u149');

var u299 = document.getElementById('u299');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	self.location.href="信息分类管理.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u433 = document.getElementById('u433');

var u98 = document.getElementById('u98');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u393 = document.getElementById('u393');

var u381 = document.getElementById('u381');

var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');

var u219 = document.getElementById('u219');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u389 = document.getElementById('u389');

var u50 = document.getElementById('u50');

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u273 = document.getElementById('u273');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u90 = document.getElementById('u90');

var u8 = document.getElementById('u8');

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'center';
var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'center';
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

	self.location.href="商家管理列表.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u547 = document.getElementById('u547');

u547.style.cursor = 'pointer';
if (bIE) u547.attachEvent("onclick", Clicku547);
else u547.addEventListener("click", Clicku547, true);
function Clicku547(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u309 = document.getElementById('u309');

var u379 = document.getElementById('u379');

var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u203 = document.getElementById('u203');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u241 = document.getElementById('u241');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u361 = document.getElementById('u361');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u455 = document.getElementById('u455');

var u173 = document.getElementById('u173');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u321 = document.getElementById('u321');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u285 = document.getElementById('u285');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'center';
var u133 = document.getElementById('u133');

var u479 = document.getElementById('u479');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u177 = document.getElementById('u177');

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'center';
var u301 = document.getElementById('u301');

var u142 = document.getElementById('u142');

var u363 = document.getElementById('u363');

var u159 = document.getElementById('u159');

var u507 = document.getElementById('u507');

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');

var u44 = document.getElementById('u44');

var u425 = document.getElementById('u425');

var u84 = document.getElementById('u84');

var u124 = document.getElementById('u124');

var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="商品评论管理.html" + GetQuerystring();

}

}

var u223 = document.getElementById('u223');

var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'center';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'center';
var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u267 = document.getElementById('u267');

var u161 = document.getElementById('u161');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'center';
var u405 = document.getElementById('u405');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="统计报表.html" + GetQuerystring();

}

}

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'center';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	self.location.href="商品分类管理.html" + GetQuerystring();

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
gv_vAlignTable['u93'] = 'center';
var u481 = document.getElementById('u481');

var u473 = document.getElementById('u473');

var u313 = document.getElementById('u313');

var u483 = document.getElementById('u483');

var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'center';
var u181 = document.getElementById('u181');

var u357 = document.getElementById('u357');

var u543 = document.getElementById('u543');

u543.style.cursor = 'pointer';
if (bIE) u543.attachEvent("onclick", Clicku543);
else u543.addEventListener("click", Clicku543, true);
function Clicku543(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u265 = document.getElementById('u265');

var u189 = document.getElementById('u189');

var u339 = document.getElementById('u339');

var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'center';
var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="网站管理后台.html" + GetQuerystring();

}

}
gv_vAlignTable['u2'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="信息管理列表.html" + GetQuerystring();

}

}

var u409 = document.getElementById('u409');

var u513 = document.getElementById('u513');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u403 = document.getElementById('u403');

var u243 = document.getElementById('u243');

var u114 = document.getElementById('u114');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u245 = document.getElementById('u245');

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'center';
var u297 = document.getElementById('u297');

var u247 = document.getElementById('u247');

var u497 = document.getElementById('u497');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'center';
var u175 = document.getElementById('u175');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u429 = document.getElementById('u429');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'center';
var u551 = document.getElementById('u551');

u551.style.cursor = 'pointer';
if (bIE) u551.attachEvent("onclick", Clicku551);
else u551.addEventListener("click", Clicku551, true);
function Clicku551(e)
{

if (true) {

	self.location.href="添加_编辑商品.html" + GetQuerystring();

}

}

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="系统设置.html" + GetQuerystring();

}

}

var u423 = document.getElementById('u423');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'center';
var u217 = document.getElementById('u217');

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u495 = document.getElementById('u495');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u155 = document.getElementById('u155');

var u511 = document.getElementById('u511');

var u249 = document.getElementById('u249');

var u235 = document.getElementById('u235');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u413 = document.getElementById('u413');

var u287 = document.getElementById('u287');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u271 = document.getElementById('u271');

var u307 = document.getElementById('u307');

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

	self.location.href="商家类型管理.html" + GetQuerystring();

}

}

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	self.location.href="会员通知.html" + GetQuerystring();

}

}

var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'center';
var u263 = document.getElementById('u263');

var u193 = document.getElementById('u193');

var u343 = document.getElementById('u343');

var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u457 = document.getElementById('u457');

var u437 = document.getElementById('u437');

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="会员管理列表.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
