"use strict";

// import * as vscode from 'vscode';

const vscode = require("vscode");
// import {subscribeToDocumentChanges, EMOJI_MENTION} from './src/diagnostic';

function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.reverseWord', function () {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            // Get the word within the selection
            const word = document.getText(selection);
            const reversed = word.split('').reverse().join('');
            editor.edit((editBuilder) => {
                editBuilder.replace(selection, reversed);
            });
        }
    });
    
    context.subscriptions.push(disposable);
}
exports.activate = activate;
