/**
 * Created by lizheng on 2014-09-18.
 * 继承自EasyButton的，目录菜单按钮专用类
 */

L.Control.MenuButtons = L.Control.EasyButtons.extend({
    options: {
        position: 'topright',
        title: '',
        intentedIcon: 'fa-circle-o',
        iconColor: 'black'
    },

    onAdd: function () {
        var container = L.DomUtil.create('div', 'menu-bar menu-control');

        this.link = L.DomUtil.create('a', '', container);
        L.DomUtil.create('i', 'fa fa-lg ' + this.options.intentedIcon, this.link);
        var spanEle = document.createElement("span");
        spanEle.setAttribute("class","menu-text");
        spanEle.innerHTML = "&nbsp;&nbsp;"+this.options.title;
        this.link.appendChild(spanEle);
        this.link.href = '#';

        L.DomEvent.on(this.link, 'click', this._click, this);
        this.link.title = this.options.title;

        return container;
    }
});

L.menuButton = function( btnIcon , btnFunction , btnTitle , btnMap ) {
    var newControl = new L.Control.MenuButtons;
    if (btnIcon) newControl.options.intentedIcon = btnIcon;

    //if (btnIconColor) newControl.options.iconColor = btnIconColor;

    if ( typeof btnFunction === 'function'){
        newControl.intendedFunction = btnFunction;
    }

    if (btnTitle) newControl.options.title = btnTitle;

    if ( btnMap == '' ){
        // skip auto addition
    } else if ( btnMap ) {
        btnMap.addControl(newControl);
    } else {
        map.addControl(newControl);
    }
    return newControl;
};
