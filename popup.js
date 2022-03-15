const leftEditor = document.getElementById('editor')
const rightViewer = document.getElementById('viewer')
const STORE_KEY = 'easy-json-editor';

function loadEditor() {
    var json = {}
    try {
        const jsonStr = localStorage.getItem(STORE_KEY) || '{}'
        json = JSON.parse(jsonStr)
    } catch (error) {
        json = {}
    }
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
    const jsonEditor = new JSONEditor(leftEditor, editorOptions, json)
    const jsonViewer = new JSONEditor(rightViewer, viewerOptions, json)
}

document.addEventListener('DOMContentLoaded', loadEditor, false);
