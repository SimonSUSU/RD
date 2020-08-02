
var PageName = '餐饮美食订单';
var PageId = 'pc51ab98c6f704d128bb2cc889c4bcbd5'
var PageUrl = '餐饮美食订单.html'
document.title = '餐饮美食订单';

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

eval(GetDynamicPanelScript('u71', 1));

eval(GetDynamicPanelScript('u54', 1));

eval(GetDynamicPanelScript('u190', 1));

eval(GetDynamicPanelScript('u227', 1));

eval(GetDynamicPanelScript('u242', 1));

eval(GetDynamicPanelScript('u145', 1));

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	SetPanelVisibilityu71("");

}

}

var u256 = document.getElementById('u256');

if (bIE) u256.attachEvent("onmouseover", MouseOveru256);
else u256.addEventListener("mouseover", MouseOveru256, true);
function MouseOveru256(e)
{
if (!IsTrueMouseOver('u256',e)) return;
if (true) {

	SetPanelVisibilityu190("");

}

}

if (bIE) u256.attachEvent("onmouseout", MouseOutu256);
else u256.addEventListener("mouseout", MouseOutu256, true);
function MouseOutu256(e)
{
if (!IsTrueMouseOut('u256',e)) return;
if (true) {

	SetPanelVisibilityu190("hidden");

}

}

var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u247'] = 'top';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u226'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

	self.location.href="网上预订须知及条款.html" + GetQuerystring();

}

}
gv_vAlignTable['u59'] = 'top';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

}

}
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u246'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	SetPanelVisibilityu71("");

}

}

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u253 = document.getElementById('u253');

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u253'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

	SetPanelVisibilityu227("");

	SetPanelVisibilityu242("hidden");

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u242 = document.getElementById('u242');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u245'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');

u237.style.cursor = 'pointer';
if (bIE) u237.attachEvent("onclick", Clicku237);
else u237.addEventListener("click", Clicku237, true);
function Clicku237(e)
{

if (true) {

	SetPanelVisibilityu242("");

	SetPanelVisibilityu227("hidden");

}

}

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	SetPanelVisibilityu71("hidden");

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="餐饮订单提交了.html" + GetQuerystring();

}

}

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

}

}
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u24 = document.getElementById('u24');

var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');

u232.style.cursor = 'pointer';
if (bIE) u232.attachEvent("onclick", Clicku232);
else u232.addEventListener("click", Clicku232, true);
function Clicku232(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u232'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u216 = document.getElementById('u216');

if (bIE) u216.attachEvent("onmouseover", MouseOveru216);
else u216.addEventListener("mouseover", MouseOveru216, true);
function MouseOveru216(e)
{
if (!IsTrueMouseOver('u216',e)) return;
if (true) {

	SetPanelVisibilityu145("");

}

}

if (bIE) u216.attachEvent("onmouseout", MouseOutu216);
else u216.addEventListener("mouseout", MouseOutu216, true);
function MouseOutu216(e)
{
if (!IsTrueMouseOut('u216',e)) return;
if (true) {

	SetPanelVisibilityu145("hidden");

}

}

var u258 = document.getElementById('u258');

var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');

u212.style.cursor = 'pointer';
if (bIE) u212.attachEvent("onclick", Clicku212);
else u212.addEventListener("click", Clicku212, true);
function Clicku212(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');

var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	SetPanelVisibilityu54("");

}

}
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u230 = document.getElementById('u230');

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	SetPanelVisibilityu71("");

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

;

	SetPanelVisibilityu71("hidden");

}

}

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u229'] = 'top';
var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u244'] = 'top';
if (window.OnLoad) OnLoad();
