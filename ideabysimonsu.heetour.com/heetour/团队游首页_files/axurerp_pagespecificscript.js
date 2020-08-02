
var PageName = '团队游首页';
var PageId = 'p4dbe92c22e334c2abecf8be68025a8a3'
var PageUrl = '团队游首页.html'
document.title = '团队游首页';

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

eval(GetDynamicPanelScript('u0', 1));

eval(GetDynamicPanelScript('u171', 1));

eval(GetDynamicPanelScript('u205', 1));

eval(GetDynamicPanelScript('u275', 1));

eval(GetDynamicPanelScript('u222', 1));

eval(GetDynamicPanelScript('u188', 1));

eval(GetDynamicPanelScript('u45', 1));

eval(GetDynamicPanelScript('u239', 1));

eval(GetDynamicPanelScript('u97', 1));

eval(GetDynamicPanelScript('u154', 1));

eval(GetDynamicPanelScript('u292', 1));

eval(GetDynamicPanelScript('u256', 1));

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

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u325 = document.getElementById('u325');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
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
gv_vAlignTable['u277'] = 'center';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u193'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');

var u333 = document.getElementById('u333');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u349 = document.getElementById('u349');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');

if (bIE) u252.attachEvent("onmouseover", MouseOveru252);
else u252.addEventListener("mouseover", MouseOveru252, true);
function MouseOveru252(e)
{
if (!IsTrueMouseOver('u252',e)) return;
if (true) {

	SetPanelVisibilityu256("");

}

}

