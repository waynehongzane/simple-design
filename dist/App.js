var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';
import Upload from './components/Upload/upload';
import { AutoComplete } from './components/AutoComplete/autoComplete';
library.add(fas);
var App = function () {
    var _a = useState(''), value = _a[0], setValue = _a[1];
    // upLoad数据
    // #region
    var defaultFileList = [
        { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
        { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
        { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
    ];
    var checkFileSize = function (file) {
        if (Math.round(file.size / 1024) > 50) {
            alert('file too big');
            return false;
        }
        return true;
    };
    var filePromise = function (file) {
        var newFile = new File([file], 'new_name.docx', { type: file.type });
        return Promise.resolve(newFile);
    };
    var lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
    var lakersWithNumber = [
        { value: 'bradley', number: 11 },
        { value: 'pope', number: 1 },
        { value: 'caruso', number: 4 },
        { value: 'cook', number: 2 },
        { value: 'cousins', number: 15 },
        { value: 'james', number: 23 },
        { value: 'AD', number: 3 },
        { value: 'green', number: 14 },
        { value: 'howard', number: 39 },
        { value: 'kuzma', number: 0 },
    ];
    // const handleFetch = (query: string) => {
    //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    // }
    // const handleFetch = (query: string) => {
    //   return lakersWithNumber.filter(player => player.value.includes(query))
    // }
    var handleFetch = function (query) {
        return fetch("http://api.github.com/search/users?q=".concat(query))
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            console.log(items);
            return items.slice(0, 10).map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    var renderOption = function (item) {
        var itemWithGithub = item;
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", null,
                "Name: ",
                itemWithGithub.value),
            React.createElement("p", null,
                "Number: ",
                itemWithGithub.url)));
    };
    // #endregion
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null, "\u4E0A\u4F20\u7EC4\u4EF6"),
            React.createElement(Upload, { action: "https://run.mocky.io/v3/deb58aba-c046-4519-9c91-9a7f1e36f4f3", name: "fileName", multiple: true, drag: true },
                React.createElement(Icon, { icon: "upload", size: "5x", theme: "secondary" }),
                React.createElement("br", null),
                React.createElement("p", null, "Drag file over to upload")),
            React.createElement("p", null, "\u81EA\u5B9A\u4E49\u6A21\u677F"),
            React.createElement(AutoComplete, { style: { width: '300px' }, fetchSuggestions: handleFetch, onSelect: function (item) { console.log(item); }, renderOption: renderOption, placeholder: 'autoComplete' }),
            React.createElement("p", null, "input\u7EC4\u4EF6"),
            React.createElement(Input, { style: { width: '300px' }, value: value, onChange: function (e) { return setValue(e.target.value); } }),
            React.createElement(Input, { style: { width: '300px' }, placeholder: 'default input' }),
            React.createElement(Input, { style: { width: '300px' }, placeholder: 'disabled input', disabled: true }),
            React.createElement(Input, { style: { width: '300px' }, placeholder: 'input with icon', icon: "search" }),
            React.createElement(Input, { style: { width: '300px' }, placeholder: 'large size', size: 'lg' }),
            React.createElement(Input, { style: { width: '300px' }, placeholder: 'small size', size: 'sm' }),
            React.createElement(Input, { style: { width: '300px' }, placeholder: 'predend text', prepend: "https://" }),
            React.createElement(Input, { style: { width: '300px' }, placeholder: 'append text', append: ".com" }),
            React.createElement(Icon, { icon: "arrow-down", theme: 'primary', size: '10x' }),
            React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { console.log(index); }, defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, null, "cool link2"),
                React.createElement(SubMenu, { title: 'drowdown' },
                    React.createElement(MenuItem, null, "cool link"),
                    React.createElement(MenuItem, null, "cool link2")),
                React.createElement(MenuItem, null, "cool link3")),
            React.createElement(Button, null, "\u666E\u901A"),
            React.createElement(Button, { btnType: 'primary', size: 'sm' }, "primary small"),
            React.createElement(Button, { btnType: 'primary', size: 'lg' }, "primary large"),
            React.createElement(Button, { btnType: 'default', size: 'sm' }, "default small"),
            React.createElement(Button, { btnType: 'default', size: 'lg' }, "default large"),
            React.createElement(Button, { btnType: 'danger', size: 'lg' }, "danger large"),
            React.createElement(Button, { btnType: 'link', href: 'http://www.baidu.com' }, "Hello"),
            React.createElement(Button, { btnType: 'link', href: 'http://www.baidu.com', disabled: true }, "Hello"),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
};
export default App;
