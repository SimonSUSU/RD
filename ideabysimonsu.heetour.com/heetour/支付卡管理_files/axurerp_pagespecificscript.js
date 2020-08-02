
var PageName = '支付卡管理';
var PageId = 'p6c9d067889684c228a9d011e26636e18'
var PageUrl = '支付卡管理.html'
document.title = '支付卡管理';

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

eval(GetDynamicPanelScript('u306', 1));

eval(GetDynamicPanelScript('u321', 1));

eval(GetDynamicPanelScript('u224', 1));

eval(GetDynamicPanelScript('u269', 1));

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u325 = document.getElementById('u325');

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u325'] = 'top';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u251 = document.getElementById('u251');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u326'] = 'top';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u310 = document.getElementById('u310');

u310.style.cursor = 'pointer';
if (bIE) u310.attachEvent("onclick", Clicku310);
else u310.addEventListener("click", Clicku310, true);
function Clicku310(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u310'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u282 = document.getElementById('u282');

var u56 = document.getElementById('u56');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u333 = document.getElementById('u333');

u333.style.cursor = 'pointer';
if (bIE) u333.attachEvent("onclick", Clicku333);
else u333.addEventListener("click", Clicku333, true);
function Clicku333(e)
{

if (true) {

	SetPanelVisibilityu306("");

	SetPanelVisibilityu321("hidden");

}

}

var u173 = document.getElementById('u173');

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');

var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u295 = document.getElementById('u295');

if (bIE) u295.attachEvent("onmouseover", MouseOveru295);
else u295.addEventListener("mouseover", MouseOveru295, true);
function MouseOveru295(e)
{
if (!IsTrueMouseOver('u295',e)) return;
if (true) {

	SetPanelVisibilityu224("");

}

}

if (bIE) u295.attachEvent("onmouseout", MouseOutu295);
else u295.addEventListener("mouseout", MouseOutu295, true);
function MouseOutu295(e)
{
if (!IsTrueMouseOut('u295',e)) return;
if (true) {

	SetPanelVisibilityu224("hidden");

}

}

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u257 = document.getElementById('u257');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u265 = document.getElementById('u265');

var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u209 = document.getElementById('u209');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u321 = document.getElementById('u321');

var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u287 = document.getElementById('u287');

var u299 = document.getElementById('u299');

var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u332'] = 'top';
var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u301 = document.getElementById('u301');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');

var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u284 = document.getElementById('u284');

u284.style.cursor = 'pointer';
if (bIE) u284.attachEvent("onclick", Clicku284);
else u284.addEventListener("click", Clicku284, true);
function Clicku284(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u284'] = 'top';
var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u125 = document.getElementById('u125');

var u335 = document.getElementById('u335');

if (bIE) u335.attachEvent("onmouseover", MouseOveru335);
else u335.addEventListener("mouseover", MouseOveru335, true);
function MouseOveru335(e)
{
if (!IsTrueMouseOver('u335',e)) return;
if (true) {

	SetPanelVisibilityu269("");

}

}

if (bIE) u335.attachEvent("onmouseout", MouseOutu335);
else u335.addEventListener("mouseout", MouseOutu335, true);
function MouseOutu335(e)
{
if (!IsTrueMouseOut('u335',e)) return;
if (true) {

	SetPanelVisibilityu269("hidden");

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u253 = document.getElementById('u253');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u181 = document.getElementById('u181');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u323 = document.getElementById('u323');

u323.style.cursor = 'pointer';
if (bIE) u323.attachEvent("onclick", Clicku323);
else u323.addEventListener("click", Clicku323, true);
function Clicku323(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u323'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');

var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u337 = document.getElementById('u337');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u8 = document.getElementById('u8');

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

	SetPanelVisibilityu321("");

	SetPanelVisibilityu306("hidden");

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u293 = document.getElementById('u293');

u293.style.cursor = 'pointer';
if (bIE) u293.attachEvent("onclick", Clicku293);
else u293.addEventListener("click", Clicku293, true);
function Clicku293(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u311 = document.getElementById('u311');

u311.style.cursor = 'pointer';
if (bIE) u311.attachEvent("onclick", Clicku311);
else u311.addEventListener("click", Clicku311, true);
function Clicku311(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u311'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u289 = document.getElementById('u289');

u289.style.cursor = 'pointer';
if (bIE) u289.attachEvent("onclick", Clicku289);
else u289.addEventListener("click", Clicku289, true);
function Clicku289(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="个人资料.html" + GetQuerystring();

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u297 = document.getElementById('u297');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u286'] = 'top';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u247 = document.getElementById('u247');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="订单.html" + GetQuerystring();

}

}

var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u239 = document.getElementById('u239');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="在线收藏夹.html" + GetQuerystring();

}

}

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u308'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u211 = document.getElementById('u211');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u306 = document.getElementById('u306');

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

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
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u90 = document.getElementById('u90');

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u278 = document.getElementById('u278');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u24 = document.getElementById('u24');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u324 = document.getElementById('u324');

u324.style.cursor = 'pointer';
if (bIE) u324.attachEvent("onclick", Clicku324);
else u324.addEventListener("click", Clicku324, true);
function Clicku324(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u324'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u280 = document.getElementById('u280');

var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u309'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u15 = document.getElementById('u15');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u269 = document.getElementById('u269');

var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u205 = document.getElementById('u205');

var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');

var u272 = document.getElementById('u272');

var u318 = document.getElementById('u318');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u229 = document.getElementById('u229');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
if (window.OnLoad) OnLoad();
