
var PageName = '交通指引';
var PageId = 'p3627606257564c4cb8fd14a77d25f537'
var PageUrl = '交通指引.html'
document.title = '交通指引';

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

eval(GetDynamicPanelScript('u352', 1));

eval(GetDynamicPanelScript('u225', 1));

eval(GetDynamicPanelScript('u238', 1));

eval(GetDynamicPanelScript('u337', 1));

eval(GetDynamicPanelScript('u300', 1));

eval(GetDynamicPanelScript('u208', 1));

eval(GetDynamicPanelScript('u255', 1));

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u307 = document.getElementById('u307');

var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{

if (true) {

	self.location.href="图库_视频.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u226 = document.getElementById('u226');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u326 = document.getElementById('u326');

if (bIE) u326.attachEvent("onmouseover", MouseOveru326);
else u326.addEventListener("mouseover", MouseOveru326, true);
function MouseOveru326(e)
{
if (!IsTrueMouseOver('u326',e)) return;
if (true) {

	SetPanelVisibilityu255("");

}

}

if (bIE) u326.attachEvent("onmouseout", MouseOutu326);
else u326.addEventListener("mouseout", MouseOutu326, true);
function MouseOutu326(e)
{
if (!IsTrueMouseOut('u326',e)) return;
if (true) {

	SetPanelVisibilityu255("hidden");

}

}

var u363 = document.getElementById('u363');

u363.style.cursor = 'pointer';
if (bIE) u363.attachEvent("onclick", Clicku363);
else u363.addEventListener("click", Clicku363, true);
function Clicku363(e)
{

if (true) {

	self.location.href="会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u363'] = 'top';
var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

	SetPanelVisibilityu225("hidden");

}

}

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{

if (true) {

	self.location.href="配置设施.html" + GetQuerystring();

}

}

var u282 = document.getElementById('u282');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u91 = document.getElementById('u91');

var u206 = document.getElementById('u206');

u206.style.cursor = 'pointer';
if (bIE) u206.attachEvent("onclick", Clicku206);
else u206.addEventListener("click", Clicku206, true);
function Clicku206(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u349 = document.getElementById('u349');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');

var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{

if (true) {

	SetPanelVisibilityu225("");

}

}
gv_vAlignTable['u179'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u364 = document.getElementById('u364');

u364.style.cursor = 'pointer';
if (bIE) u364.attachEvent("onclick", Clicku364);
else u364.addEventListener("click", Clicku364, true);
function Clicku364(e)
{

if (true) {

	SetPanelVisibilityu337("");

	SetPanelVisibilityu352("hidden");

}

}

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u354 = document.getElementById('u354');

u354.style.cursor = 'pointer';
if (bIE) u354.attachEvent("onclick", Clicku354);
else u354.addEventListener("click", Clicku354, true);
function Clicku354(e)
{

if (true) {

	self.location.href="酒店客房订单.html" + GetQuerystring();

}

}
gv_vAlignTable['u354'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');

var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u159 = document.getElementById('u159');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u332 = document.getElementById('u332');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');

var u296 = document.getElementById('u296');

var u301 = document.getElementById('u301');

var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u49 = document.getElementById('u49');

var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u368 = document.getElementById('u368');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{

if (true) {

	NewWindow("打印酒店.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u322 = document.getElementById('u322');

u322.style.cursor = 'pointer';
if (bIE) u322.attachEvent("onclick", Clicku322);
else u322.addEventListener("click", Clicku322, true);
function Clicku322(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');

var u249 = document.getElementById('u249');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u284 = document.getElementById('u284');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
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
gv_vAlignTable['u331'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u243 = document.getElementById('u243');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u255 = document.getElementById('u255');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u315 = document.getElementById('u315');

u315.style.cursor = 'pointer';
if (bIE) u315.attachEvent("onclick", Clicku315);
else u315.addEventListener("click", Clicku315, true);
function Clicku315(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u315'] = 'top';
var u183 = document.getElementById('u183');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{

if (true) {

	self.location.href="酒店点评.html" + GetQuerystring();

}

}

var u288 = document.getElementById('u288');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{

if (true) {

	self.location.href="酒店详情.html" + GetQuerystring();

}

}

var u103 = document.getElementById('u103');

var u339 = document.getElementById('u339');

u339.style.cursor = 'pointer';
if (bIE) u339.attachEvent("onclick", Clicku339);
else u339.addEventListener("click", Clicku339, true);
function Clicku339(e)
{

if (true) {

	self.location.href="登录.html" + GetQuerystring();

}

}
gv_vAlignTable['u339'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u25 = document.getElementById('u25');

var u337 = document.getElementById('u337');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u356 = document.getElementById('u356');

u356.style.cursor = 'pointer';
if (bIE) u356.attachEvent("onclick", Clicku356);
else u356.addEventListener("click", Clicku356, true);
function Clicku356(e)
{

if (true) {

	self.location.href="在线客服.html" + GetQuerystring();

}

}
gv_vAlignTable['u356'] = 'top';
var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u330 = document.getElementById('u330');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');

u187.style.cursor = 'pointer';
if (bIE) u187.attachEvent("onclick", Clicku187);
else u187.addEventListener("click", Clicku187, true);
function Clicku187(e)
{

if (true) {

	SetPanelVisibilityu208("");

}

}
gv_vAlignTable['u187'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("提交成功。感谢你的参与。我们会..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u303 = document.getElementById('u303');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');

var u311 = document.getElementById('u311');

var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u317'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');

var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{

if (true) {

	self.location.href="酒店详细首页.html" + GetQuerystring();

}

}

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u242 = document.getElementById('u242');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u245 = document.getElementById('u245');

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{

if (true) {

	SetPanelVisibilityu238("hidden");

}

}

var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", Clicku215);
else u215.addEventListener("click", Clicku215, true);
function Clicku215(e)
{

if (true) {

	SetPanelVisibilityu208("hidden");

}

}

var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u366 = document.getElementById('u366');

if (bIE) u366.attachEvent("onmouseover", MouseOveru366);
else u366.addEventListener("mouseover", MouseOveru366, true);
function MouseOveru366(e)
{
if (!IsTrueMouseOver('u366',e)) return;
if (true) {

	SetPanelVisibilityu300("");

}

}

if (bIE) u366.attachEvent("onmouseout", MouseOutu366);
else u366.addEventListener("mouseout", MouseOutu366, true);
function MouseOutu366(e)
{
if (!IsTrueMouseOut('u366',e)) return;
if (true) {

	SetPanelVisibilityu300("hidden");

}

}

var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u51 = document.getElementById('u51');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u239 = document.getElementById('u239');

var u328 = document.getElementById('u328');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u276 = document.getElementById('u276');

var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');

var u320 = document.getElementById('u320');

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{

if (true) {

	self.location.href="海南酒店.html" + GetQuerystring();

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u300 = document.getElementById('u300');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u10 = document.getElementById('u10');

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
gv_vAlignTable['u92'] = 'center';
var u5 = document.getElementById('u5');

var u305 = document.getElementById('u305');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u340 = document.getElementById('u340');

u340.style.cursor = 'pointer';
if (bIE) u340.attachEvent("onclick", Clicku340);
else u340.addEventListener("click", Clicku340, true);
function Clicku340(e)
{

if (true) {

	self.location.href="注册第一步.html" + GetQuerystring();

}

}
gv_vAlignTable['u340'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u313 = document.getElementById('u313');

var u278 = document.getElementById('u278');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u290 = document.getElementById('u290');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u324 = document.getElementById('u324');

u324.style.cursor = 'pointer';
if (bIE) u324.attachEvent("onclick", Clicku324);
else u324.addEventListener("click", Clicku324, true);
function Clicku324(e)
{

if (true) {

	self.location.href="国内机票.html" + GetQuerystring();

}

}

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
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

var u258 = document.getElementById('u258');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
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

	SetPanelVisibilityu352("");

	SetPanelVisibilityu337("hidden");

}

}

var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u225 = document.getElementById('u225');

var u352 = document.getElementById('u352');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');

var u336 = document.getElementById('u336');

u336.style.cursor = 'pointer';
if (bIE) u336.attachEvent("onclick", Clicku336);
else u336.addEventListener("click", Clicku336, true);
function Clicku336(e)
{

if (true) {

	self.location.href="嘻游旅行网.html" + GetQuerystring();

}

}
gv_vAlignTable['u336'] = 'top';
var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u357 = document.getElementById('u357');

u357.style.cursor = 'pointer';
if (bIE) u357.attachEvent("onclick", Clicku357);
else u357.addEventListener("click", Clicku357, true);
function Clicku357(e)
{

if (true) {

	self.location.href="订单查询.html" + GetQuerystring();

}

}
gv_vAlignTable['u357'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("收藏成功，请到会员中心的xxxxx查看。"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u355 = document.getElementById('u355');

u355.style.cursor = 'pointer';
if (bIE) u355.attachEvent("onclick", Clicku355);
else u355.addEventListener("click", Clicku355, true);
function Clicku355(e)
{

if (true) {

	self.location.href="退出会员中心.html" + GetQuerystring();

}

}
gv_vAlignTable['u355'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u272 = document.getElementById('u272');

var u318 = document.getElementById('u318');

var u31 = document.getElementById('u31');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');

var u294 = document.getElementById('u294');

var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

	NewWindow("Resources/Other.html#other=" + encodeURI("你的提问已成功提交，请耐心等待我们的反馈。"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
if (window.OnLoad) OnLoad();
