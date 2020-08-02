
var PageName = 'xxxxxxxx';
var PageId = 'peb5f5273b5b94d61bdc3620e50c5c30e'
var PageUrl = 'xxxxxxxx.html'
document.title = 'xxxxxxxx';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

if (window.OnLoad) OnLoad();
