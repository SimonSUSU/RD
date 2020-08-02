
var PageName = '餐饮美食列表';
var PageId = 'p69da0f728ccc4c4e95b4d421aa19a98e'
var PageUrl = '餐饮美食列表.html'
document.title = '餐饮美食列表';

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

eval(GetDynamicPanelScript('u124', 1));

eval(GetDynamicPanelScript('u284', 1));

eval(GetDynamicPanelScript('u310', 1));

eval(GetDynamicPanelScript('u254', 1));

eval(GetDynamicPanelScript('u392', 1));

eval(GetDynamicPanelScript('u34', 1));

eval(GetDynamicPanelScript('u49', 1));

eval(GetDynamicPanelScript('u94', 1));

eval(GetDynamicPanelScript('u109', 1));

eval(GetDynamicPanelScript('u64', 1));

eval(GetDynamicPanelScript('u79', 1));

eval(GetDynamicPanelScript('u139', 1));

eval(GetDynamicPanelScript('u299', 1));

eval(GetDynamicPanelScript('u355', 1));

eval(GetDynamicPanelScript('u269', 1));

eval(GetDynamicPanelScript('u407', 1));

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u402 = document.getElementById('u402');

u402.style.cursor = 'pointer';
if (bIE) u402.attachEvent("onclick", Clicku402);
else u402.addEventListener("click", Clicku402, true);
function Clicku402(e)
{

if (true) {

	SetPanelVisibilityu407("");

	SetPanelVisibilityu392("hidden");

}

}

var u65 = document.getElementById('u65');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u428 = document.getElementById('u428');

var u162 = document.getElementById('u162');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u131 = document.getElementById('u131');

