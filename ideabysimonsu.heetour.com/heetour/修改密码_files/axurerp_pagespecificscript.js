
var PageName = '修改密码';
var PageId = 'pd7f1387a370c458d9cf0f073a858e789'
var PageUrl = '修改密码.html'
document.title = '修改密码';

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

eval(GetDynamicPanelScript('u207', 1));

eval(GetDynamicPanelScript('u244', 1));

eval(GetDynamicPanelScript('u259', 1));

eval(GetDynamicPanelScript('u162', 1));

var u62 = document.getElementById('u62');

var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u247'] = 'top';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="支付卡管理.html" + GetQuerystring();

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u12 = document.getElementById('u12');

var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u262'] = 'top';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u270'] = 'top';
var u179 = document.getElementById('u179');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

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

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u248 = document.getElementById('u248');

u248.style.cursor = 'pointer';
if (bIE) u248.attachEvent("onclick", Clicku248);
else u248.addEventListener("click", Clicku248, true);
function Clicku248(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u207 = document.getElementById('u207');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u264'] = 'top';
var u185 = document.getElementById('u185');

var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');

if (bIE) u233.attachEvent("onmouseover", MouseOveru233);
else u233.addEventListener("mouseover", MouseOveru233, true);
function MouseOveru233(e)
{
if (!IsTrueMouseOver('u233',e)) return;
if (true) {

	SetPanelVisibilityu162("");

}

}

if (bIE) u233.attachEvent("onmouseout", MouseOutu233);
else u233.addEventListener("mouseout", MouseOutu233, true);
function MouseOutu233(e)
{
if (!IsTrueMouseOut('u233',e)) return;
if (true) {

	SetPanelVisibilityu162("hidden");

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');

u249.style.cursor = 'pointer';
if (bIE) u249.attachEvent("onclick", Clicku249);
else u249.addEventListener("click", Clicku249, true);
function Clicku249(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u125 = document.getElementById('u125');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

	SetPanelVisibilityu259("");

	SetPanelVisibilityu244("hidden");

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u243'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="在线收藏夹.html" + GetQuerystring();

}

}

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');

u222.style.cursor = 'pointer';
if (bIE) u222.attachEvent("onclick", Clicku222);
else u222.addEventListener("click", Clicku222, true);
function Clicku222(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u222'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');

u227.style.cursor = 'pointer';
if (bIE) u227.attachEvent("onclick", Clicku227);
else u227.addEventListener("click", Clicku227, true);
function Clicku227(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');

var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');

u263.style.cursor = 'pointer';
if (bIE) u263.attachEvent("onclick", Clicku263);
else u263.addEventListener("click", Clicku263, true);
function Clicku263(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u263'] = 'top';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');

var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u224'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u273 = document.getElementById('u273');

if (bIE) u273.attachEvent("onmouseover", MouseOveru273);
else u273.addEventListener("mouseover", MouseOveru273, true);
function MouseOveru273(e)
{
if (!IsTrueMouseOver('u273',e)) return;
if (true) {

	SetPanelVisibilityu207("");

}

}

if (bIE) u273.attachEvent("onmouseout", MouseOutu273);
else u273.addEventListener("mouseout", MouseOutu273, true);
function MouseOutu273(e)
{
if (!IsTrueMouseOut('u273',e)) return;
if (true) {

	SetPanelVisibilityu207("hidden");

}

}

var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{

if (true) {

	SetPanelVisibilityu244("");

	SetPanelVisibilityu259("hidden");

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="订单.html" + GetQuerystring();

}

}

var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
