
var PageName = '餐饮美食列表xxxxx';
var PageId = 'p6aa3463972f9421f9f694614aa302bf9'
var PageUrl = '餐饮美食列表xxxxx.html'
document.title = '餐饮美食列表xxxxx';

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

eval(GetDynamicPanelScript('u285', 1));

eval(GetDynamicPanelScript('u322', 1));

eval(GetDynamicPanelScript('u337', 1));

eval(GetDynamicPanelScript('u240', 1));

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
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

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u325 = document.getElementById('u325');

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u325'] = 'top';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
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

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u326'] = 'top';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');

var u349 = document.getElementById('u349');

u349.style.cursor = 'pointer';
if (bIE) u349.attachEvent("onclick", Clicku349);
else u349.addEventListener("click", Clicku349, true);
function Clicku349(e)
{

if (true) {

	SetPanelVisibilityu322("");

	SetPanelVisibilityu337("hidden");

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u179 = document.getElementById('u179');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u257 = document.getElementById('u257');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u321 = document.getElementById('u321');

u321.style.cursor = 'pointer';
if (bIE) u321.attachEvent("onclick", Clicku321);
else u321.addEventListener("click", Clicku321, true);
function Clicku321(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u321'] = 'top';
var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	SetPanelVisibilityu337("");

	SetPanelVisibilityu322("hidden");

}

}

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');

var u334 = document.getElementById('u334');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u185 = document.getElementById('u185');

var u296 = document.getElementById('u296');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u279 = document.getElementById('u279');

var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u322 = document.getElementById('u322');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');

var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u125 = document.getElementById('u125');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u96 = document.getElementById('u96');

var u342 = document.getElementById('u342');

u342.style.cursor = 'pointer';
if (bIE) u342.attachEvent("onclick", Clicku342);
else u342.addEventListener("click", Clicku342, true);
function Clicku342(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u342'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u181 = document.getElementById('u181');

var u302 = document.getElementById('u302');

u302.style.cursor = 'pointer';
if (bIE) u302.attachEvent("onclick", Clicku302);
else u302.addEventListener("click", Clicku302, true);
function Clicku302(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u302'] = 'top';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u267 = document.getElementById('u267');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u315 = document.getElementById('u315');

var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u288 = document.getElementById('u288');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');

var u339 = document.getElementById('u339');

u339.style.cursor = 'pointer';
if (bIE) u339.attachEvent("onclick", Clicku339);
else u339.addEventListener("click", Clicku339, true);
function Clicku339(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u339'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u25 = document.getElementById('u25');

var u337 = document.getElementById('u337');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

var u281 = document.getElementById('u281');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u303 = document.getElementById('u303');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u311 = document.getElementById('u311');

if (bIE) u311.attachEvent("onmouseover", MouseOveru311);
else u311.addEventListener("mouseover", MouseOveru311, true);
function MouseOveru311(e)
{
if (!IsTrueMouseOver('u311',e)) return;
if (true) {

	SetPanelVisibilityu240("");

}

}

if (bIE) u311.attachEvent("onmouseout", MouseOutu311);
else u311.addEventListener("mouseout", MouseOutu311, true);
function MouseOutu311(e)
{
if (!IsTrueMouseOut('u311',e)) return;
if (true) {

	SetPanelVisibilityu240("hidden");

}

}

var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');

var u317 = document.getElementById('u317');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u99 = document.getElementById('u99');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u286 = document.getElementById('u286');

var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');

var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u300'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u292 = document.getElementById('u292');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u57 = document.getElementById('u57');

var u341 = document.getElementById('u341');

u341.style.cursor = 'pointer';
if (bIE) u341.attachEvent("onclick", Clicku341);
else u341.addEventListener("click", Clicku341, true);
function Clicku341(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u341'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u305 = document.getElementById('u305');

u305.style.cursor = 'pointer';
if (bIE) u305.attachEvent("onclick", Clicku305);
else u305.addEventListener("click", Clicku305, true);
function Clicku305(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u340 = document.getElementById('u340');

u340.style.cursor = 'pointer';
if (bIE) u340.attachEvent("onclick", Clicku340);
else u340.addEventListener("click", Clicku340, true);
function Clicku340(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u340'] = 'top';
var u189 = document.getElementById('u189');

var u351 = document.getElementById('u351');

if (bIE) u351.attachEvent("onmouseover", MouseOveru351);
else u351.addEventListener("mouseover", MouseOveru351, true);
function MouseOveru351(e)
{
if (!IsTrueMouseOver('u351',e)) return;
if (true) {

	SetPanelVisibilityu285("");

}

}

if (bIE) u351.attachEvent("onmouseout", MouseOutu351);
else u351.addEventListener("mouseout", MouseOutu351, true);
function MouseOutu351(e)
{
if (!IsTrueMouseOut('u351',e)) return;
if (true) {

	SetPanelVisibilityu285("hidden");

}

}

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u313 = document.getElementById('u313');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u290 = document.getElementById('u290');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
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

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u324'] = 'top';
var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u298 = document.getElementById('u298');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u273 = document.getElementById('u273');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u15 = document.getElementById('u15');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u327 = document.getElementById('u327');

u327.style.cursor = 'pointer';
if (bIE) u327.attachEvent("onclick", Clicku327);
else u327.addEventListener("click", Clicku327, true);
function Clicku327(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u327'] = 'top';
var u269 = document.getElementById('u269');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u348 = document.getElementById('u348');

u348.style.cursor = 'pointer';
if (bIE) u348.attachEvent("onclick", Clicku348);
else u348.addEventListener("click", Clicku348, true);
function Clicku348(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u348'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u294 = document.getElementById('u294');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u353 = document.getElementById('u353');

if (window.OnLoad) OnLoad();
