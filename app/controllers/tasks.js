import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({

  // Footer filters:
  totalTasks: computed('tasks.[]', function(){
    return this.get('tasks.length');
      }),
  totalCompleted: computed('tasks.[]', 'tasks.@each.is_completed', function () {
     var tasks = this.get('tasks');
     return tasks.filterBy('is_completed', true).get("length");
      }),
  notCompleted: computed('tasks.[]', 'tasks.@each.is_completed', function () {
        var tasks = this.get('tasks');
        return tasks.filterBy('is_completed', false).get("length");
      }),

  actions: {
    // Delete the task from DB:
    removeTask (id) {
      this.store.findRecord('task', id, { reload: true }).then( function (task) {
        task.deleteRecord();
        task.save();
      });
    },

    // Toggle is_completed when click:
    checkIsCompleted (id, title, is_completed) {    
      var title = title;
      var is_completed = (is_completed == false) ? true : false;
     
      // Update task after is_completed changed:
      this.store.findRecord('task', id).then(function (task) {
        task.set('title', title);
        task.set('is_completed', is_completed);
        task.save();

      })
     }
    }
});
