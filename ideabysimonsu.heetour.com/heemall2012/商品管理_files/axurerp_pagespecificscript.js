
var PageName = '商品管理';
var PageId = 'p11f02652d7d34b8bbc150ad13bdd2ad2'
var PageUrl = '商品管理.html'
document.title = '商品管理';

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

var u33 = document.getElementById('u33');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u296 = document.getElementById('u296');

var u332 = document.getElementById('u332');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u86 = document.getElementById('u86');

var u162 = document.getElementById('u162');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u42 = document.getElementById('u42');

var u82 = document.getElementById('u82');

var u74 = document.getElementById('u74');

var u216 = document.getElementById('u216');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u242 = document.getElementById('u242');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u270 = document.getElementById('u270');

var u128 = document.getElementById('u128');

var u68 = document.getElementById('u68');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u306 = document.getElementById('u306');

var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u324 = document.getElementById('u324');

var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{

if (true) {

	self.location.href="店铺设置.html" + GetQuerystring();

}

}

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u108 = document.getElementById('u108');

var u212 = document.getElementById('u212');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u5 = document.getElementById('u5');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u9 = document.getElementById('u9');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u365 = document.getElementById('u365');

u365.style.cursor = 'pointer';
if (bIE) u365.attachEvent("onclick", Clicku365);
else u365.addEventListener("click", Clicku365, true);
function Clicku365(e)
{

if (true) {

	self.location.href="运费管理.html" + GetQuerystring();

}

}

var u330 = document.getElementById('u330');

var u314 = document.getElementById('u314');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u256 = document.getElementById('u256');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u122 = document.getElementById('u122');

var u260 = document.getElementById('u260');

var u138 = document.getElementById('u138');

var u345 = document.getElementById('u345');

u345.style.cursor = 'pointer';
if (bIE) u345.attachEvent("onclick", Clicku345);
else u345.addEventListener("click", Clicku345, true);
function Clicku345(e)
{

if (true) {

	self.location.href="搜索列表.html" + GetQuerystring();

}

}

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u180 = document.getElementById('u180');

var u369 = document.getElementById('u369');

u369.style.cursor = 'pointer';
if (bIE) u369.attachEvent("onclick", Clicku369);
else u369.addEventListener("click", Clicku369, true);
function Clicku369(e)
{

if (true) {

	self.location.href="资金管理.html" + GetQuerystring();

}

}

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u20 = document.getElementById('u20');

