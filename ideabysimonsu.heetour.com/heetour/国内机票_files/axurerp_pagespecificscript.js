
var PageName = '国内机票';
var PageId = 'pf44aadd0d2bd4bbd86ab9a9b5896b266'
var PageUrl = '国内机票.html'
document.title = '国内机票';

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

eval(GetDynamicPanelScript('u82', 1));

eval(GetDynamicPanelScript('u97', 1));

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u45', 1));

eval(GetDynamicPanelScript('u318', 1));

eval(GetDynamicPanelScript('u145', 1));

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
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u226 = document.getElementById('u226');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');

var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');

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

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
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

	SetPanelVisibilityu318("");

}

}

var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

	SetPanelVisibilityu145("");

}

}

if (bIE) u128.attachEvent("onfocus", Focusu128);
else u128.addEventListener("focus", Focusu128, true);
function Focusu128(e)
{

if (true) {

	SetPanelVisibilityu145("");

}

}

if (bIE) u128.attachEvent("onblur", LostFocusu128);
else u128.addEventListener("blur", LostFocusu128, true);
function LostFocusu128(e)
{

if (true) {

	SetPanelVisibilityu145("hidden");

}

}

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u282 = document.getElementById('u282');

u282.style.cursor = 'pointer';
if (bIE) u282.attachEvent("onclick", Clicku282);
else u282.addEventListener("click", Clicku282, true);
function Clicku282(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u268 = document.getElementById('u268');

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

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
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
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
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');

var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');

u260.style.cursor = 'pointer';
if (bIE) u260.attachEvent("onclick", Clicku260);
else u260.addEventListener("click", Clicku260, true);
function Clicku260(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{

if (true) {

	SetPanelVisibilityu145("");

}

}

if (bIE) u129.attachEvent("onfocus", Focusu129);
else u129.addEventListener("focus", Focusu129, true);
function Focusu129(e)
{

if (true) {

	SetPanelVisibilityu145("");

}

}

if (bIE) u129.attachEvent("onblur", LostFocusu129);
else u129.addEventListener("blur", LostFocusu129, true);
function LostFocusu129(e)
{

if (true) {

	SetPanelVisibilityu145("hidden");

}

}

var u194 = document.getElementById('u194');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u334 = document.getElementById('u334');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u296 = document.getElementById('u296');

u296.style.cursor = 'pointer';
if (bIE) u296.attachEvent("onclick", Clicku296);
else u296.addEventListener("click", Clicku296, true);
function Clicku296(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');

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

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

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
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');

var u314 = document.getElementById('u314');

u314.style.cursor = 'pointer';
if (bIE) u314.attachEvent("onclick", Clicku314);
else u314.addEventListener("click", Clicku314, true);
function Clicku314(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
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
var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');

var u322 = document.getElementById('u322');

var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
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

	SetPanelVisibilityu318("");

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u335 = document.getElementById('u335');

u335.style.cursor = 'pointer';
if (bIE) u335.attachEvent("onclick", Clicku335);
else u335.addEventListener("click", Clicku335, true);
function Clicku335(e)
{

if (true) {

	self.location.href="特价票详细和订单.html" + GetQuerystring();

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u331 = document.getElementById('u331');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u302 = document.getElementById('u302');

u302.style.cursor = 'pointer';
if (bIE) u302.attachEvent("onclick", Clicku302);
else u302.addEventListener("click", Clicku302, true);
function Clicku302(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');

u288.style.cursor = 'pointer';
if (bIE) u288.attachEvent("onclick", Clicku288);
else u288.addEventListener("click", Clicku288, true);
function Clicku288(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');

var u323 = document.getElementById('u323');

u323.style.cursor = 'pointer';
if (bIE) u323.attachEvent("onclick", Clicku323);
else u323.addEventListener("click", Clicku323, true);
function Clicku323(e)
{

if (true) {

	SetPanelVisibilityu318("hidden");

}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');

var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u274 = document.getElementById('u274');

u274.style.cursor = 'pointer';
if (bIE) u274.attachEvent("onclick", Clicku274);
else u274.addEventListener("click", Clicku274, true);
function Clicku274(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');

var u330 = document.getElementById('u330');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
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
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u316 = document.getElementById('u316');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u304 = document.getElementById('u304');

u304.style.cursor = 'pointer';
if (bIE) u304.attachEvent("onclick", Clicku304);
else u304.addEventListener("click", Clicku304, true);
function Clicku304(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
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

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
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
var u146 = document.getElementById('u146');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u236 = document.getElementById('u236');

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
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u1 = document.getElementById('u1');

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

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u242 = document.getElementById('u242');

var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u312 = document.getElementById('u312');

u312.style.cursor = 'pointer';
if (bIE) u312.attachEvent("onclick", Clicku312);
else u312.addEventListener("click", Clicku312, true);
function Clicku312(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u338 = document.getElementById('u338');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u328 = document.getElementById('u328');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
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
var u204 = document.getElementById('u204');

var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
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
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{

if (true) {

	SetPanelVisibilityu145("hidden");

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
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

	SetPanelVisibilityu318("");

}

}

var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u292 = document.getElementById('u292');

u292.style.cursor = 'pointer';
if (bIE) u292.attachEvent("onclick", Clicku292);
else u292.addEventListener("click", Clicku292, true);
function Clicku292(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u306 = document.getElementById('u306');

u306.style.cursor = 'pointer';
if (bIE) u306.attachEvent("onclick", Clicku306);
else u306.addEventListener("click", Clicku306, true);
function Clicku306(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

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

var u5 = document.getElementById('u5');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u340 = document.getElementById('u340');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
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
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

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
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u258 = document.getElementById('u258');

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u15 = document.getElementById('u15');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u327 = document.getElementById('u327');

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
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

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u319 = document.getElementById('u319');

var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u272 = document.getElementById('u272');

u272.style.cursor = 'pointer';
if (bIE) u272.attachEvent("onclick", Clicku272);
else u272.addEventListener("click", Clicku272, true);
function Clicku272(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u318 = document.getElementById('u318');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{

if (true) {

	SetPanelVisibilityu318("");

}

}

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
