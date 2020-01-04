import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editTask (id) {
    
      var self = this;
      var title = this.get('model.title');
      var is_completed = this.get('model.is_completed');

      // Update task:
      this.store.findRecord('task', id).then(function (task) {
        task.set('title', title);
        task.set('is_completed', is_completed);
        task.save();

      })

      // Redirect to /tasks:
      self.transitionToRoute('tasks');


    }
  }
});
