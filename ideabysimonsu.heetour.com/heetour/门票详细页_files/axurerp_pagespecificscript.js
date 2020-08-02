
var PageName = '门票详细页';
var PageId = 'pf64df85afbe942a9a4c6dbd014db1fa9'
var PageUrl = '门票详细页.html'
document.title = '门票详细页';

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

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u226 = document.getElementById('u226');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u251 = document.getElementById('u251');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
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
gv_vAlignTable['u277'] = 'top';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');

var u282 = document.getElementById('u282');

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u173 = document.getElementById('u173');

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u179 = document.getElementById('u179');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u23 = document.getElementById('u23');

var u147 = document.getElementById('u147');

var u257 = document.getElementById('u257');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
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
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
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
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u181 = document.getElementById('u181');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u209 = document.getElementById('u209');

var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u283 = document.getElementById('u283');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u332 = document.getElementById('u332');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u185 = document.getElementById('u185');

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u301 = document.getElementById('u301');

var u197 = document.getElementById('u197');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u368 = document.getElementById('u368');

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
gv_vAlignTable['u314'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
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
gv_vAlignTable['u144'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');

var u335 = document.getElementById('u335');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u263 = document.getElementById('u263');

var u331 = document.getElementById('u331');

var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
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

var u297 = document.getElementById('u297');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u358 = document.getElementById('u358');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');

var u255 = document.getElementById('u255');

var u58 = document.getElementById('u58');

var u11 = document.getElementById('u11');

var u205 = document.getElementById('u205');

var u267 = document.getElementById('u267');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u234 = document.getElementById('u234');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u337 = document.getElementById('u337');

var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');

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
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u293 = document.getElementById('u293');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
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
gv_vAlignTable['u184'] = 'center';
var u289 = document.getElementById('u289');

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
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u275 = document.getElementById('u275');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
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
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u361 = document.getElementById('u361');

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
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u242 = document.getElementById('u242');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u366 = document.getElementById('u366');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');

var u175 = document.getElementById('u175');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
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
gv_vAlignTable['u204'] = 'center';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u94 = document.getElementById('u94');

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

var u365 = document.getElementById('u365');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
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
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u341 = document.getElementById('u341');

var u306 = document.getElementById('u306');

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
gv_vAlignTable['u305'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u189 = document.getElementById('u189');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');

var u313 = document.getElementById('u313');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
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

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
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
gv_vAlignTable['u298'] = 'center';
var u343 = document.getElementById('u343');

var u273 = document.getElementById('u273');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
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

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u309 = document.getElementById('u309');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');

var u177 = document.getElementById('u177');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u145 = document.getElementById('u145');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u15 = document.getElementById('u15');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u246 = document.getElementById('u246');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u269 = document.getElementById('u269');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
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
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u244 = document.getElementById('u244');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
if (window.OnLoad) OnLoad();
