
var PageName = '酷图页';
var PageId = 'p6ea09724346a4a5ebfb8704fe93abe4a'
var PageUrl = '酷图页.html'
document.title = '酷图页';

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

eval(GetDynamicPanelScript('u160', 1));

eval(GetDynamicPanelScript('u82', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u115', 1));

eval(GetDynamicPanelScript('u97', 1));

eval(GetDynamicPanelScript('u45', 1));

eval(GetDynamicPanelScript('u212', 1));

eval(GetDynamicPanelScript('u197', 1));

var u33 = document.getElementById('u33');

var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u126 = document.getElementById('u126');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u86'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u82 = document.getElementById('u82');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u216 = document.getElementById('u216');

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u216'] = 'top';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u99'] = 'top';
var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u234'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u323 = document.getElementById('u323');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u366 = document.getElementById('u366');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u331 = document.getElementById('u331');

var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u270'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u306 = document.getElementById('u306');

u306.style.cursor = 'pointer';
if (bIE) u306.attachEvent("onclick", Clicku306);
else u306.addEventListener("click", Clicku306, true);
function Clicku306(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u306'] = 'top';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u240 = document.getElementById('u240');

u240.style.cursor = 'pointer';
if (bIE) u240.attachEvent("onclick", Clicku240);
else u240.addEventListener("click", Clicku240, true);
function Clicku240(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u240'] = 'top';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u27 = document.getElementById('u27');

var u192 = document.getElementById('u192');

var u319 = document.getElementById('u319');

var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u108'] = 'top';
var u212 = document.getElementById('u212');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u60'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u5 = document.getElementById('u5');

var u360 = document.getElementById('u360');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u9 = document.getElementById('u9');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u368 = document.getElementById('u368');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u138 = document.getElementById('u138');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u169 = document.getElementById('u169');

var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", Clicku215);
else u215.addEventListener("click", Clicku215, true);
function Clicku215(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u215'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u102'] = 'top';
var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u85'] = 'top';
var u77 = document.getElementById('u77');

var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u300'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u226 = document.getElementById('u226');

if (bIE) u226.attachEvent("onmouseover", MouseOveru226);
else u226.addEventListener("mouseover", MouseOveru226, true);
function MouseOveru226(e)
{
if (!IsTrueMouseOver('u226',e)) return;
if (true) {

	SetPanelVisibilityu160("");

}

}

if (bIE) u226.attachEvent("onmouseout", MouseOutu226);
else u226.addEventListener("mouseout", MouseOutu226, true);
function MouseOutu226(e)
{
if (!IsTrueMouseOut('u226',e)) return;
if (true) {

	SetPanelVisibilityu160("hidden");

}

}

var u364 = document.getElementById('u364');

var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u264'] = 'top';
var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

	SetPanelVisibilityu82("");

	SetPanelVisibilityu97("hidden");

}

}

var u255 = document.getElementById('u255');

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u255'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u54 = document.getElementById('u54');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');

if (bIE) u186.attachEvent("onmouseover", MouseOveru186);
else u186.addEventListener("mouseover", MouseOveru186, true);
function MouseOveru186(e)
{
if (!IsTrueMouseOver('u186',e)) return;
if (true) {

	SetPanelVisibilityu115("");

}

}

if (bIE) u186.attachEvent("onmouseout", MouseOutu186);
else u186.addEventListener("mouseout", MouseOutu186, true);
function MouseOutu186(e)
{
if (!IsTrueMouseOut('u186',e)) return;
if (true) {

	SetPanelVisibilityu115("hidden");

}

}

var u279 = document.getElementById('u279');

u279.style.cursor = 'pointer';
if (bIE) u279.attachEvent("onclick", Clicku279);
else u279.addEventListener("click", Clicku279, true);
function Clicku279(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u279'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u136 = document.getElementById('u136');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u101'] = 'top';
var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u199'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u48 = document.getElementById('u48');

var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u111 = document.getElementById('u111');

if (bIE) u111.attachEvent("onmouseover", MouseOveru111);
else u111.addEventListener("mouseover", MouseOveru111, true);
function MouseOveru111(e)
{
if (!IsTrueMouseOver('u111',e)) return;
if (true) {

	SetPanelVisibilityu45("");

}

}

