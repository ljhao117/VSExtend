const { ThemeIcon } = require("vscode");

class WordCounter {
    constructor(_vscode) {  //构建函数，传入vscode对象
        this.init();
    }

    init() {                //初始化
        var vscode = this.vscode;
        var StatusBarAlignment = vscode.StatusBarAlignment;
        var window = this.vscode.window;

        //statusBar，需要手动释放
        this.statusBar = window.createStatusBarItem(StatusBarAlignment.left);

        //跟注册事件相配合的数组，事件注册，也需要释放
        var disposable = [];
        //事件在注册时，会自动填充一个回调的dispose到数组
        window.onDidChangeTextEditorSelection(this.updateText, this, disposable);

        //保存需要释放的资源
        this.disposable = vscode.Disposable.from(disposable);

        this.updateText();
        this.statusBar.show();
    }

    updateText() {
        var window = this.vscode.window;
        this.editor = window.activeTextEditor;
        var content = this.editor.document.getText();
        var len = content.replace(/[\r\n\s] + /g, '').length;
        this.statusBar.text = `已经写了${len}个字符`;
    }

    dispose() {         //实现dispose方法
        this.disposable.dispose();
        this.statusBar.dispose();
    }
}

module.exports = WordCounter;
