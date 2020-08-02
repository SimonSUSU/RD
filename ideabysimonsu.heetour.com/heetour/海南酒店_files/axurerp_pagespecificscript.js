
var PageName = '海南酒店';
var PageId = 'p8eaf5946a1b243aa9b9520a93b33ef2c'
var PageUrl = '海南酒店.html'
document.title = '海南酒店';

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

eval(GetDynamicPanelScript('u387', 1));

eval(GetDynamicPanelScript('u290', 1));

eval(GetDynamicPanelScript('u372', 1));

eval(GetDynamicPanelScript('u335', 1));

eval(GetDynamicPanelScript('u221', 1));

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u65 = document.getElementById('u65');

var u126 = document.getElementById('u126');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u157 = document.getElementById('u157');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u162 = document.getElementById('u162');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u99 = document.getElementById('u99');

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u277 = document.getElementById('u277');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u323 = document.getElementById('u323');

var u391 = document.getElementById('u391');

u391.style.cursor = 'pointer';
if (bIE) u391.attachEvent("onclick", Clicku391);
else u391.addEventListener("click", Clicku391, true);
function Clicku391(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u391'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u399 = document.getElementById('u399');

u399.style.cursor = 'pointer';
if (bIE) u399.attachEvent("onclick", Clicku399);
else u399.addEventListener("click", Clicku399, true);
function Clicku399(e)
{

if (true) {

	SetPanelVisibilityu372("");

	SetPanelVisibilityu387("hidden");

}

}

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u331 = document.getElementById('u331');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u128 = document.getElementById('u128');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u346 = document.getElementById('u346');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u59 = document.getElementById('u59');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u103 = document.getElementById('u103');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u107 = document.getElementById('u107');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u401 = document.getElementById('u401');

if (bIE) u401.attachEvent("onmouseover", MouseOveru401);
else u401.addEventListener("mouseover", MouseOveru401, true);
function MouseOveru401(e)
{
if (!IsTrueMouseOver('u401',e)) return;
if (true) {

	SetPanelVisibilityu335("");

}

}

if (bIE) u401.attachEvent("onmouseout", MouseOutu401);
else u401.addEventListener("mouseout", MouseOutu401, true);
function MouseOutu401(e)
{
if (!IsTrueMouseOut('u401',e)) return;
if (true) {

	SetPanelVisibilityu335("hidden");

}

}

var u365 = document.getElementById('u365');

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u295 = document.getElementById('u295');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u143 = document.getElementById('u143');

var u122 = document.getElementById('u122');

var u260 = document.getElementById('u260');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u169 = document.getElementById('u169');

var u215 = document.getElementById('u215');

var u137 = document.getElementById('u137');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u141 = document.getElementById('u141');

var u20 = document.getElementById('u20');

var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{

if (true) {

	SetPanelVisibilityu221("hidden");

}

}

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u264 = document.getElementById('u264');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u183 = document.getElementById('u183');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u387 = document.getElementById('u387');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u344 = document.getElementById('u344');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u336 = document.getElementById('u336');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u191 = document.getElementById('u191');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u101 = document.getElementById('u101');

var u199 = document.getElementById('u199');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u88 = document.getElementById('u88');

var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u390 = document.getElementById('u390');

u390.style.cursor = 'pointer';
if (bIE) u390.attachEvent("onclick", Clicku390);
else u390.addEventListener("click", Clicku390, true);
function Clicku390(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u390'] = 'top';
var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u96 = document.getElementById('u96');

var u384 = document.getElementById('u384');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u12 = document.getElementById('u12');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u209 = document.getElementById('u209');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u377 = document.getElementById('u377');

u377.style.cursor = 'pointer';
if (bIE) u377.attachEvent("onclick", Clicku377);
else u377.addEventListener("click", Clicku377, true);
function Clicku377(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u377'] = 'top';
var u258 = document.getElementById('u258');

var u342 = document.getElementById('u342');

var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');

var u25 = document.getElementById('u25');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u179 = document.getElementById('u179');

var u185 = document.getElementById('u185');

var u335 = document.getElementById('u335');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');

var u92 = document.getElementById('u92');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u97 = document.getElementById('u97');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u353 = document.getElementById('u353');

var u37 = document.getElementById('u37');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u348 = document.getElementById('u348');

var u253 = document.getElementById('u253');

var u19 = document.getElementById('u19');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u153 = document.getElementById('u153');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u376 = document.getElementById('u376');

u376.style.cursor = 'pointer';
if (bIE) u376.attachEvent("onclick", Clicku376);
else u376.addEventListener("click", Clicku376, true);
function Clicku376(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u376'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u11 = document.getElementById('u11');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u222 = document.getElementById('u222');

var u213 = document.getElementById('u213');

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u132 = document.getElementById('u132');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u195 = document.getElementById('u195');

var u355 = document.getElementById('u355');

u355.style.cursor = 'pointer';
if (bIE) u355.attachEvent("onclick", Clicku355);
else u355.addEventListener("click", Clicku355, true);
function Clicku355(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u23 = document.getElementById('u23');

var u221 = document.getElementById('u221');

var u352 = document.getElementById('u352');

u352.style.cursor = 'pointer';
if (bIE) u352.attachEvent("onclick", Clicku352);
else u352.addEventListener("click", Clicku352, true);
function Clicku352(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u352'] = 'top';
var u61 = document.getElementById('u61');

var u293 = document.getElementById('u293');

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u151 = document.getElementById('u151');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
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

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u374'] = 'top';
var u201 = document.getElementById('u201');

var u135 = document.getElementById('u135');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u325 = document.getElementById('u325');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u171 = document.getElementById('u171');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u207 = document.getElementById('u207');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u14 = document.getElementById('u14');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u225 = document.getElementById('u225');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u382 = document.getElementById('u382');

u382.style.cursor = 'pointer';
if (bIE) u382.attachEvent("onclick", Clicku382);
else u382.addEventListener("click", Clicku382, true);
function Clicku382(e)
{

if (true) {

	SetPanelVisibilityu387("");

	SetPanelVisibilityu372("hidden");

}

}

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u329 = document.getElementById('u329');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u130 = document.getElementById('u130');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u55 = document.getElementById('u55');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u145 = document.getElementById('u145');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u359 = document.getElementById('u359');

u359.style.cursor = 'pointer';
if (bIE) u359.attachEvent("onclick", Clicku359);
else u359.addEventListener("click", Clicku359, true);
function Clicku359(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u375 = document.getElementById('u375');

u375.style.cursor = 'pointer';
if (bIE) u375.attachEvent("onclick", Clicku375);
else u375.addEventListener("click", Clicku375, true);
function Clicku375(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u375'] = 'top';
var u105 = document.getElementById('u105');

var u372 = document.getElementById('u372');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u116 = document.getElementById('u116');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u147 = document.getElementById('u147');

var u291 = document.getElementById('u291');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u149 = document.getElementById('u149');

var u299 = document.getElementById('u299');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u371 = document.getElementById('u371');

u371.style.cursor = 'pointer';
if (bIE) u371.attachEvent("onclick", Clicku371);
else u371.addEventListener("click", Clicku371, true);
function Clicku371(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u371'] = 'top';
var u219 = document.getElementById('u219');

var u389 = document.getElementById('u389');

u389.style.cursor = 'pointer';
if (bIE) u389.attachEvent("onclick", Clicku389);
else u389.addEventListener("click", Clicku389, true);
function Clicku389(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u389'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u4 = document.getElementById('u4');

var u273 = document.getElementById('u273');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u90 = document.getElementById('u90');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u268 = document.getElementById('u268');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u26 = document.getElementById('u26');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u350 = document.getElementById('u350');

u350.style.cursor = 'pointer';
if (bIE) u350.attachEvent("onclick", Clicku350);
else u350.addEventListener("click", Clicku350, true);
function Clicku350(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u350'] = 'top';
var u203 = document.getElementById('u203');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u361 = document.getElementById('u361');

if (bIE) u361.attachEvent("onmouseover", MouseOveru361);
else u361.addEventListener("mouseover", MouseOveru361, true);
function MouseOveru361(e)
{
if (!IsTrueMouseOver('u361',e)) return;
if (true) {

	SetPanelVisibilityu290("");

}

}

if (bIE) u361.attachEvent("onmouseout", MouseOutu361);
else u361.addEventListener("mouseout", MouseOutu361, true);
function MouseOutu361(e)
{
if (!IsTrueMouseOut('u361',e)) return;
if (true) {

	SetPanelVisibilityu290("hidden");

}

}

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u173 = document.getElementById('u173');

var u398 = document.getElementById('u398');

u398.style.cursor = 'pointer';
if (bIE) u398.attachEvent("onclick", Clicku398);
else u398.addEventListener("click", Clicku398, true);
function Clicku398(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u398'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u67 = document.getElementById('u67');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u290 = document.getElementById('u290');

var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u177 = document.getElementById('u177');

var u301 = document.getElementById('u301');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u363 = document.getElementById('u363');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u340 = document.getElementById('u340');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u367 = document.getElementById('u367');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u124 = document.getElementById('u124');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u218 = document.getElementById('u218');

u218.style.cursor = 'pointer';
if (bIE) u218.attachEvent("onclick", Clicku218);
else u218.addEventListener("click", Clicku218, true);
function Clicku218(e)
{

if (true) {

	self.location.href="地图查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u218'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	SetPanelVisibilityu221("");

}

}

if (bIE) u22.attachEvent("onfocus", Focusu22);
else u22.addEventListener("focus", Focusu22, true);
function Focusu22(e)
{

if (true) {

	SetPanelVisibilityu221("");

}

}

if (bIE) u22.attachEvent("onblur", LostFocusu22);
else u22.addEventListener("blur", LostFocusu22, true);
function LostFocusu22(e)
{

if (true) {

	SetPanelVisibilityu221("hidden");

}

}

var u272 = document.getElementById('u272');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u313 = document.getElementById('u313');

var u181 = document.getElementById('u181');

var u357 = document.getElementById('u357');

u357.style.cursor = 'pointer';
if (bIE) u357.attachEvent("onclick", Clicku357);
else u357.addEventListener("click", Clicku357, true);
function Clicku357(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u189 = document.getElementById('u189');

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u403 = document.getElementById('u403');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u114 = document.getElementById('u114');

var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u247 = document.getElementById('u247');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="查询列表.html" + GetQuerystring();

}

}

var u158 = document.getElementById('u158');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u15 = document.getElementById('u15');

var u155 = document.getElementById('u155');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u392 = document.getElementById('u392');

u392.style.cursor = 'pointer';
if (bIE) u392.attachEvent("onclick", Clicku392);
else u392.addEventListener("click", Clicku392, true);
function Clicku392(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u392'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u307 = document.getElementById('u307');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u56 = document.getElementById('u56');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u193 = document.getElementById('u193');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u338 = document.getElementById('u338');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
if (window.OnLoad) OnLoad();
