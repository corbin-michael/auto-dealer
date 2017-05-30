export function iFrameOn() {
	//tell the iframe to use designMode
  var iframe = document.getElementById('editor').contentDocument;
  iframe.designMode = 'on';
}

export function bold() {
	editor.document.execCommand('bold',false,null);
}

export function underline() {
	editor.document.execCommand('underline',false,null);
}

export function italic() {
	editor.document.execCommand('italic',false,null);
}

export function link() {
	var theLink = prompt("Enter the URL:", "http://");
	editor.document.execCommand('createLink',false,theLink);
}

export function unlink() {
	editor.document.execCommand('unLink',false,null);
}

export function unorderedList() {
	editor.document.execCommand('insertUnorderedList',false,'newUL');
}

export function orderedList() {
	editor.document.execCommand('insertOrderedList',false,'newOL');
}

// function submit_form(e) {
// 	var theForm = document.getElementById('editor-form');
// 	theForm.elements['my-textarea'].value = window.frames['richTextField'].document.body.innerHTML;
// }
