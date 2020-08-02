
var PageName = '个人资料';
var PageId = 'peba5488bf14c4186941d1a4f96fe9f39'
var PageUrl = '个人资料.html'
document.title = '个人资料';

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

eval(GetDynamicPanelScript('u193', 1));

eval(GetDynamicPanelScript('u326', 1));

eval(GetDynamicPanelScript('u311', 1));

eval(GetDynamicPanelScript('u216', 1));

eval(GetDynamicPanelScript('u274', 1));

eval(GetDynamicPanelScript('u229', 1));

var u62 = document.getElementById('u62');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');

u190.style.cursor = 'pointer';
if (bIE) u190.attachEvent("onclick", Clicku190);
else u190.addEventListener("click", Clicku190, true);
function Clicku190(e)
{

if (true) {

	SetPanelVisibilityu216("");

}

}
gv_vAlignTable['u190'] = 'top';
var u326 = document.getElementById('u326');

var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u277 = document.getElementById('u277');

var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');

var u310 = document.getElementById('u310');

u310.style.cursor = 'pointer';
if (bIE) u310.attachEvent("onclick", Clicku310);
else u310.addEventListener("click", Clicku310, true);
function Clicku310(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u310'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u262 = document.getElementById('u262');

var u91 = document.getElementById('u91');

var u206 = document.getElementById('u206');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');

var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u268 = document.getElementById('u268');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');

var u321 = document.getElementById('u321');

u321.style.cursor = 'pointer';
if (bIE) u321.attachEvent("onclick", Clicku321);
else u321.addEventListener("click", Clicku321, true);
function Clicku321(e)
{

if (true) {

	SetPanelVisibilityu326("");

	SetPanelVisibilityu311("hidden");

}

}

var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');

var u283 = document.getElementById('u283');

var u287 = document.getElementById('u287');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
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
gv_vAlignTable['u291'] = 'top';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
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

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u314 = document.getElementById('u314');

u314.style.cursor = 'pointer';
if (bIE) u314.attachEvent("onclick", Clicku314);
else u314.addEventListener("click", Clicku314, true);
function Clicku314(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u314'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u279 = document.getElementById('u279');

var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="订单.html" + GetQuerystring();

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u342 = document.getElementById('u342');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u331 = document.getElementById('u331');

u331.style.cursor = 'pointer';
if (bIE) u331.attachEvent("onclick", Clicku331);
else u331.addEventListener("click", Clicku331, true);
function Clicku331(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u331'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="机票订单.html" + GetQuerystring();

}

}

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u302 = document.getElementById('u302');

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="支付卡管理.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u315 = document.getElementById('u315');

u315.style.cursor = 'pointer';
if (bIE) u315.attachEvent("onclick", Clicku315);
else u315.addEventListener("click", Clicku315, true);
function Clicku315(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u315'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');

var u323 = document.getElementById('u323');

var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');

var u337 = document.getElementById('u337');

u337.style.cursor = 'pointer';
if (bIE) u337.attachEvent("onclick", Clicku337);
else u337.addEventListener("click", Clicku337, true);
function Clicku337(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u337'] = 'top';
var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{

if (true) {

	SetPanelVisibilityu193("hidden");

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');

var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u330'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u285 = document.getElementById('u285');

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="我的提问.html" + GetQuerystring();

}

}

var u53 = document.getElementById('u53');

var u281 = document.getElementById('u281');

var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u316 = document.getElementById('u316');

u316.style.cursor = 'pointer';
if (bIE) u316.attachEvent("onclick", Clicku316);
else u316.addEventListener("click", Clicku316, true);
function Clicku316(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u316'] = 'top';
var u36 = document.getElementById('u36');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u304 = document.getElementById('u304');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');

var u311 = document.getElementById('u311');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
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

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u289'] = 'top';
var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u275 = document.getElementById('u275');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u338 = document.getElementById('u338');

u338.style.cursor = 'pointer';
if (bIE) u338.attachEvent("onclick", Clicku338);
else u338.addEventListener("click", Clicku338, true);
function Clicku338(e)
{

if (true) {

	SetPanelVisibilityu311("");

	SetPanelVisibilityu326("hidden");

}

}

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u328 = document.getElementById('u328');

u328.style.cursor = 'pointer';
if (bIE) u328.attachEvent("onclick", Clicku328);
else u328.addEventListener("click", Clicku328, true);
function Clicku328(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u328'] = 'top';
var u143 = document.getElementById('u143');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u204 = document.getElementById('u204');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');

u211.style.cursor = 'pointer';
if (bIE) u211.attachEvent("onclick", Clicku211);
else u211.addEventListener("click", Clicku211, true);
function Clicku211(e)
{

if (true) {

	self.location.href="修改密码.html" + GetQuerystring();

}

}

var u300 = document.getElementById('u300');

if (bIE) u300.attachEvent("onmouseover", MouseOveru300);
else u300.addEventListener("mouseover", MouseOveru300, true);
function MouseOveru300(e)
{
if (!IsTrueMouseOver('u300',e)) return;
if (true) {

	SetPanelVisibilityu229("");

}

}

if (bIE) u300.attachEvent("onmouseout", MouseOutu300);
else u300.addEventListener("mouseout", MouseOutu300, true);
function MouseOutu300(e)
{
if (!IsTrueMouseOut('u300',e)) return;
if (true) {

	SetPanelVisibilityu229("hidden");

}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u292 = document.getElementById('u292');

var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u306 = document.getElementById('u306');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u340 = document.getElementById('u340');

if (bIE) u340.attachEvent("onmouseover", MouseOveru340);
else u340.addEventListener("mouseover", MouseOveru340, true);
function MouseOveru340(e)
{
if (!IsTrueMouseOver('u340',e)) return;
if (true) {

	SetPanelVisibilityu274("");

}

}

if (bIE) u340.attachEvent("onmouseout", MouseOutu340);
else u340.addEventListener("mouseout", MouseOutu340, true);
function MouseOutu340(e)
{
if (!IsTrueMouseOut('u340',e)) return;
if (true) {

	SetPanelVisibilityu274("hidden");

}

}

var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	self.location.href="酒店套餐订单.html" + GetQuerystring();

}

}

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{

if (true) {

	SetPanelVisibilityu216("hidden");

}

}

var u313 = document.getElementById('u313');

u313.style.cursor = 'pointer';
if (bIE) u313.attachEvent("onclick", Clicku313);
else u313.addEventListener("click", Clicku313, true);
function Clicku313(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u313'] = 'top';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u329 = document.getElementById('u329');

u329.style.cursor = 'pointer';
if (bIE) u329.attachEvent("onclick", Clicku329);
else u329.addEventListener("click", Clicku329, true);
function Clicku329(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u329'] = 'top';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="在线收藏夹.html" + GetQuerystring();

}

}

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{

if (true) {

	self.location.href="酒店餐饮订单.html" + GetQuerystring();

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (true) {

SetWidgetFormText('u222', PopulateVariables('邮件发送成功。请查收！'));

}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u258 = document.getElementById('u258');

var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
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
gv_vAlignTable['u66'] = 'center';
var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');

var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{

if (true) {

	self.location.href="常用旅客信息.html" + GetQuerystring();

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u229 = document.getElementById('u229');

var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
