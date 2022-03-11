const leftEditor = document.getElementById('editor')
const rightViewer = document.getElementById('viewer')
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
const viewerOptions = {
    mode: 'view'
}
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
try {
    const jsonEditor = new JSONEditor(leftEditor, editorOptions, json)
} catch (e) {
    console.log(e)
}
const jsonViewer = new JSONEditor(rightViewer, viewerOptions, json)
window.onerror= function() {
}