if (bIE) u111.attachEvent("onmouseout", MouseOutu111);
else u111.addEventListener("mouseout", MouseOutu111, true);
function MouseOutu111(e)
{
if (!IsTrueMouseOut('u111',e)) return;
if (true) {

	SetPanelVisibilityu45("hidden");

}

}

var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u294'] = 'top';
var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u289 = document.getElementById('u289');

u289.style.cursor = 'pointer';
if (bIE) u289.attachEvent("onclick", Clicku289);
else u289.addEventListener("click", Clicku289, true);
function Clicku289(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u3 = document.getElementById('u3');

var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u163 = document.getElementById('u163');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u362 = document.getElementById('u362');

var u232 = document.getElementById('u232');

u232.style.cursor = 'pointer';
if (bIE) u232.attachEvent("onclick", Clicku232);
else u232.addEventListener("click", Clicku232, true);
function Clicku232(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u333 = document.getElementById('u333');

var u209 = document.getElementById('u209');

var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u276'] = 'top';
var u154 = document.getElementById('u154');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u282 = document.getElementById('u282');

u282.style.cursor = 'pointer';
if (bIE) u282.attachEvent("onclick", Clicku282);
else u282.addEventListener("click", Clicku282, true);
function Clicku282(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u282'] = 'top';
var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u258 = document.getElementById('u258');

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u258'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u335 = document.getElementById('u335');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	SetPanelVisibilityu97("");

	SetPanelVisibilityu82("hidden");

}

}

var u228 = document.getElementById('u228');

var u97 = document.getElementById('u97');

var u190 = document.getElementById('u190');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u253 = document.getElementById('u253');

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u376 = document.getElementById('u376');

var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');

var u288 = document.getElementById('u288');

u288.style.cursor = 'pointer';
if (bIE) u288.attachEvent("onclick", Clicku288);
else u288.addEventListener("click", Clicku288, true);
function Clicku288(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u288'] = 'top';
var u11 = document.getElementById('u11');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u356 = document.getElementById('u356');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u75 = document.getElementById('u75');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u237 = document.getElementById('u237');

u237.style.cursor = 'pointer';
if (bIE) u237.attachEvent("onclick", Clicku237);
else u237.addEventListener("click", Clicku237, true);
function Clicku237(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u237'] = 'top';
var u1 = document.getElementById('u1');

var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u202'] = 'top';
var u52 = document.getElementById('u52');

var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u246'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u132 = document.getElementById('u132');

var u184 = document.getElementById('u184');

u184.style.cursor = 'pointer';
if (bIE) u184.attachEvent("onclick", Clicku184);
else u184.addEventListener("click", Clicku184, true);
function Clicku184(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u23 = document.getElementById('u23');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u352 = document.getElementById('u352');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u370 = document.getElementById('u370');

var u283 = document.getElementById('u283');

u283.style.cursor = 'pointer';
if (bIE) u283.attachEvent("onclick", Clicku283);
else u283.addEventListener("click", Clicku283, true);
function Clicku283(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');

var u21 = document.getElementById('u21');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u374 = document.getElementById('u374');

var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u201'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u292 = document.getElementById('u292');

u292.style.cursor = 'pointer';
if (bIE) u292.attachEvent("onclick", Clicku292);
else u292.addEventListener("click", Clicku292, true);
function Clicku292(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u325 = document.getElementById('u325');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u171 = document.getElementById('u171');

var u113 = document.getElementById('u113');

var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{

if (true) {

	SetPanelVisibilityu212("");

	SetPanelVisibilityu197("hidden");

}

}

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u46 = document.getElementById('u46');

var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');

var u39 = document.getElementById('u39');

var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u329 = document.getElementById('u329');

var u238 = document.getElementById('u238');

u238.style.cursor = 'pointer';
if (bIE) u238.attachEvent("onclick", Clicku238);
else u238.addEventListener("click", Clicku238, true);
function Clicku238(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u165 = document.getElementById('u165');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u130 = document.getElementById('u130');

var u315 = document.getElementById('u315');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u196'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u304 = document.getElementById('u304');

u304.style.cursor = 'pointer';
if (bIE) u304.attachEvent("onclick", Clicku304);
else u304.addEventListener("click", Clicku304, true);
function Clicku304(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u372 = document.getElementById('u372');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u116 = document.getElementById('u116');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u100'] = 'top';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u291'] = 'top';
var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u214'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u41 = document.getElementById('u41');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u58 = document.getElementById('u58');

var u45 = document.getElementById('u45');

var u73 = document.getElementById('u73');

var u303 = document.getElementById('u303');

u303.style.cursor = 'pointer';
if (bIE) u303.attachEvent("onclick", Clicku303);
else u303.addEventListener("click", Clicku303, true);
function Clicku303(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u303'] = 'top';
var u144 = document.getElementById('u144');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u178 = document.getElementById('u178');

var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{

if (true) {

	SetPanelVisibilityu197("");

	SetPanelVisibilityu212("hidden");

}

}

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u50 = document.getElementById('u50');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u273 = document.getElementById('u273');

u273.style.cursor = 'pointer';
if (bIE) u273.attachEvent("onclick", Clicku273);
else u273.addEventListener("click", Clicku273, true);
function Clicku273(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u273'] = 'top';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u268 = document.getElementById('u268');

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u327 = document.getElementById('u327');

var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u252'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u309 = document.getElementById('u309');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u358 = document.getElementById('u358');

var u173 = document.getElementById('u173');

var u115 = document.getElementById('u115');

var u35 = document.getElementById('u35');

var u321 = document.getElementById('u321');

var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u81'] = 'top';
var u285 = document.getElementById('u285');

u285.style.cursor = 'pointer';
if (bIE) u285.attachEvent("onclick", Clicku285);
else u285.addEventListener("click", Clicku285, true);
function Clicku285(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u285'] = 'top';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u177'] = 'top';
var u301 = document.getElementById('u301');

u301.style.cursor = 'pointer';
if (bIE) u301.attachEvent("onclick", Clicku301);
else u301.addEventListener("click", Clicku301, true);
function Clicku301(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u142 = document.getElementById('u142');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u29 = document.getElementById('u29');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u84'] = 'top';
var u124 = document.getElementById('u124');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u223'] = 'top';
var u380 = document.getElementById('u380');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u17 = document.getElementById('u17');

var u267 = document.getElementById('u267');

u267.style.cursor = 'pointer';
if (bIE) u267.attachEvent("onclick", Clicku267);
else u267.addEventListener("click", Clicku267, true);
function Clicku267(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u267'] = 'top';
var u161 = document.getElementById('u161');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u313 = document.getElementById('u313');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u265 = document.getElementById('u265');

u265.style.cursor = 'pointer';
if (bIE) u265.attachEvent("onclick", Clicku265);
else u265.addEventListener("click", Clicku265, true);
function Clicku265(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u62'] = 'top';
var u354 = document.getElementById('u354');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u243'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u297 = document.getElementById('u297');

u297.style.cursor = 'pointer';
if (bIE) u297.attachEvent("onclick", Clicku297);
else u297.addEventListener("click", Clicku297, true);
function Clicku297(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u297'] = 'top';
var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u148 = document.getElementById('u148');

var u274 = document.getElementById('u274');

u274.style.cursor = 'pointer';
if (bIE) u274.attachEvent("onclick", Clicku274);
else u274.addEventListener("click", Clicku274, true);
function Clicku274(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u71 = document.getElementById('u71');

if (bIE) u71.attachEvent("onmouseover", MouseOveru71);
else u71.addEventListener("mouseover", MouseOveru71, true);
function MouseOveru71(e)
{
if (!IsTrueMouseOver('u71',e)) return;
if (true) {

	SetPanelVisibilityu0("");

}

}

if (bIE) u71.attachEvent("onmouseout", MouseOutu71);
else u71.addEventListener("mouseout", MouseOutu71, true);
function MouseOutu71(e)
{
if (!IsTrueMouseOut('u71',e)) return;
if (true) {

	SetPanelVisibilityu0("hidden");

}

}

var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u200'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u217 = document.getElementById('u217');

u217.style.cursor = 'pointer';
if (bIE) u217.attachEvent("onclick", Clicku217);
else u217.addEventListener("click", Clicku217, true);
function Clicku217(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u217'] = 'top';
var u15 = document.getElementById('u15');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}
gv_vAlignTable['u249'] = 'top';
var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u87'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{

if (true) {

	self.location.href="详细页2.html" + GetQuerystring();

}

}

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
gv_vAlignTable['u193'] = 'center';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u338 = document.getElementById('u338');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
if (window.OnLoad) OnLoad();
