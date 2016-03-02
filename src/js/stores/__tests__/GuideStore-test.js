jest.dontMock('../GuideStore');
jest.dontMock('object-assign');

describe('GuideStore', function() {

  var AppDispatcher;
  var TodoStore;
  var callback;

  // mock actions 
  // var actionGuideCreate = {
  //   actionType: TodoConstants.TODO_CREATE,
  //   text: 'foo'
  // };
  // var actionTodoDestroy = {
  //   actionType: TodoConstants.TODO_DESTROY,
  //   id: 'replace me in test'
  // };

  beforeEach(function() {
    // AppDispatcher = require('../../dispatcher/AppDispatcher');
    GuideStore = require('../GuideStore');
    // callback = AppDispatcher.register.mock.calls[0][0];
  });

  // it('registers a callback with the dispatcher', function() {
  //   expect(AppDispatcher.register.mock.calls.length).toBe(1);
  // });

  // it('initializes with no to-do items', function() {
  //   var all = TodoStore.getAll();
  //   expect(all).toEqual({});
  // });

  it('creates a to-do item', function() {
    // callback(actionTodoCreate);
    var all = GuideStore.fetchGuides();
    var keys = Object.keys(all);
    expect(keys.length).toBe(1);
    expect(all[keys[0]].text).toEqual('foo');
  });

  // it('destroys a to-do item', function() {
  //   callback(actionTodoCreate);
  //   var all = TodoStore.getAll();
  //   var keys = Object.keys(all);
  //   expect(keys.length).toBe(1);
  //   actionTodoDestroy.id = keys[0];
  //   callback(actionTodoDestroy);
  //   expect(all[keys[0]]).toBeUndefined();
  // });

});