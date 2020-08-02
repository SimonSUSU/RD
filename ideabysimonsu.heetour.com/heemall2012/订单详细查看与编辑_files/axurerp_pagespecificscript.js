
var PageName = '订单详细查看与编辑';
var PageId = 'pb3f860b1ad034697ac820360dfaed887'
var PageUrl = '订单详细查看与编辑.html'
document.title = '订单详细查看与编辑';

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
gv_vAlignTable['u33'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u332 = document.getElementById('u332');

var u157 = document.getElementById('u157');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');

var u162 = document.getElementById('u162');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="商品分类管理.html" + GetQuerystring();

}

}

var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	self.location.href="商家店铺咨询管理.html" + GetQuerystring();

}

}

var u74 = document.getElementById('u74');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	self.location.href="交易管理列表.html" + GetQuerystring();

}

}
gv_vAlignTable['u104'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u366 = document.getElementById('u366');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

	self.location.href="友情链接管理.html" + GetQuerystring();

}

}

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u306 = document.getElementById('u306');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u187 = document.getElementById('u187');

var u324 = document.getElementById('u324');

var u346 = document.getElementById('u346');

var u32 = document.getElementById('u32');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="会员通知.html" + GetQuerystring();

}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="网站前端.html" + GetQuerystring();

}

}
gv_vAlignTable['u5'] = 'top';
var u360 = document.getElementById('u360');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u368 = document.getElementById('u368');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u330 = document.getElementById('u330');

var u314 = document.getElementById('u314');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u36 = document.getElementById('u36');

var u295 = document.getElementById('u295');

var u256 = document.getElementById('u256');

var u143 = document.getElementById('u143');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u138 = document.getElementById('u138');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u102 = document.getElementById('u102');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u300 = document.getElementById('u300');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="交易管理列表.html" + GetQuerystring();

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u364 = document.getElementById('u364');

var u264 = document.getElementById('u264');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u183 = document.getElementById('u183');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u344 = document.getElementById('u344');

var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u279 = document.getElementById('u279');

var u336 = document.getElementById('u336');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u318 = document.getElementById('u318');

var u191 = document.getElementById('u191');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u199 = document.getElementById('u199');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u140 = document.getElementById('u140');

var u48 = document.getElementById('u48');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u88 = document.getElementById('u88');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u294 = document.getElementById('u294');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u119 = document.getElementById('u119');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u302 = document.getElementById('u302');

var u289 = document.getElementById('u289');

var u40 = document.getElementById('u40');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

	self.location.href="商品评论管理.html" + GetQuerystring();

}

}

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u281 = document.getElementById('u281');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u227 = document.getElementById('u227');

var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="销售员管理.html" + GetQuerystring();

}

}

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if (true) {

	self.location.href="商家管理列表.html" + GetQuerystring();

}

}

var u362 = document.getElementById('u362');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u12 = document.getElementById('u12');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u209 = document.getElementById('u209');

var u276 = document.getElementById('u276');

var u154 = document.getElementById('u154');

var u334 = document.getElementById('u334');

var u282 = document.getElementById('u282');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u342 = document.getElementById('u342');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u284 = document.getElementById('u284');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u185 = document.getElementById('u185');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="特卖活动管理列表.html" + GetQuerystring();

}

}

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u348 = document.getElementById('u348');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u34 = document.getElementById('u34');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	self.location.href="信息管理列表.html" + GetQuerystring();

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u376 = document.getElementById('u376');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u288 = document.getElementById('u288');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="商家类型管理.html" + GetQuerystring();

}

}

var u356 = document.getElementById('u356');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u213 = document.getElementById('u213');

var u244 = document.getElementById('u244');

var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');

var u239 = document.getElementById('u239');

var u237 = document.getElementById('u237');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="交易管理列表.html" + GetQuerystring();

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u316 = document.getElementById('u316');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{

if (true) {

	self.location.href="商家管理列表.html" + GetQuerystring();

}

}

var u326 = document.getElementById('u326');

var u246 = document.getElementById('u246');

var u194 = document.getElementById('u194');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
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

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u370 = document.getElementById('u370');

var u283 = document.getElementById('u283');

var u78 = document.getElementById('u78');

var u310 = document.getElementById('u310');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u374 = document.getElementById('u374');

var u201 = document.getElementById('u201');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u166 = document.getElementById('u166');

var u70 = document.getElementById('u70');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="网站管理后台.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u113 = document.getElementById('u113');

var u207 = document.getElementById('u207');

var u220 = document.getElementById('u220');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="系统设置.html" + GetQuerystring();

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u225 = document.getElementById('u225');

var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="推荐类型管理.html" + GetQuerystring();

}

}

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u230 = document.getElementById('u230');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u254 = document.getElementById('u254');

var u320 = document.getElementById('u320');

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u304 = document.getElementById('u304');

var u145 = document.getElementById('u145');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u372 = document.getElementById('u372');

var u64 = document.getElementById('u64');

var u328 = document.getElementById('u328');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');

var u286 = document.getElementById('u286');

var u147 = document.getElementById('u147');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u149 = document.getElementById('u149');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u98 = document.getElementById('u98');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	self.location.href="商品管理列表.html" + GetQuerystring();

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u322 = document.getElementById('u322');

var u90 = document.getElementById('u90');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="后台首页.html" + GetQuerystring();

}

}

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="统计报表.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u309 = document.getElementById('u309');

var u350 = document.getElementById('u350');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u204 = document.getElementById('u204');

var u358 = document.getElementById('u358');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u115 = document.getElementById('u115');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u285 = document.getElementById('u285');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u290 = document.getElementById('u290');

var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u164 = document.getElementById('u164');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u177 = document.getElementById('u177');

var u301 = document.getElementById('u301');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u340 = document.getElementById('u340');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="商品品牌管理.html" + GetQuerystring();

}

}

var u84 = document.getElementById('u84');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u76 = document.getElementById('u76');

var u223 = document.getElementById('u223');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u161 = document.getElementById('u161');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	self.location.href="会员管理列表.html" + GetQuerystring();

}

}

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u38 = document.getElementById('u38');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u313 = document.getElementById('u313');

var u181 = document.getElementById('u181');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u265 = document.getElementById('u265');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="信息分类管理.html" + GetQuerystring();

}

}

var u354 = document.getElementById('u354');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u297 = document.getElementById('u297');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u274 = document.getElementById('u274');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="商家等级管理.html" + GetQuerystring();

}

}

var u158 = document.getElementById('u158');

var u217 = document.getElementById('u217');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u235 = document.getElementById('u235');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u287 = document.getElementById('u287');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u307 = document.getElementById('u307');

var u174 = document.getElementById('u174');

var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	self.location.href="信息管理列表.html" + GetQuerystring();

}

}

var u312 = document.getElementById('u312');

var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	self.location.href="会员管理列表.html" + GetQuerystring();

}

}

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u338 = document.getElementById('u338');

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="商品管理列表.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