u131.style.cursor = 'pointer';
if (bIE) u131.attachEvent("onclick", Clicku131);
else u131.addEventListener("click", Clicku131, true);
function Clicku131(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u82'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u234 = document.getElementById('u234');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u391 = document.getElementById('u391');

u391.style.cursor = 'pointer';
if (bIE) u391.attachEvent("onclick", Clicku391);
else u391.addEventListener("click", Clicku391, true);
function Clicku391(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u391'] = 'top';
var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u229 = document.getElementById('u229');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u366 = document.getElementById('u366');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u331 = document.getElementById('u331');

var u270 = document.getElementById('u270');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'top';
var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u257'] = 'top';
var u306 = document.getElementById('u306');

u306.style.cursor = 'pointer';
if (bIE) u306.attachEvent("onclick", Clicku306);
else u306.addEventListener("click", Clicku306, true);
function Clicku306(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u278'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u187 = document.getElementById('u187');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u32.attachEvent("onmouseover", MouseOveru32);
else u32.addEventListener("mouseover", MouseOveru32, true);
function MouseOveru32(e)
{
if (!IsTrueMouseOver('u32',e)) return;
if (true) {

	SetPanelVisibilityu34("");

}

}

if (bIE) u32.attachEvent("onmouseout", MouseOutu32);
else u32.addEventListener("mouseout", MouseOutu32, true);
function MouseOutu32(e)
{
if (!IsTrueMouseOut('u32',e)) return;
if (true) {

	SetPanelVisibilityu34("hidden");

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u60'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u360 = document.getElementById('u360');

var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u103'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u107.attachEvent("onmouseover", MouseOveru107);
else u107.addEventListener("mouseover", MouseOveru107, true);
function MouseOveru107(e)
{
if (!IsTrueMouseOver('u107',e)) return;
if (true) {

	SetPanelVisibilityu109("");

}

}

if (bIE) u107.attachEvent("onmouseout", MouseOutu107);
else u107.addEventListener("mouseout", MouseOutu107, true);
function MouseOutu107(e)
{
if (!IsTrueMouseOut('u107',e)) return;
if (true) {

	SetPanelVisibilityu109("hidden");

}

}

var u368 = document.getElementById('u368');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u295'] = 'top';
var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u122.attachEvent("onmouseover", MouseOveru122);
else u122.addEventListener("mouseover", MouseOveru122, true);
function MouseOveru122(e)
{
if (!IsTrueMouseOver('u122',e)) return;
if (true) {

	SetPanelVisibilityu124("");

}

}

if (bIE) u122.attachEvent("onmouseout", MouseOutu122);
else u122.addEventListener("mouseout", MouseOutu122, true);
function MouseOutu122(e)
{
if (!IsTrueMouseOut('u122',e)) return;
if (true) {

	SetPanelVisibilityu124("hidden");

}

}

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u345 = document.getElementById('u345');

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u349 = document.getElementById('u349');

var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u215 = document.getElementById('u215');

var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u137.attachEvent("onmouseover", MouseOveru137);
else u137.addEventListener("mouseover", MouseOveru137, true);
function MouseOveru137(e)
{
if (!IsTrueMouseOver('u137',e)) return;
if (true) {

	SetPanelVisibilityu139("");

}

}

if (bIE) u137.attachEvent("onmouseout", MouseOutu137);
else u137.addEventListener("mouseout", MouseOutu137, true);
function MouseOutu137(e)
{
if (!IsTrueMouseOut('u137',e)) return;
if (true) {

	SetPanelVisibilityu139("hidden");

}

}

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u77.attachEvent("onmouseover", MouseOveru77);
else u77.addEventListener("mouseover", MouseOveru77, true);
function MouseOveru77(e)
{
if (!IsTrueMouseOver('u77',e)) return;
if (true) {

	SetPanelVisibilityu79("");

}

}

if (bIE) u77.attachEvent("onmouseout", MouseOutu77);
else u77.addEventListener("mouseout", MouseOutu77, true);
function MouseOutu77(e)
{
if (!IsTrueMouseOut('u77',e)) return;
if (true) {

	SetPanelVisibilityu79("hidden");

}

}

var u300 = document.getElementById('u300');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u20 = document.getElementById('u20');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u364 = document.getElementById('u364');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u109 = document.getElementById('u109');

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u255 = document.getElementById('u255');

var u183 = document.getElementById('u183');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u387 = document.getElementById('u387');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u191 = document.getElementById('u191');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u199 = document.getElementById('u199');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u140 = document.getElementById('u140');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u88'] = 'top';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'top';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u120'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');

u302.style.cursor = 'pointer';
if (bIE) u302.attachEvent("onclick", Clicku302);
else u302.addEventListener("click", Clicku302, true);
function Clicku302(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u302'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u80 = document.getElementById('u80');

var u163 = document.getElementById('u163');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u168 = document.getElementById('u168');

var u227 = document.getElementById('u227');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u16 = document.getElementById('u16');

var u362 = document.getElementById('u362');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u12 = document.getElementById('u12');

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u333 = document.getElementById('u333');

var u209 = document.getElementById('u209');

var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u421 = document.getElementById('u421');

if (bIE) u421.attachEvent("onmouseover", MouseOveru421);
else u421.addEventListener("mouseover", MouseOveru421, true);
function MouseOveru421(e)
{
if (!IsTrueMouseOver('u421',e)) return;
if (true) {

	SetPanelVisibilityu355("");

}

}

if (bIE) u421.attachEvent("onmouseout", MouseOutu421);
else u421.addEventListener("mouseout", MouseOutu421, true);
function MouseOutu421(e)
{
if (!IsTrueMouseOut('u421',e)) return;
if (true) {

	SetPanelVisibilityu355("hidden");

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u282 = document.getElementById('u282');

u282.style.cursor = 'pointer';
if (bIE) u282.attachEvent("onclick", Clicku282);
else u282.addEventListener("click", Clicku282, true);
function Clicku282(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u282.attachEvent("onmouseover", MouseOveru282);
else u282.addEventListener("mouseover", MouseOveru282, true);
function MouseOveru282(e)
{
if (!IsTrueMouseOver('u282',e)) return;
if (true) {

	SetPanelVisibilityu284("");

}

}

if (bIE) u282.attachEvent("onmouseout", MouseOutu282);
else u282.addEventListener("mouseout", MouseOutu282, true);
function MouseOutu282(e)
{
if (!IsTrueMouseOut('u282',e)) return;
if (true) {

	SetPanelVisibilityu284("hidden");

}

}

var u377 = document.getElementById('u377');

u377.style.cursor = 'pointer';
if (bIE) u377.attachEvent("onclick", Clicku377);
else u377.addEventListener("click", Clicku377, true);
function Clicku377(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u139 = document.getElementById('u139');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u284 = document.getElementById('u284');

var u179 = document.getElementById('u179');

var u185 = document.getElementById('u185');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u92.attachEvent("onmouseover", MouseOveru92);
else u92.addEventListener("mouseover", MouseOveru92, true);
function MouseOveru92(e)
{
if (!IsTrueMouseOver('u92',e)) return;
if (true) {

	SetPanelVisibilityu94("");

}

}

if (bIE) u92.attachEvent("onmouseout", MouseOutu92);
else u92.addEventListener("mouseout", MouseOutu92, true);
function MouseOutu92(e)
{
if (!IsTrueMouseOut('u92',e)) return;
if (true) {

	SetPanelVisibilityu94("hidden");

}

}

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u97'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u37'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u407 = document.getElementById('u407');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u34 = document.getElementById('u34');

var u153 = document.getElementById('u153');

var u412 = document.getElementById('u412');

u412.style.cursor = 'pointer';
if (bIE) u412.attachEvent("onclick", Clicku412);
else u412.addEventListener("click", Clicku412, true);
function Clicku412(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u412'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u280'] = 'top';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'top';
var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u118'] = 'top';
var u167 = document.getElementById('u167');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u28 = document.getElementById('u28');

var u356 = document.getElementById('u356');

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u43'] = 'top';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u75'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u213 = document.getElementById('u213');

var u383 = document.getElementById('u383');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'top';
var u239 = document.getElementById('u239');

var u237 = document.getElementById('u237');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u52'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u30'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u246 = document.getElementById('u246');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u195 = document.getElementById('u195');

var u355 = document.getElementById('u355');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u221 = document.getElementById('u221');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u293 = document.getElementById('u293');

u293.style.cursor = 'pointer';
if (bIE) u293.attachEvent("onclick", Clicku293);
else u293.addEventListener("click", Clicku293, true);
function Clicku293(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u293'] = 'top';
var u370 = document.getElementById('u370');

u370.style.cursor = 'pointer';
if (bIE) u370.attachEvent("onclick", Clicku370);
else u370.addEventListener("click", Clicku370, true);
function Clicku370(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u370'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u310 = document.getElementById('u310');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u201 = document.getElementById('u201');

var u411 = document.getElementById('u411');

u411.style.cursor = 'pointer';
if (bIE) u411.attachEvent("onclick", Clicku411);
else u411.addEventListener("click", Clicku411, true);
function Clicku411(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u411'] = 'top';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u135'] = 'top';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u127'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u419 = document.getElementById('u419');

u419.style.cursor = 'pointer';
if (bIE) u419.attachEvent("onclick", Clicku419);
else u419.addEventListener("click", Clicku419, true);
function Clicku419(e)
{

if (true) {

	SetPanelVisibilityu392("");

	SetPanelVisibilityu407("hidden");

}

}

var u325 = document.getElementById('u325');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u6 = document.getElementById('u6');

var u397 = document.getElementById('u397');

u397.style.cursor = 'pointer';
if (bIE) u397.attachEvent("onclick", Clicku397);
else u397.addEventListener("click", Clicku397, true);
function Clicku397(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u397'] = 'top';
var u171 = document.getElementById('u171');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u207 = document.getElementById('u207');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u14 = document.getElementById('u14');

var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u225 = document.getElementById('u225');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u373 = document.getElementById('u373');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u165 = document.getElementById('u165');

var u269 = document.getElementById('u269');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u315 = document.getElementById('u315');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u95 = document.getElementById('u95');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u254 = document.getElementById('u254');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u337 = document.getElementById('u337');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u442 = document.getElementById('u442');

var u351 = document.getElementById('u351');

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u375 = document.getElementById('u375');

u375.style.cursor = 'pointer';
if (bIE) u375.attachEvent("onclick", Clicku375);
else u375.addEventListener("click", Clicku375, true);
function Clicku375(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u105'] = 'top';
var u372 = document.getElementById('u372');

u372.style.cursor = 'pointer';
if (bIE) u372.attachEvent("onclick", Clicku372);
else u372.addEventListener("click", Clicku372, true);
function Clicku372(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u372'] = 'top';
var u64 = document.getElementById('u64');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u385 = document.getElementById('u385');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u418 = document.getElementById('u418');

u418.style.cursor = 'pointer';
if (bIE) u418.attachEvent("onclick", Clicku418);
else u418.addEventListener("click", Clicku418, true);
function Clicku418(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u418'] = 'top';
var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u395 = document.getElementById('u395');

u395.style.cursor = 'pointer';
if (bIE) u395.attachEvent("onclick", Clicku395);
else u395.addEventListener("click", Clicku395, true);
function Clicku395(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u395'] = 'top';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u308'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u299 = document.getElementById('u299');

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u58'] = 'top';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u45'] = 'top';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u73'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u381 = document.getElementById('u381');

if (bIE) u381.attachEvent("onmouseover", MouseOveru381);
else u381.addEventListener("mouseover", MouseOveru381, true);
function MouseOveru381(e)
{
if (!IsTrueMouseOver('u381',e)) return;
if (true) {

	SetPanelVisibilityu310("");

}

}

if (bIE) u381.attachEvent("onmouseout", MouseOutu381);
else u381.addEventListener("mouseout", MouseOutu381, true);
function MouseOutu381(e)
{
if (!IsTrueMouseOut('u381',e)) return;
if (true) {

	SetPanelVisibilityu310("hidden");

}

}

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u219 = document.getElementById('u219');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u50 = document.getElementById('u50');

var u4 = document.getElementById('u4');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u90'] = 'top';
var u8 = document.getElementById('u8');

var u394 = document.getElementById('u394');

u394.style.cursor = 'pointer';
if (bIE) u394.attachEvent("onclick", Clicku394);
else u394.addEventListener("click", Clicku394, true);
function Clicku394(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u394'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u327 = document.getElementById('u327');

var u444 = document.getElementById('u444');

var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u252.attachEvent("onmouseover", MouseOveru252);
else u252.addEventListener("mouseover", MouseOveru252, true);
function MouseOveru252(e)
{
if (!IsTrueMouseOver('u252',e)) return;
if (true) {

	SetPanelVisibilityu254("");

}

}

if (bIE) u252.attachEvent("onmouseout", MouseOutu252);
else u252.addEventListener("mouseout", MouseOutu252, true);
function MouseOutu252(e)
{
if (!IsTrueMouseOut('u252',e)) return;
if (true) {

	SetPanelVisibilityu254("hidden");

}

}

var u26 = document.getElementById('u26');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u379 = document.getElementById('u379');

u379.style.cursor = 'pointer';
if (bIE) u379.attachEvent("onclick", Clicku379);
else u379.addEventListener("click", Clicku379, true);
function Clicku379(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u446 = document.getElementById('u446');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u203 = document.getElementById('u203');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u241 = document.getElementById('u241');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u358 = document.getElementById('u358');

var u173 = document.getElementById('u173');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u35 = document.getElementById('u35');

var u321 = document.getElementById('u321');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u285 = document.getElementById('u285');

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u67'] = 'top';
var u133 = document.getElementById('u133');

u133.style.cursor = 'pointer';
if (bIE) u133.attachEvent("onclick", Clicku133);
else u133.addEventListener("click", Clicku133, true);
function Clicku133(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u133'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u410 = document.getElementById('u410');

u410.style.cursor = 'pointer';
if (bIE) u410.attachEvent("onclick", Clicku410);
else u410.addEventListener("click", Clicku410, true);
function Clicku410(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u410'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u177 = document.getElementById('u177');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u142'] = 'top';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u159 = document.getElementById('u159');

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u425 = document.getElementById('u425');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u124 = document.getElementById('u124');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u223 = document.getElementById('u223');

var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u267 = document.getElementById('u267');

u267.style.cursor = 'pointer';
if (bIE) u267.attachEvent("onclick", Clicku267);
else u267.addEventListener("click", Clicku267, true);
function Clicku267(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u267.attachEvent("onmouseover", MouseOveru267);
else u267.addEventListener("mouseover", MouseOveru267, true);
function MouseOveru267(e)
{
if (!IsTrueMouseOver('u267',e)) return;
if (true) {

	SetPanelVisibilityu269("");

}

}

if (bIE) u267.attachEvent("onmouseout", MouseOutu267);
else u267.addEventListener("mouseout", MouseOutu267, true);
function MouseOutu267(e)
{
if (!IsTrueMouseOut('u267',e)) return;
if (true) {

	SetPanelVisibilityu269("hidden");

}

}

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'center';
var u22 = document.getElementById('u22');

var u272 = document.getElementById('u272');

u272.style.cursor = 'pointer';
if (bIE) u272.attachEvent("onclick", Clicku272);
else u272.addEventListener("click", Clicku272, true);
function Clicku272(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u272'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u112'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u250'] = 'top';
var u49 = document.getElementById('u49');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u313 = document.getElementById('u313');

var u181 = document.getElementById('u181');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u265 = document.getElementById('u265');

u265.style.cursor = 'pointer';
if (bIE) u265.attachEvent("onclick", Clicku265);
else u265.addEventListener("click", Clicku265, true);
function Clicku265(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u265'] = 'top';
var u189 = document.getElementById('u189');

var u339 = document.getElementById('u339');

var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u62.attachEvent("onmouseover", MouseOveru62);
else u62.addEventListener("mouseover", MouseOveru62, true);
function MouseOveru62(e)
{
if (!IsTrueMouseOver('u62',e)) return;
if (true) {

	SetPanelVisibilityu64("");

}

}

if (bIE) u62.attachEvent("onmouseout", MouseOutu62);
else u62.addEventListener("mouseout", MouseOutu62, true);
function MouseOutu62(e)
{
if (!IsTrueMouseOut('u62',e)) return;
if (true) {

	SetPanelVisibilityu64("hidden");

}

}

var u409 = document.getElementById('u409');

u409.style.cursor = 'pointer';
if (bIE) u409.attachEvent("onclick", Clicku409);
else u409.addEventListener("click", Clicku409, true);
function Clicku409(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u409'] = 'top';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
var u79 = document.getElementById('u79');

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'center';
var u243 = document.getElementById('u243');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u404 = document.getElementById('u404');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u297 = document.getElementById('u297');

u297.style.cursor = 'pointer';
if (bIE) u297.attachEvent("onclick", Clicku297);
else u297.addEventListener("click", Clicku297, true);
function Clicku297(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u297.attachEvent("onmouseover", MouseOveru297);
else u297.addEventListener("mouseover", MouseOveru297, true);
function MouseOveru297(e)
{
if (!IsTrueMouseOver('u297',e)) return;
if (true) {

	SetPanelVisibilityu299("");

}

}

if (bIE) u297.attachEvent("onmouseout", MouseOutu297);
else u297.addEventListener("mouseout", MouseOutu297, true);
function MouseOutu297(e)
{
if (!IsTrueMouseOut('u297',e)) return;
if (true) {

	SetPanelVisibilityu299("hidden");

}

}

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u148'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u175 = document.getElementById('u175');

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u396 = document.getElementById('u396');

u396.style.cursor = 'pointer';
if (bIE) u396.attachEvent("onclick", Clicku396);
else u396.addEventListener("click", Clicku396, true);
function Clicku396(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u396'] = 'top';
var u10 = document.getElementById('u10');

var u423 = document.getElementById('u423');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u217 = document.getElementById('u217');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u249 = document.getElementById('u249');

var u235 = document.getElementById('u235');

var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

if (bIE) u47.attachEvent("onmouseover", MouseOveru47);
else u47.addEventListener("mouseover", MouseOveru47, true);
function MouseOveru47(e)
{
if (!IsTrueMouseOver('u47',e)) return;
if (true) {

	SetPanelVisibilityu49("");

}

}

if (bIE) u47.attachEvent("onmouseout", MouseOutu47);
else u47.addEventListener("mouseout", MouseOutu47, true);
function MouseOutu47(e)
{
if (!IsTrueMouseOut('u47',e)) return;
if (true) {

	SetPanelVisibilityu49("hidden");

}

}

var u392 = document.getElementById('u392');

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}
gv_vAlignTable['u287'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u24 = document.getElementById('u24');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}

var u263 = document.getElementById('u263');

u263.style.cursor = 'pointer';
if (bIE) u263.attachEvent("onclick", Clicku263);
else u263.addEventListener("click", Clicku263, true);
function Clicku263(e)
{

if (true) {

	self.location.href="餐饮美食详细.html" + GetQuerystring();

}

}
gv_vAlignTable['u263'] = 'top';
var u193 = document.getElementById('u193');

var u343 = document.getElementById('u343');

var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u18 = document.getElementById('u18');

if (window.OnLoad) OnLoad();
