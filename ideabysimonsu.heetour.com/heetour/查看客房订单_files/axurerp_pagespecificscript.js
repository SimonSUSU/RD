
var PageName = '查看客房订单';
var PageId = 'pf0fda5c40a4848d0af59dcc94762cb4d'
var PageUrl = '查看客房订单.html'
document.title = '查看客房订单';

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

eval(GetDynamicPanelScript('u215', 1));

eval(GetDynamicPanelScript('u260', 1));

eval(GetDynamicPanelScript('u204', 1));

eval(GetDynamicPanelScript('u312', 1));

eval(GetDynamicPanelScript('u297', 1));

var u62 = document.getElementById('u62');

var u307 = document.getElementById('u307');

u307.style.cursor = 'pointer';
if (bIE) u307.attachEvent("onclick", Clicku307);
else u307.addEventListener("click", Clicku307, true);
function Clicku307(e)
{

if (true) {

	SetPanelVisibilityu312("");

	SetPanelVisibilityu297("hidden");

}

}

var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u326 = document.getElementById('u326');

if (bIE) u326.attachEvent("onmouseover", MouseOveru326);
else u326.addEventListener("mouseover", MouseOveru326, true);
function MouseOveru326(e)
{
if (!IsTrueMouseOver('u326',e)) return;
if (true) {

	SetPanelVisibilityu260("");

}

}

if (bIE) u326.attachEvent("onmouseout", MouseOutu326);
else u326.addEventListener("mouseout", MouseOutu326, true);
function MouseOutu326(e)
{
if (!IsTrueMouseOut('u326',e)) return;
if (true) {

	SetPanelVisibilityu260("hidden");

}

}

var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u277'] = 'top';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u282 = document.getElementById('u282');

u282.style.cursor = 'pointer';
if (bIE) u282.attachEvent("onclick", Clicku282);
else u282.addEventListener("click", Clicku282, true);
function Clicku282(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u91 = document.getElementById('u91');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');

var u100 = document.getElementById('u100');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{

if (true) {

	SetPanelVisibilityu204("hidden");

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u260 = document.getElementById('u260');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u299 = document.getElementById('u299');

u299.style.cursor = 'pointer';
if (bIE) u299.attachEvent("onclick", Clicku299);
else u299.addEventListener("click", Clicku299, true);
function Clicku299(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u299'] = 'top';
var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u185 = document.getElementById('u185');

var u296 = document.getElementById('u296');

u296.style.cursor = 'pointer';
if (bIE) u296.attachEvent("onclick", Clicku296);
else u296.addEventListener("click", Clicku296, true);
function Clicku296(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u296'] = 'top';
var u301 = document.getElementById('u301');

u301.style.cursor = 'pointer';
if (bIE) u301.attachEvent("onclick", Clicku301);
else u301.addEventListener("click", Clicku301, true);
function Clicku301(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u301'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u132 = document.getElementById('u132');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u314 = document.getElementById('u314');

u314.style.cursor = 'pointer';
if (bIE) u314.attachEvent("onclick", Clicku314);
else u314.addEventListener("click", Clicku314, true);
function Clicku314(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u314'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u284 = document.getElementById('u284');

u284.style.cursor = 'pointer';
if (bIE) u284.attachEvent("onclick", Clicku284);
else u284.addEventListener("click", Clicku284, true);
function Clicku284(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');

var u181 = document.getElementById('u181');

var u302 = document.getElementById('u302');

u302.style.cursor = 'pointer';
if (bIE) u302.attachEvent("onclick", Clicku302);
else u302.addEventListener("click", Clicku302, true);
function Clicku302(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u302'] = 'top';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');

var u11 = document.getElementById('u11');

var u267 = document.getElementById('u267');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u140 = document.getElementById('u140');

var u315 = document.getElementById('u315');

u315.style.cursor = 'pointer';
if (bIE) u315.attachEvent("onclick", Clicku315);
else u315.addEventListener("click", Clicku315, true);
function Clicku315(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u315'] = 'top';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u288 = document.getElementById('u288');

var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u323 = document.getElementById('u323');

u323.style.cursor = 'pointer';
if (bIE) u323.attachEvent("onclick", Clicku323);
else u323.addEventListener("click", Clicku323, true);
function Clicku323(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u323'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="订单.html" + GetQuerystring();

}

}

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');

var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u316 = document.getElementById('u316');

u316.style.cursor = 'pointer';
if (bIE) u316.attachEvent("onclick", Clicku316);
else u316.addEventListener("click", Clicku316, true);
function Clicku316(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u316'] = 'top';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="支付卡管理.html" + GetQuerystring();

}

}

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u146 = document.getElementById('u146');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u275 = document.getElementById('u275');

u275.style.cursor = 'pointer';
if (bIE) u275.attachEvent("onclick", Clicku275);
else u275.addEventListener("click", Clicku275, true);
function Clicku275(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u275'] = 'top';
var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u317'] = 'top';
var u34 = document.getElementById('u34');

var u17 = document.getElementById('u17');

var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{

if (true) {

	NewWindow("打印客房订单.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u84 = document.getElementById('u84');

var u218 = document.getElementById('u218');

var u297 = document.getElementById('u297');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u242 = document.getElementById('u242');

var u286 = document.getElementById('u286');

if (bIE) u286.attachEvent("onmouseover", MouseOveru286);
else u286.addEventListener("mouseover", MouseOveru286, true);
function MouseOveru286(e)
{
if (!IsTrueMouseOver('u286',e)) return;
if (true) {

	SetPanelVisibilityu215("");

}

}

if (bIE) u286.attachEvent("onmouseout", MouseOutu286);
else u286.addEventListener("mouseout", MouseOutu286, true);
function MouseOutu286(e)
{
if (!IsTrueMouseOut('u286',e)) return;
if (true) {

	SetPanelVisibilityu215("hidden");

}

}

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{

if (true) {

	SetPanelVisibilityu204("");

}

}

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u312 = document.getElementById('u312');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u328 = document.getElementById('u328');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u263 = document.getElementById('u263');

var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u300'] = 'top';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u292 = document.getElementById('u292');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u57 = document.getElementById('u57');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u278 = document.getElementById('u278');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u290 = document.getElementById('u290');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');

var u324 = document.getElementById('u324');

u324.style.cursor = 'pointer';
if (bIE) u324.attachEvent("onclick", Clicku324);
else u324.addEventListener("click", Clicku324, true);
function Clicku324(e)
{

if (true) {

	SetPanelVisibilityu297("");

	SetPanelVisibilityu312("hidden");

}

}

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u273 = document.getElementById('u273');

var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');

var u309 = document.getElementById('u309');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="在线收藏夹.html" + GetQuerystring();

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u269 = document.getElementById('u269');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u31 = document.getElementById('u31');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u213 = document.getElementById('u213');

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{

if (true) {

SetWidgetRichText('u214', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'\\\'cb\\\'ce\\\'cc\\\'e5\'; color:#FF0000; font-size:13px;"><b>发送成功！请查收邮件！</b></span></div>'));

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
