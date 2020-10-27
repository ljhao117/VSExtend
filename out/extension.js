"use strict";
const vscode = require("vscode");

function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.shortcutComment', function () {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;

        const comment = '/**\r * \r*/';
        if (editor) {
            const selection = editor.selection;

            editor.edit((editBuilder) => {
                editBuilder.replace(selection, comment);
            });
        }
        
    });
    
    context.subscriptions.push(disposable);
}
exports.activate = activate;