if (bIE) u252.attachEvent("onmouseout", MouseOutu252);
else u252.addEventListener("mouseout", MouseOutu252, true);
function MouseOutu252(e)
{
if (!IsTrueMouseOut('u252',e)) return;
if (true) {

	SetPanelVisibilityu256("hidden");

}

}

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u257 = document.getElementById('u257');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u364 = document.getElementById('u364');

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
gv_vAlignTable['u350'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
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

var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", Clicku220);
else u220.addEventListener("click", Clicku220, true);
function Clicku220(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
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
gv_vAlignTable['u314'] = 'center';
var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u182.attachEvent("onmouseover", MouseOveru182);
else u182.addEventListener("mouseover", MouseOveru182, true);
function MouseOveru182(e)
{
if (!IsTrueMouseOver('u182',e)) return;
if (true) {

	SetPanelVisibilityu188("");

}

}

if (bIE) u182.attachEvent("onmouseout", MouseOutu182);
else u182.addEventListener("mouseout", MouseOutu182, true);
function MouseOutu182(e)
{
if (!IsTrueMouseOut('u182',e)) return;
if (true) {

	SetPanelVisibilityu188("hidden");

}

}

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
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
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u233.attachEvent("onmouseover", MouseOveru233);
else u233.addEventListener("mouseover", MouseOveru233, true);
function MouseOveru233(e)
{
if (!IsTrueMouseOver('u233',e)) return;
if (true) {

	SetPanelVisibilityu239("");

}

}

if (bIE) u233.attachEvent("onmouseout", MouseOutu233);
else u233.addEventListener("mouseout", MouseOutu233, true);
function MouseOutu233(e)
{
if (!IsTrueMouseOut('u233',e)) return;
if (true) {

	SetPanelVisibilityu239("hidden");

}

}

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
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

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u331 = document.getElementById('u331');

var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u165.attachEvent("onmouseover", MouseOveru165);
else u165.addEventListener("mouseover", MouseOveru165, true);
function MouseOveru165(e)
{
if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelVisibilityu171("");

}

}

if (bIE) u165.attachEvent("onmouseout", MouseOutu165);
else u165.addEventListener("mouseout", MouseOutu165, true);
function MouseOutu165(e)
{
if (!IsTrueMouseOut('u165',e)) return;
if (true) {

	SetPanelVisibilityu171("hidden");

}

}

var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u254'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'top';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u148.attachEvent("onmouseover", MouseOveru148);
else u148.addEventListener("mouseover", MouseOveru148, true);
function MouseOveru148(e)
{
if (!IsTrueMouseOver('u148',e)) return;
if (true) {

	SetPanelVisibilityu154("");

}

}

if (bIE) u148.attachEvent("onmouseout", MouseOutu148);
else u148.addEventListener("mouseout", MouseOutu148, true);
function MouseOutu148(e)
{
if (!IsTrueMouseOut('u148',e)) return;
if (true) {

	SetPanelVisibilityu154("hidden");

}

}

var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');

var u140 = document.getElementById('u140');

var u315 = document.getElementById('u315');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u250.attachEvent("onmouseover", MouseOveru250);
else u250.addEventListener("mouseover", MouseOveru250, true);
function MouseOveru250(e)
{
if (!IsTrueMouseOver('u250',e)) return;
if (true) {

	SetPanelVisibilityu256("");

}

}

if (bIE) u250.attachEvent("onmouseout", MouseOutu250);
else u250.addEventListener("mouseout", MouseOutu250, true);
function MouseOutu250(e)
{
if (!IsTrueMouseOut('u250',e)) return;
if (true) {

	SetPanelVisibilityu256("hidden");

}

}

var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u199.attachEvent("onmouseover", MouseOveru199);
else u199.addEventListener("mouseover", MouseOveru199, true);
function MouseOveru199(e)
{
if (!IsTrueMouseOver('u199',e)) return;
if (true) {

	SetPanelVisibilityu205("");

}

}

if (bIE) u199.attachEvent("onmouseout", MouseOutu199);
else u199.addEventListener("mouseout", MouseOutu199, true);
function MouseOutu199(e)
{
if (!IsTrueMouseOut('u199',e)) return;
if (true) {

	SetPanelVisibilityu205("hidden");

}

}

var u288 = document.getElementById('u288');

if (bIE) u288.attachEvent("onmouseover", MouseOveru288);
else u288.addEventListener("mouseover", MouseOveru288, true);
function MouseOveru288(e)
{
if (!IsTrueMouseOver('u288',e)) return;
if (true) {

	SetPanelVisibilityu292("");

}

}

if (bIE) u288.attachEvent("onmouseout", MouseOutu288);
else u288.addEventListener("mouseout", MouseOutu288, true);
function MouseOutu288(e)
{
if (!IsTrueMouseOut('u288',e)) return;
if (true) {

	SetPanelVisibilityu292("hidden");

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u323 = document.getElementById('u323');

var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');

if (bIE) u201.attachEvent("onmouseover", MouseOveru201);
else u201.addEventListener("mouseover", MouseOveru201, true);
function MouseOveru201(e)
{
if (!IsTrueMouseOver('u201',e)) return;
if (true) {

	SetPanelVisibilityu205("");

}

}

if (bIE) u201.attachEvent("onmouseout", MouseOutu201);
else u201.addEventListener("mouseout", MouseOutu201, true);
function MouseOutu201(e)
{
if (!IsTrueMouseOut('u201',e)) return;
if (true) {

	SetPanelVisibilityu205("hidden");

}

}

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
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
gv_vAlignTable['u281'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u303 = document.getElementById('u303');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u293 = document.getElementById('u293');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');

var u311 = document.getElementById('u311');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
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

u227.style.cursor = 'pointer';
if (bIE) u227.attachEvent("onclick", Clicku227);
else u227.addEventListener("click", Clicku227, true);
function Clicku227(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');

if (bIE) u184.attachEvent("onmouseover", MouseOveru184);
else u184.addEventListener("mouseover", MouseOveru184, true);
function MouseOveru184(e)
{
if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelVisibilityu188("");

}

}

if (bIE) u184.attachEvent("onmouseout", MouseOutu184);
else u184.addEventListener("mouseout", MouseOutu184, true);
function MouseOutu184(e)
{
if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelVisibilityu188("hidden");

}

}

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
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

if (bIE) u235.attachEvent("onmouseover", MouseOveru235);
else u235.addEventListener("mouseover", MouseOveru235, true);
function MouseOveru235(e)
{
if (!IsTrueMouseOver('u235',e)) return;
if (true) {

	SetPanelVisibilityu239("");

}

}

if (bIE) u235.attachEvent("onmouseout", MouseOutu235);
else u235.addEventListener("mouseout", MouseOutu235, true);
function MouseOutu235(e)
{
if (!IsTrueMouseOut('u235',e)) return;
if (true) {

	SetPanelVisibilityu239("hidden");

}

}

var u275 = document.getElementById('u275');

var u317 = document.getElementById('u317');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u154 = document.getElementById('u154');

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
gv_vAlignTable['u202'] = 'center';
var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');

if (bIE) u218.attachEvent("onmouseover", MouseOveru218);
else u218.addEventListener("mouseover", MouseOveru218, true);
function MouseOveru218(e)
{
if (!IsTrueMouseOver('u218',e)) return;
if (true) {

	SetPanelVisibilityu222("");

}

}

if (bIE) u218.attachEvent("onmouseout", MouseOutu218);
else u218.addEventListener("mouseout", MouseOutu218, true);
function MouseOutu218(e)
{
if (!IsTrueMouseOut('u218',e)) return;
if (true) {

	SetPanelVisibilityu222("hidden");

}

}

var u297 = document.getElementById('u297');

u297.style.cursor = 'pointer';
if (bIE) u297.attachEvent("onclick", Clicku297);
else u297.addEventListener("click", Clicku297, true);
function Clicku297(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u297'] = 'top';
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

var u210 = document.getElementById('u210');

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u210'] = 'top';
var u242 = document.getElementById('u242');

u242.style.cursor = 'pointer';
if (bIE) u242.attachEvent("onclick", Clicku242);
else u242.addEventListener("click", Clicku242, true);
function Clicku242(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u286 = document.getElementById('u286');

u286.style.cursor = 'pointer';
if (bIE) u286.attachEvent("onclick", Clicku286);
else u286.addEventListener("click", Clicku286, true);
function Clicku286(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u286.attachEvent("onmouseover", MouseOveru286);
else u286.addEventListener("mouseover", MouseOveru286, true);
function MouseOveru286(e)
{
if (!IsTrueMouseOver('u286',e)) return;
if (true) {

	SetPanelVisibilityu292("");

}

}

if (bIE) u286.attachEvent("onmouseout", MouseOutu286);
else u286.addEventListener("mouseout", MouseOutu286, true);
function MouseOutu286(e)
{
if (!IsTrueMouseOut('u286',e)) return;
if (true) {

	SetPanelVisibilityu292("hidden");

}

}

var u167 = document.getElementById('u167');

if (bIE) u167.attachEvent("onmouseover", MouseOveru167);
else u167.addEventListener("mouseover", MouseOveru167, true);
function MouseOveru167(e)
{
if (!IsTrueMouseOver('u167',e)) return;
if (true) {

	SetPanelVisibilityu171("");

}

}

if (bIE) u167.attachEvent("onmouseout", MouseOutu167);
else u167.addEventListener("mouseout", MouseOutu167, true);
function MouseOutu167(e)
{
if (!IsTrueMouseOut('u167',e)) return;
if (true) {

	SetPanelVisibilityu171("hidden");

}

}

var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u203'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');

u237.style.cursor = 'pointer';
if (bIE) u237.attachEvent("onclick", Clicku237);
else u237.addEventListener("click", Clicku237, true);
function Clicku237(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u237'] = 'top';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
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
gv_vAlignTable['u312'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u239 = document.getElementById('u239');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
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
gv_vAlignTable['u204'] = 'top';
var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
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
gv_vAlignTable['u365'] = 'top';
var u150 = document.getElementById('u150');

if (bIE) u150.attachEvent("onmouseover", MouseOveru150);
else u150.addEventListener("mouseover", MouseOveru150, true);
function MouseOveru150(e)
{
if (!IsTrueMouseOver('u150',e)) return;
if (true) {

	SetPanelVisibilityu154("");

}

}

if (bIE) u150.attachEvent("onmouseout", MouseOutu150);
else u150.addEventListener("mouseout", MouseOutu150, true);
function MouseOutu150(e)
{
if (!IsTrueMouseOut('u150',e)) return;
if (true) {

	SetPanelVisibilityu154("hidden");

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

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u292 = document.getElementById('u292');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
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

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u189 = document.getElementById('u189');

var u351 = document.getElementById('u351');

var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u313 = document.getElementById('u313');

var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u329 = document.getElementById('u329');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u290'] = 'top';
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
gv_vAlignTable['u298'] = 'top';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u273 = document.getElementById('u273');

u273.style.cursor = 'pointer';
if (bIE) u273.attachEvent("onclick", Clicku273);
else u273.addEventListener("click", Clicku273, true);
function Clicku273(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u273'] = 'top';
var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
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

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u216.attachEvent("onmouseover", MouseOveru216);
else u216.addEventListener("mouseover", MouseOveru216, true);
function MouseOveru216(e)
{
if (!IsTrueMouseOver('u216',e)) return;
if (true) {

	SetPanelVisibilityu222("");

}

}

if (bIE) u216.attachEvent("onmouseout", MouseOutu216);
else u216.addEventListener("mouseout", MouseOutu216, true);
function MouseOutu216(e)
{
if (!IsTrueMouseOut('u216',e)) return;
if (true) {

	SetPanelVisibilityu222("hidden");

}

}

var u309 = document.getElementById('u309');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", Clicku186);
else u186.addEventListener("click", Clicku186, true);
function Clicku186(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u186'] = 'top';
var u271 = document.getElementById('u271');

if (bIE) u271.attachEvent("onmouseover", MouseOveru271);
else u271.addEventListener("mouseover", MouseOveru271, true);
function MouseOveru271(e)
{
if (!IsTrueMouseOver('u271',e)) return;
if (true) {

	SetPanelVisibilityu275("");

}

}

if (bIE) u271.attachEvent("onmouseout", MouseOutu271);
else u271.addEventListener("mouseout", MouseOutu271, true);
function MouseOutu271(e)
{
if (!IsTrueMouseOut('u271',e)) return;
if (true) {

	SetPanelVisibilityu275("hidden");

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u347 = document.getElementById('u347');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');

u225.style.cursor = 'pointer';
if (bIE) u225.attachEvent("onclick", Clicku225);
else u225.addEventListener("click", Clicku225, true);
function Clicku225(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u15 = document.getElementById('u15');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u327 = document.getElementById('u327');

var u269 = document.getElementById('u269');

u269.style.cursor = 'pointer';
if (bIE) u269.attachEvent("onclick", Clicku269);
else u269.addEventListener("click", Clicku269, true);
function Clicku269(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

if (bIE) u269.attachEvent("onmouseover", MouseOveru269);
else u269.addEventListener("mouseover", MouseOveru269, true);
function MouseOveru269(e)
{
if (!IsTrueMouseOver('u269',e)) return;
if (true) {

	SetPanelVisibilityu275("");

}

}

if (bIE) u269.attachEvent("onmouseout", MouseOutu269);
else u269.addEventListener("mouseout", MouseOutu269, true);
function MouseOutu269(e)
{
if (!IsTrueMouseOut('u269',e)) return;
if (true) {

	SetPanelVisibilityu275("hidden");

}

}

var u357 = document.getElementById('u357');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

u208.style.cursor = 'pointer';
if (bIE) u208.attachEvent("onclick", Clicku208);
else u208.addEventListener("click", Clicku208, true);
function Clicku208(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u355 = document.getElementById('u355');

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
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');

u176.style.cursor = 'pointer';
if (bIE) u176.attachEvent("onclick", Clicku176);
else u176.addEventListener("click", Clicku176, true);
function Clicku176(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
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

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

	self.location.href="团队游详细页.html" + GetQuerystring();

}

}
gv_vAlignTable['u244'] = 'top';
var u353 = document.getElementById('u353');

if (window.OnLoad) OnLoad();
