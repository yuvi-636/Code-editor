var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");
editor.getSession().setMode("ace/mode/javascript");

function runCode() {
    try {
    
        var code = editor.getValue();
        
        var func = new Function(code);

        func();
    } catch (error) {
        console.error("Error executing code:", error);
    }
}
