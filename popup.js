const leftEditor = document.getElementById('editor')
const rightViewer = document.getElementById('viewer')
const STORE_KEY = 'easy-json-editor';

function loadEditor() {
    try {
        const viewerOptions = {
            mode: 'view',
        }
        const editorOptions = {
            mode: 'code',
            modes: ['code', 'form', 'text', 'tree', 'view', 'preview'], // allowed modes
            onModeChange: function (newMode, oldMode) {
                console.log('Mode switched from', oldMode, 'to', newMode)
            },
            onChangeText: function (jsonString) {
                localStorage.setItem(STORE_KEY, jsonString);
                jsonViewer.updateText(jsonString)
            }
        }
        const json = localStorage.getItem(STORE_KEY) ||  '{}' 
        const jsonEditor = new JSONEditor(leftEditor, editorOptions, JSON.parse(json))
        const jsonViewer = new JSONEditor(rightViewer, viewerOptions, JSON.parse(json))

    } catch (error) {
        // console.log(error)
    }
}

document.addEventListener('DOMContentLoaded', loadEditor, false);


chrome.tabs.executeScript(function() {
    if (chrome.runtime.lastError) {
       var errorMsg = chrome.runtime.lastError.message
       if (errorMsg == "Cannot access a chrome:// URL") {
           // Error handling here
       }
    }
})