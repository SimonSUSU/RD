
var PageName = '在线收藏夹';
var PageId = 'p5660001254d34548bd8e9e808b329b41'
var PageUrl = '在线收藏夹.html'
document.title = '在线收藏夹';

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

eval(GetDynamicPanelScript('u290', 1));

eval(GetDynamicPanelScript('u327', 1));

eval(GetDynamicPanelScript('u342', 1));

eval(GetDynamicPanelScript('u245', 1));

var u62 = document.getElementById('u62');

var u307 = document.getElementById('u307');

u307.style.cursor = 'pointer';
if (bIE) u307.attachEvent("onclick", Clicku307);
else u307.addEventListener("click", Clicku307, true);
function Clicku307(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u307'] = 'top';
var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="订单.html" + GetQuerystring();

}

}

var u226 = document.getElementById('u226');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u326'] = 'top';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u310 = document.getElementById('u310');

u310.style.cursor = 'pointer';
if (bIE) u310.attachEvent("onclick", Clicku310);
else u310.addEventListener("click", Clicku310, true);
function Clicku310(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u179 = document.getElementById('u179');

var u268 = document.getElementById('u268');

var u295 = document.getElementById('u295');

var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u346'] = 'top';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u354 = document.getElementById('u354');

u354.style.cursor = 'pointer';
if (bIE) u354.attachEvent("onclick", Clicku354);
else u354.addEventListener("click", Clicku354, true);
function Clicku354(e)
{

if (true) {

	SetPanelVisibilityu327("");

	SetPanelVisibilityu342("hidden");

}

}

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u260 = document.getElementById('u260');

var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u299 = document.getElementById('u299');

var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u332'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u291 = document.getElementById('u291');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u185 = document.getElementById('u185');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u301 = document.getElementById('u301');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');

var u314 = document.getElementById('u314');

u314.style.cursor = 'pointer';
if (bIE) u314.attachEvent("onclick", Clicku314);
else u314.addEventListener("click", Clicku314, true);
function Clicku314(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u322 = document.getElementById('u322');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u94 = document.getElementById('u94');

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
gv_vAlignTable['u7'] = 'center';
var u284 = document.getElementById('u284');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u96 = document.getElementById('u96');

var u342 = document.getElementById('u342');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u331 = document.getElementById('u331');

u331.style.cursor = 'pointer';
if (bIE) u331.attachEvent("onclick", Clicku331);
else u331.addEventListener("click", Clicku331, true);
function Clicku331(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u331'] = 'top';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');

var u345 = document.getElementById('u345');

u345.style.cursor = 'pointer';
if (bIE) u345.attachEvent("onclick", Clicku345);
else u345.addEventListener("click", Clicku345, true);
function Clicku345(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u345'] = 'top';
var u181 = document.getElementById('u181');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u358 = document.getElementById('u358');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');

var u339 = document.getElementById('u339');

var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="支付卡管理.html" + GetQuerystring();

}

}

var u337 = document.getElementById('u337');

u337.style.cursor = 'pointer';
if (bIE) u337.attachEvent("onclick", Clicku337);
else u337.addEventListener("click", Clicku337, true);
function Clicku337(e)
{

if (true) {

	SetPanelVisibilityu342("");

	SetPanelVisibilityu327("hidden");

}

}

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u356 = document.getElementById('u356');

if (bIE) u356.attachEvent("onmouseover", MouseOveru356);
else u356.addEventListener("mouseover", MouseOveru356, true);
function MouseOveru356(e)
{
if (!IsTrueMouseOver('u356',e)) return;
if (true) {

	SetPanelVisibilityu290("");

}

}

if (bIE) u356.attachEvent("onmouseout", MouseOutu356);
else u356.addEventListener("mouseout", MouseOutu356, true);
function MouseOutu356(e)
{
if (!IsTrueMouseOut('u356',e)) return;
if (true) {

	SetPanelVisibilityu290("hidden");

}

}

var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u330'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u303 = document.getElementById('u303');

var u316 = document.getElementById('u316');

if (bIE) u316.attachEvent("onmouseover", MouseOveru316);
else u316.addEventListener("mouseover", MouseOveru316, true);
function MouseOveru316(e)
{
if (!IsTrueMouseOver('u316',e)) return;
if (true) {

	SetPanelVisibilityu245("");

}

}

if (bIE) u316.attachEvent("onmouseout", MouseOutu316);
else u316.addEventListener("mouseout", MouseOutu316, true);
function MouseOutu316(e)
{
if (!IsTrueMouseOut('u316',e)) return;
if (true) {

	SetPanelVisibilityu245("hidden");

}

}

var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u293 = document.getElementById('u293');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u34 = document.getElementById('u34');

var u344 = document.getElementById('u344');

u344.style.cursor = 'pointer';
if (bIE) u344.attachEvent("onclick", Clicku344);
else u344.addEventListener("click", Clicku344, true);
function Clicku344(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u344'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u99 = document.getElementById('u99');

var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u297 = document.getElementById('u297');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u286 = document.getElementById('u286');

var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');

var u312 = document.getElementById('u312');

u312.style.cursor = 'pointer';
if (bIE) u312.attachEvent("onclick", Clicku312);
else u312.addEventListener("click", Clicku312, true);
function Clicku312(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u143 = document.getElementById('u143');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u320 = document.getElementById('u320');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u308 = document.getElementById('u308');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u305 = document.getElementById('u305');

u305.style.cursor = 'pointer';
if (bIE) u305.attachEvent("onclick", Clicku305);
else u305.addEventListener("click", Clicku305, true);
function Clicku305(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u305'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u189 = document.getElementById('u189');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u278 = document.getElementById('u278');

var u329 = document.getElementById('u329');

u329.style.cursor = 'pointer';
if (bIE) u329.attachEvent("onclick", Clicku329);
else u329.addEventListener("click", Clicku329, true);
function Clicku329(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u329'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u290 = document.getElementById('u290');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u232 = document.getElementById('u232');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u280 = document.getElementById('u280');

var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');

var u347 = document.getElementById('u347');

u347.style.cursor = 'pointer';
if (bIE) u347.attachEvent("onclick", Clicku347);
else u347.addEventListener("click", Clicku347, true);
function Clicku347(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u347'] = 'top';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u107 = document.getElementById('u107');

var u327 = document.getElementById('u327');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u272 = document.getElementById('u272');

var u318 = document.getElementById('u318');

var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u353 = document.getElementById('u353');

u353.style.cursor = 'pointer';
if (bIE) u353.attachEvent("onclick", Clicku353);
else u353.addEventListener("click", Clicku353, true);
function Clicku353(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u353'] = 'top';
if (window.OnLoad) OnLoad();
