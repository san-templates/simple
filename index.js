var MyComponent = san.defineComponent({
    template: '<h1>Hello {{name}} !</h1>',
    initData: function () {
        var initData = {
            name: 'San'
        };
        return initData;
    }
});

var myComponent = new MyComponent();
myComponent.attach(document.body);
