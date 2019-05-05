function getToolbarItemList()
{
    return [
        {id: 'submenu-import', icon: 'icons8-upload-24.png', tooltip: '가져오기'},
        {id: 'submenu-export', icon: 'icons8-download-24.png', tooltip: '내려받기'},
        {id: 'sep'},
        {id: 'submenu-undo', icon: 'undo.png', tooltip: '실행취소'},
        {id: 'submenu-redo', icon: 'redo.png', tooltip: '다시실행'},
        {id: 'sep'},
        {id: 'submenu-field-toggle', icon: 'visible.png', tooltip: '필드보이기/숨기기'},
        {id: 'submenu-field-order', icon: 'data-in-both-directions.png', tooltip: '필드순서 바꾸기'},
        {id: 'submenu-zoom-in', icon: 'zoom-in.png', tooltip: '확대/축소'},
        {id: 'sep'},
        {id: 'submenu-pn-style', icon: 'phone.png', tooltip: '전화번호 서식'},
        {id: 'submenu-px-style', icon: 'text.png', tooltip: '텍스트 서식'},
        {id: 'submenu-merge-cell', icon: 'merge-documents.png', tooltip: '셀내용 병합'},
        {id: 'submenu-sep-cell', icon: 'separate-document.png', tooltip: '셀내용 나누기'},
    ]
}

function Toolbar(menuHandler)
{
    this.menuHandler = menuHandler;
    this.toolbarItemList = null;

    this.init = function () {
        this.toolbarItemList = [
            {id: 'submenu-import', icon: 'icons8-upload-24.png', tooltip: '가져오기'},
            {id: 'submenu-export', icon: 'icons8-download-24.png', tooltip: '내려받기'},
            {id: 'sep'},
            {id: 'submenu-undo', icon: 'undo.png', tooltip: '실행취소'},
            {id: 'submenu-redo', icon: 'redo.png', tooltip: '다시실행'},
            {id: 'sep'},
            {id: 'submenu-field-toggle', icon: 'visible.png', tooltip: '필드보이기/숨기기'},
            {id: 'submenu-field-order', icon: 'data-in-both-directions.png', tooltip: '필드순서 바꾸기'},
            {id: 'submenu-zoom-in', icon: 'zoom-in.png', tooltip: '확대/축소'},
            {id: 'sep'},
            {id: 'submenu-pn-style', icon: 'phone.png', tooltip: '전화번호 서식'},
            {id: 'submenu-px-style', icon: 'text.png', tooltip: '텍스트 서식'},
            {id: 'submenu-merge-cell', icon: 'merge-documents.png', tooltip: '셀내용 병합'},
            {id: 'submenu-sep-cell', icon: 'separate-document.png', tooltip: '셀내용 나누기'}
        ]
    }

    this.create = function (parent)
    {
        var ul = $('<ul class="toolbar-item-container"></ul>');

        for (var i = 0; i < this.toolbarItemList.length; i++)
        {
            var item = this.toolbarItemList[i];
            if (item.id == 'sep')
            {
                var li = $('<li class="toolbar-item"> <div class="toolbar-sep"></div></li>');
                ul.append(li);
            }
            else
            {
                var li = $('<li class="toolbar-item"></li>');
                var btn = $('<button id="' + item.id + '" class="toolbar" data-balloon="' + item.tooltip + '" data-balloon-pos="down"><img src="img/' + item.icon + '" class="icon"></button>');
                li.append(btn);
                ul.append(li);
            }
        }

        parent.append(ul);
        var thisToolbar = this;

        $('.toolbar-item-container').find('button').on('click', function (e)
        {
            var menuId = $(this).attr('id');
            thisToolbar.menuHandler.doMenuAction(menuId);
        });
    }
}