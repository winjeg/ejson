const leftEditor = document.getElementById('editor')
const rightViewer = document.getElementById('viewer')

const json = {
    "string": "Welcome to use Easy Json Editor",
    "arr": [1, 2],
    "bool": true,
    "nil": null,
    "number": 123,
    "object": {
        "a": "b",
        "c": "d"
    }
}

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
                jsonViewer.updateText(jsonString)
            }
        }
        const jsonEditor = new JSONEditor(leftEditor, editorOptions, json)
        const jsonViewer = new JSONEditor(rightViewer, viewerOptions, json)

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