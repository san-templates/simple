var MyComponent = san.defineComponent({
    template: '<h1>Hello \{{name}} !</h1>',
    initData: function(){
        return {
            name: 'San'
        };
    }
});

var myComponent = new MyComponent();
myComponent.attach(document.body);
