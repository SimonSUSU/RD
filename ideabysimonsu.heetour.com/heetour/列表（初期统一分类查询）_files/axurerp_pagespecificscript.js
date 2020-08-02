
var PageName = '列表（初期统一分类查询）';
var PageId = 'p8c8d923db4184341aee4a426382fb927'
var PageUrl = '列表（初期统一分类查询）.html'
document.title = '列表（初期统一分类查询）';

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

eval(GetDynamicPanelScript('u1', 1));

eval(GetDynamicPanelScript('u83', 1));

eval(GetDynamicPanelScript('u98', 1));

eval(GetDynamicPanelScript('u46', 1));

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u307 = document.getElementById('u307');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u247 = document.getElementById('u247');

var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}
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

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}
gv_vAlignTable['u326'] = 'top';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	SetPanelVisibilityu98("");

	SetPanelVisibilityu83("hidden");

}

}

var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');

if (bIE) u112.attachEvent("onmouseover", MouseOveru112);
else u112.addEventListener("mouseover", MouseOveru112, true);
function MouseOveru112(e)
{
if (!IsTrueMouseOver('u112',e)) return;
if (true) {

	SetPanelVisibilityu46("");

}

}

if (bIE) u112.attachEvent("onmouseout", MouseOutu112);
else u112.addEventListener("mouseout", MouseOutu112, true);
function MouseOutu112(e)
{
if (!IsTrueMouseOut('u112',e)) return;
if (true) {

	SetPanelVisibilityu46("hidden");

}

}

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u282 = document.getElementById('u282');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');

var u333 = document.getElementById('u333');

var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u268 = document.getElementById('u268');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u334 = document.getElementById('u334');

u334.style.cursor = 'pointer';
if (bIE) u334.attachEvent("onclick", Clicku334);
else u334.addEventListener("click", Clicku334, true);
function Clicku334(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u296 = document.getElementById('u296');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u109 = document.getElementById('u109');

u109.style.cursor = 'pointer';
if (bIE) u109.attachEvent("onclick", Clicku109);
else u109.addEventListener("click", Clicku109, true);
function Clicku109(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u63'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u322 = document.getElementById('u322');

var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u284 = document.getElementById('u284');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u302 = document.getElementById('u302');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u4 = document.getElementById('u4');

var u243 = document.getElementById('u243');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u288 = document.getElementById('u288');

var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');

var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u337 = document.getElementById('u337');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u303 = document.getElementById('u303');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u36 = document.getElementById('u36');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u317 = document.getElementById('u317');

var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u218 = document.getElementById('u218');

u218.style.cursor = 'pointer';
if (bIE) u218.attachEvent("onclick", Clicku218);
else u218.addEventListener("click", Clicku218, true);
function Clicku218(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u1 = document.getElementById('u1');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}
gv_vAlignTable['u210'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u286 = document.getElementById('u286');

var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

var u312 = document.getElementById('u312');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u239 = document.getElementById('u239');

var u328 = document.getElementById('u328');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u101'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
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

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u308 = document.getElementById('u308');

var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u292 = document.getElementById('u292');

var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u313 = document.getElementById('u313');

var u278 = document.getElementById('u278');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u24 = document.getElementById('u24');

var u290 = document.getElementById('u290');

var u72 = document.getElementById('u72');

if (bIE) u72.attachEvent("onmouseover", MouseOveru72);
else u72.addEventListener("mouseover", MouseOveru72, true);
function MouseOveru72(e)
{
if (!IsTrueMouseOver('u72',e)) return;
if (true) {

	SetPanelVisibilityu1("");

}

}

if (bIE) u72.attachEvent("onmouseout", MouseOutu72);
else u72.addEventListener("mouseout", MouseOutu72, true);
function MouseOutu72(e)
{
if (!IsTrueMouseOut('u72',e)) return;
if (true) {

	SetPanelVisibilityu1("hidden");

}

}

var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u324 = document.getElementById('u324');

u324.style.cursor = 'pointer';
if (bIE) u324.attachEvent("onclick", Clicku324);
else u324.addEventListener("click", Clicku324, true);
function Clicku324(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	SetPanelVisibilityu83("");

	SetPanelVisibilityu98("hidden");

}

}

var u298 = document.getElementById('u298');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u280 = document.getElementById('u280');

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u86'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');

var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');

u208.style.cursor = 'pointer';
if (bIE) u208.attachEvent("onclick", Clicku208);
else u208.addEventListener("click", Clicku208, true);
function Clicku208(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u82'] = 'top';
var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u272 = document.getElementById('u272');

var u318 = document.getElementById('u318');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", Clicku178);
else u178.addEventListener("click", Clicku178, true);
function Clicku178(e)
{

if (true) {

	self.location.href="娱乐详细页[不同分类设计、信息项不同].html" + GetQuerystring();

}

}

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u294 = document.getElementById('u294');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
if (window.OnLoad) OnLoad();
