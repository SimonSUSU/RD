
var PageName = 'xxxx_门票查询列表页';
var PageId = 'pb9050fd4c81346cbab54fd039712849b'
var PageUrl = 'xxxx_门票查询列表页.html'
document.title = 'xxxx_门票查询列表页';

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
gv_vAlignTable['u307'] = 'center';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
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

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

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
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');

var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
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

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u126'] = 'top';
var u170 = document.getElementById('u170');

u170.style.cursor = 'pointer';
if (bIE) u170.attachEvent("onclick", Clicku170);
else u170.addEventListener("click", Clicku170, true);
function Clicku170(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u170'] = 'top';
var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');

var u296 = document.getElementById('u296');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
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
gv_vAlignTable['u314'] = 'top';
var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');

u198.style.cursor = 'pointer';
if (bIE) u198.attachEvent("onclick", Clicku198);
else u198.addEventListener("click", Clicku198, true);
function Clicku198(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u198'] = 'top';
var u279 = document.getElementById('u279');

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
gv_vAlignTable['u233'] = 'top';
var u322 = document.getElementById('u322');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u284 = document.getElementById('u284');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u335 = document.getElementById('u335');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u302 = document.getElementById('u302');

var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
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

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u199 = document.getElementById('u199');

var u288 = document.getElementById('u288');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
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

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u316 = document.getElementById('u316');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u304 = document.getElementById('u304');

var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
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
gv_vAlignTable['u141'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');

u184.style.cursor = 'pointer';
if (bIE) u184.attachEvent("onclick", Clicku184);
else u184.addEventListener("click", Clicku184, true);
function Clicku184(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}
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

	self.location.href="注册第一步.html" + GetQuerystring();

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

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
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

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
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
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');

var u286 = document.getElementById('u286');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u312 = document.getElementById('u312');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u143 = document.getElementById('u143');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
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
gv_vAlignTable['u204'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
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
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u320 = document.getElementById('u320');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u308 = document.getElementById('u308');

var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

	self.location.href="自由行_机]酒店详细页.html" + GetQuerystring();

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u300 = document.getElementById('u300');

var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u292 = document.getElementById('u292');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
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

	SetPanelVisibilityu97("");

	SetPanelVisibilityu82("hidden");

}

}

var u5 = document.getElementById('u5');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u290 = document.getElementById('u290');

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

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
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

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u280 = document.getElementById('u280');

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
gv_vAlignTable['u223'] = 'top';
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

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u157 = document.getElementById('u157');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u15 = document.getElementById('u15');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u269 = document.getElementById('u269');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');

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
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u318 = document.getElementById('u318');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u294 = document.getElementById('u294');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