var u226 = document.getElementById('u226');

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u264 = document.getElementById('u264');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}
gv_vAlignTable['u13'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u54 = document.getElementById('u54');

var u206 = document.getElementById('u206');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u336 = document.getElementById('u336');

var u210 = document.getElementById('u210');

var u318 = document.getElementById('u318');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u136 = document.getElementById('u136');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u31 = document.getElementById('u31');

var u140 = document.getElementById('u140');

var u48 = document.getElementById('u48');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u106 = document.getElementById('u106');

var u88 = document.getElementById('u88');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');

var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u302 = document.getElementById('u302');

u302.style.cursor = 'pointer';
if (bIE) u302.attachEvent("onclick", Clicku302);
else u302.addEventListener("click", Clicku302, true);
function Clicku302(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u40 = document.getElementById('u40');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u96 = document.getElementById('u96');

var u16 = document.getElementById('u16');

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u232 = document.getElementById('u232');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u276 = document.getElementById('u276');

var u154 = document.getElementById('u154');

var u334 = document.getElementById('u334');

var u282 = document.getElementById('u282');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u258 = document.getElementById('u258');

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u342 = document.getElementById('u342');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u284 = document.getElementById('u284');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');

var u92 = document.getElementById('u92');

var u228 = document.getElementById('u228');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u190 = document.getElementById('u190');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u37 = document.getElementById('u37');

var u198 = document.getElementById('u198');

var u348 = document.getElementById('u348');

u348.style.cursor = 'pointer';
if (bIE) u348.attachEvent("onclick", Clicku348);
else u348.addEventListener("click", Clicku348, true);
function Clicku348(e)
{

if (true) {

	self.location.href="商家后台首页.html" + GetQuerystring();

}

}

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u208 = document.getElementById('u208');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u66 = document.getElementById('u66');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u376 = document.getElementById('u376');

u376.style.cursor = 'pointer';
if (bIE) u376.attachEvent("onclick", Clicku376);
else u376.addEventListener("click", Clicku376, true);
function Clicku376(e)
{

if (true) {

	self.location.href="商家自助系统.html" + GetQuerystring();

}

}
gv_vAlignTable['u376'] = 'top';
var u280 = document.getElementById('u280');

var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u288 = document.getElementById('u288');

var u11 = document.getElementById('u11');

var u28 = document.getElementById('u28');

var u356 = document.getElementById('u356');

u356.style.cursor = 'pointer';
if (bIE) u356.attachEvent("onclick", Clicku356);
else u356.addEventListener("click", Clicku356, true);
function Clicku356(e)
{

if (true) {

	self.location.href="咨询管理.html" + GetQuerystring();

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u222 = document.getElementById('u222');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u244 = document.getElementById('u244');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u152 = document.getElementById('u152');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u202 = document.getElementById('u202');

var u52 = document.getElementById('u52');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u316 = document.getElementById('u316');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u326 = document.getElementById('u326');

var u246 = document.getElementById('u246');

var u194 = document.getElementById('u194');

var u132 = document.getElementById('u132');

var u184 = document.getElementById('u184');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u352 = document.getElementById('u352');

u352.style.cursor = 'pointer';
if (bIE) u352.attachEvent("onclick", Clicku352);
else u352.addEventListener("click", Clicku352, true);
function Clicku352(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u78 = document.getElementById('u78');

var u310 = document.getElementById('u310');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u292 = document.getElementById('u292');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u166 = document.getElementById('u166');

var u70 = document.getElementById('u70');

var u6 = document.getElementById('u6');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u220 = document.getElementById('u220');

var u14 = document.getElementById('u14');

var u146 = document.getElementById('u146');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u46 = document.getElementById('u46');

var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');

var u39 = document.getElementById('u39');

var u373 = document.getElementById('u373');

u373.style.cursor = 'pointer';
if (bIE) u373.attachEvent("onclick", Clicku373);
else u373.addEventListener("click", Clicku373, true);
function Clicku373(e)
{

if (true) {

	self.location.href="资料管理.html" + GetQuerystring();

}

}

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u238 = document.getElementById('u238');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u130 = document.getElementById('u130');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u196 = document.getElementById('u196');

var u254 = document.getElementById('u254');

var u320 = document.getElementById('u320');

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u304 = document.getElementById('u304');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u375 = document.getElementById('u375');

u375.style.cursor = 'pointer';
if (bIE) u375.attachEvent("onclick", Clicku375);
else u375.addEventListener("click", Clicku375, true);
function Clicku375(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}
gv_vAlignTable['u375'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u64 = document.getElementById('u64');

var u328 = document.getElementById('u328');

var u116 = document.getElementById('u116');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');

var u286 = document.getElementById('u286');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u214 = document.getElementById('u214');

var u308 = document.getElementById('u308');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u170 = document.getElementById('u170');

u170.style.cursor = 'pointer';
if (bIE) u170.attachEvent("onclick", Clicku170);
else u170.addEventListener("click", Clicku170, true);
function Clicku170(e)
{

if (true) {

	self.location.href="商品添加_编辑.html" + GetQuerystring();

}

}

var u58 = document.getElementById('u58');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u144 = document.getElementById('u144');

var u98 = document.getElementById('u98');

var u178 = document.getElementById('u178');

var u224 = document.getElementById('u224');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u371 = document.getElementById('u371');

u371.style.cursor = 'pointer';
if (bIE) u371.attachEvent("onclick", Clicku371);
else u371.addEventListener("click", Clicku371, true);
function Clicku371(e)
{

if (true) {

	self.location.href="页面管理.html" + GetQuerystring();

}

}

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u50 = document.getElementById('u50');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u322 = document.getElementById('u322');

var u90 = document.getElementById('u90');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u268 = document.getElementById('u268');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u252 = document.getElementById('u252');

var u26 = document.getElementById('u26');

var u182 = document.getElementById('u182');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u350 = document.getElementById('u350');

u350.style.cursor = 'pointer';
if (bIE) u350.attachEvent("onclick", Clicku350);
else u350.addEventListener("click", Clicku350, true);
function Clicku350(e)
{

if (true) {

	self.location.href="主题设置.html" + GetQuerystring();

}

}

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');

u361.style.cursor = 'pointer';
if (bIE) u361.attachEvent("onclick", Clicku361);
else u361.addEventListener("click", Clicku361, true);
function Clicku361(e)
{

if (true) {

	self.location.href="分类管理.html" + GetQuerystring();

}

}

var u204 = document.getElementById('u204');

var u358 = document.getElementById('u358');

u358.style.cursor = 'pointer';
if (bIE) u358.attachEvent("onclick", Clicku358);
else u358.addEventListener("click", Clicku358, true);
function Clicku358(e)
{

if (true) {

	self.location.href="品牌管理.html" + GetQuerystring();

}

}

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u290 = document.getElementById('u290');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');

var u298 = document.getElementById('u298');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u142 = document.getElementById('u142');

var u363 = document.getElementById('u363');

u363.style.cursor = 'pointer';
if (bIE) u363.attachEvent("onclick", Clicku363);
else u363.addEventListener("click", Clicku363, true);
function Clicku363(e)
{

if (true) {

	self.location.href="订单管理.html" + GetQuerystring();

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u340 = document.getElementById('u340');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');

u367.style.cursor = 'pointer';
if (bIE) u367.attachEvent("onclick", Clicku367);
else u367.addEventListener("click", Clicku367, true);
function Clicku367(e)
{

if (true) {

	self.location.href="合作伙伴管理.html" + GetQuerystring();

}

}

var u44 = document.getElementById('u44');

var u84 = document.getElementById('u84');

var u124 = document.getElementById('u124');

var u76 = document.getElementById('u76');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u218 = document.getElementById('u218');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u22 = document.getElementById('u22');

var u272 = document.getElementById('u272');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u112 = document.getElementById('u112');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u250 = document.getElementById('u250');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');

var u354 = document.getElementById('u354');

u354.style.cursor = 'pointer';
if (bIE) u354.attachEvent("onclick", Clicku354);
else u354.addEventListener("click", Clicku354, true);
function Clicku354(e)
{

if (true) {

	self.location.href="特卖活动管理.html" + GetQuerystring();

}

}

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u114 = document.getElementById('u114');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u148 = document.getElementById('u148');

var u274 = document.getElementById('u274');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u200 = document.getElementById('u200');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u158 = document.getElementById('u158');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u7 = document.getElementById('u7');

var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u174 = document.getElementById('u174');

var u24 = document.getElementById('u24');

var u312 = document.getElementById('u312');

var u56 = document.getElementById('u56');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u343 = document.getElementById('u343');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u188 = document.getElementById('u188');

var u248 = document.getElementById('u248');

var u338 = document.getElementById('u338');

u338.style.cursor = 'pointer';
if (bIE) u338.attachEvent("onclick", Clicku338);
else u338.addEventListener("click", Clicku338, true);
function Clicku338(e)
{

if (true) {

	self.location.href="商家后台首页.html" + GetQuerystring();

}

}

var u18 = document.getElementById('u18');

if (window.OnLoad) OnLoad();
