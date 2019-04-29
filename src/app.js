import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
    el: "#app",
    data: {
      tasks: [
        { name: "finish homework", priority: "high" },
        { name: "add radio buttons", priority: "low" },
        { name: "add change priority buttons", priority: "low" }
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function (){
        this.tasks.push({
          name: this.newTask,
					priority: ""
        });
        this.newTask = "";
      }
		}
	})
});
