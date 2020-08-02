
var PageName = '景点门票';
var PageId = 'pd4f72b7587464bea83e0a42a3596bf7b'
var PageUrl = '景点门票.html'
document.title = '景点门票';

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

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="周边游管理.html" + GetQuerystring();

}

}

var u307 = document.getElementById('u307');

var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');

var u326 = document.getElementById('u326');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	self.location.href="管理员管理.html" + GetQuerystring();

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');

var u310 = document.getElementById('u310');

var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{

if (true) {

	self.location.href="特产管理.html" + GetQuerystring();

}

}

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	self.location.href="订单管理.html" + GetQuerystring();

}

}

var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u206 = document.getElementById('u206');

var u333 = document.getElementById('u333');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	self.location.href="自由行管理.html" + GetQuerystring();

}

}

var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');

var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');

var u268 = document.getElementById('u268');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');

var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="添加_修改自由行.html" + GetQuerystring();

}

}

var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{

if (true) {

	self.location.href="添加修改特产.html" + GetQuerystring();

}

}

var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{

if (true) {

	self.location.href="别墅管理.html" + GetQuerystring();

}

}

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
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

	self.location.href="添加_编辑文章.html" + GetQuerystring();

}

}

var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	self.location.href="会员管理.html" + GetQuerystring();

}

}

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u260 = document.getElementById('u260');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');

var u283 = document.getElementById('u283');

var u287 = document.getElementById('u287');

var u299 = document.getElementById('u299');

var u332 = document.getElementById('u332');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u334 = document.getElementById('u334');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u296 = document.getElementById('u296');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u314 = document.getElementById('u314');

var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{

if (true) {

	self.location.href="秒杀抢购管理.html" + GetQuerystring();

}

}

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u322 = document.getElementById('u322');

var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	self.location.href="添加_修改景点.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	self.location.href="景点管理.html" + GetQuerystring();

}

}
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u335 = document.getElementById('u335');

var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u302 = document.getElementById('u302');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="其它订单.html" + GetQuerystring();

}

}

var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	self.location.href="添加手工订单第一步.html" + GetQuerystring();

}

}

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{

if (true) {

	self.location.href="广告管理.html" + GetQuerystring();

}

}

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="票务管理.html" + GetQuerystring();

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u234 = document.getElementById('u234');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u339 = document.getElementById('u339');

var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

	self.location.href="添加_修改景点.html" + GetQuerystring();

}

}

var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	self.location.href="添加_修改会员.html" + GetQuerystring();

}

}

var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

	self.location.href="会员等级管理.html" + GetQuerystring();

}

}

var u330 = document.getElementById('u330');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u281 = document.getElementById('u281');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="酒店管理.html" + GetQuerystring();

}

}

var u214 = document.getElementById('u214');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u316 = document.getElementById('u316');

var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{

if (true) {

	self.location.href="周边游管理.html" + GetQuerystring();

}

}

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u304 = document.getElementById('u304');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');

var u289 = document.getElementById('u289');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{

if (true) {

	self.location.href="添加_修改秒杀抢购.html" + GetQuerystring();

}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u275 = document.getElementById('u275');

var u317 = document.getElementById('u317');

var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{

if (true) {

	self.location.href="酒店管理.html" + GetQuerystring();

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u218 = document.getElementById('u218');

var u297 = document.getElementById('u297');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u237 = document.getElementById('u237');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{

if (true) {

	self.location.href="餐饮美食.html" + GetQuerystring();

}

}

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u312 = document.getElementById('u312');

var u338 = document.getElementById('u338');

var u239 = document.getElementById('u239');

var u328 = document.getElementById('u328');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if (true) {

	self.location.href="景点图库.html" + GetQuerystring();

}

}

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');

var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{

if (true) {

	self.location.href="角色管理.html" + GetQuerystring();

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u320 = document.getElementById('u320');

var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{

if (true) {

	self.location.href="票务管理.html" + GetQuerystring();

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

	self.location.href="别墅群管理.html" + GetQuerystring();

}

}

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

	self.location.href="别墅管理.html" + GetQuerystring();

}

}

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u300 = document.getElementById('u300');

var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{

if (true) {

	self.location.href="添加餐饮美食.html" + GetQuerystring();

}

}

var u292 = document.getElementById('u292');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="添加_修改酒店.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u306 = document.getElementById('u306');

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="景点管理.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u340 = document.getElementById('u340');

var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
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

	self.location.href="房态汇总.html" + GetQuerystring();

}

}

var u290 = document.getElementById('u290');

var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{

if (true) {

	self.location.href="添加_修改供应商.html" + GetQuerystring();

}

}

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');

var u324 = document.getElementById('u324');

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	self.location.href="添加_修改别墅.html" + GetQuerystring();

}

}

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u273 = document.getElementById('u273');

var u280 = document.getElementById('u280');

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="自由行管理.html" + GetQuerystring();

}

}

var u223 = document.getElementById('u223');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');

var u309 = document.getElementById('u309');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u186 = document.getElementById('u186');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	self.location.href="后台管理系统_登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');

var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{

if (true) {

	self.location.href="景点后台备注.html" + GetQuerystring();

}

}

var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u336 = document.getElementById('u336');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	self.location.href="旅游指南.html" + GetQuerystring();

}

}

var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="供应商管理.html" + GetQuerystring();

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	self.location.href="添加_修改周边游.html" + GetQuerystring();

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u319 = document.getElementById('u319');

var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="信息控制管理.html" + GetQuerystring();

}

}

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	self.location.href="添加_修改票务.html" + GetQuerystring();

}

}

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');

var u272 = document.getElementById('u272');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');

var u294 = document.getElementById('u294');

var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
