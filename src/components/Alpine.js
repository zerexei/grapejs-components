export default (editor) => {
//   const comp1 = editor.DomComponents.addType('test-component-2', {
//     model: {
//       defaults: {
//         traits: [
//           'id',
//           {
//             type: 'select', // Type of the trait
//             label: 'Type', // The label you will see in Settings
//             name: 'type', // The name of the attribute/property to use on component
//             options: [
//               { id: 'text', name: 'Text' },
//               { id: 'email', name: 'Email' },
//               { id: 'password', name: 'Password' },
//               { id: 'number', name: 'Number' },
//             ],
//           },
//           {
//             type: 'select', // Type of the trait
//             label: 'colunms', // The label you will see in Settings
//             name: 'columns', // The name of the attribute/property to use on component
//             options: [
//               { value: '1', name: '1 column' },
//               { value: '2', name: '2 columns' },
//               { value: '3', name: '3 columns' },
//             ],
//           },
//         ],
//         // testprop: '12345',
//         // url: 'https://jsonplaceholder.typicode.com/posts',
//       },
//     },
//   });

  editor.DomComponents.addType('test-component', {
    model: {
      defaults: {
        traits: [
          'id',
          {
            type: 'select', // Type of the trait
            label: 'Type', // The label you will see in Settings
            name: 'type', // The name of the attribute/property to use on component
            options: [
              { id: 'text', name: 'Text' },
              { id: 'email', name: 'Email' },
              { id: 'password', name: 'Password' },
              { id: 'number', name: 'Number' },
            ],
          },
          {
            type: 'select', // Type of the trait
            label: 'colunms', // The label you will see in Settings
            name: 'columns', // The name of the attribute/property to use on component
            options: [
              { value: '1', name: '1 column' },
              { value: '2', name: '2 columns' },
              { value: '3', name: '3 columns' },
            ],
          },
        ],
        // testprop: '12345',
        // url: 'https://jsonplaceholder.typicode.com/posts',
      },
      init() {
        // console.log('Local hook: model.init', this.attributes.testprop);
        // fetch(this.attributes.url)
        //   .then((response) => response.json())
        //   .then((commits) => {
        //     this.set('testprop', 'Test');
        //     console.log(this.attributes.testprop);
        //   });
        // this.listenTo(this, 'change:testprop', this.handlePropChange);
        // // Here we can listen global hooks with editor.on('...')
      },
      updated(property, value, prevValue) {
        console.log(this);
        if (property == 'attributes' && value?.type == 'text') {
          this.replaceWith(
            `<div data-gjs-type="test-component" style="padding:2rem;"><h2 style="padding:2rem;">Updated Ipsum 1</h2></div>`
          );
          editor.select(null);
        } else if (property == 'attributes' && value?.type == 'email') {
          this.replaceWith(
            `<div data-gjs-type="test-component" style="padding:2rem;"><h2 style="padding:2rem;">Updated Ipsum 2</h2></div>`
          );
          editor.select(null);
        } else if (property == 'attributes' && value?.type == 'password') {
          this.replaceWith(
            `<div data-gjs-type="test-component" style="padding:2rem;"><h2 style="padding:2rem;">Updated Ipsum 3</h2></div>`
          );
          editor.select(null);
        }

        if (value.columns == '1') {
          this.setClass('grid grid-cols-1 class1');
        } else if (value.columns == '2') {
          this.setClass('grid grid-cols-2 class1 class2');
        } else if (value.columns == '3') {
          this.setClass('grid grid-cols-3 class1 class2 class3');
        }
      },
      //   removed() {
      //     console.log('Local hook: model.removed');
      //   },
    },
    // view: {
    //   init() {
    //     console.log('Local hook: view.init');
    //   },
    // },
  });

  // A block for the custom component

  editor.BlockManager.add('test-component', {
    label: 'Test Component',
    content: `<div data-gjs-type="test-component" style="padding:2rem;"><h2 style="padding:2rem;">Lorem Ipsum</h2></div>`,
  });
};
