import Controller from '@ember/controller';

export default Controller.extend({
 
  actions: {
    addTask () {
      var title = this.get('title');
      
    
      // Create new task:
      var newTask = this.store.createRecord('task', {
        title: title,
        is_completed: false
        
      });

      // Save to database:
      newTask.save();

      // Clear the form:
      this.setProperties({
        title: ''
      });
    }

  }
});
