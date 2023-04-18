import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: [
		{
			title: 'Test task',
			taskStatus: false,
			isImportant: false,
			steps: [{ stepDone: false, title: '1' }, { stepDone: false, title: '2' }],
			note: 'Note_1',
			lastEdit: new Date().toLocaleString('ru', {
				hour: 'numeric',
				minute: 'numeric',
			}),
		},
		{
			title: 'Second test task',
			taskStatus: false,
			isImportant: false,
			steps: [],
			note: 'Note_2',
			lastEdit: new Date().toLocaleString('ru', {
				hour: 'numeric',
				minute: 'numeric',
			}),
		}
	],
	reducers: {
		refreshTasks: (state) => {
			return [
				{
					title: 'Test task',
					taskStatus: false,
					isImportant: false,
					steps: [{ stepDone: false, title: '1' }, { stepDone: false, title: '2' }],
					note: '',
					lastEdit: new Date().toLocaleString('ru', {
						hour: 'numeric',
						minute: 'numeric',
					}),
				},
				{
					title: 'Second test task',
					taskStatus: false,
					isImportant: false,
					steps: [],
					note: '',
					lastEdit: new Date().toLocaleString('ru', {
						hour: 'numeric',
						minute: 'numeric',
					}),
				}
			];
		},

		taskStatusChange: (state, taskIndex) => {
			state[taskIndex.payload].taskStatus = !state[taskIndex.payload].taskStatus;
		},

		//"action" require String value
		addTask: (state, action) => {
			state.push(
				{
					title: action.payload,
					taskStatus: false,
					isImportant: false,
					steps: [],
					note: '',
					lastEdit: new Date().toLocaleString('ru', {
						hour: 'numeric',
						minute: 'numeric',
					}),
				}
			);
		},

		removeTask: (state, taskIndex) => {
			state.splice(taskIndex, 1);
		},

		taskTitleChange: (state, action) => {
			state[action.payload.taskIndex].title = action.payload.newTaskTitle;
		},

		taskStarStatusChange: (state, taskIndex) => {
			state[taskIndex.payload].isImportant = !state[taskIndex.payload].isImportant;
		},

		saveNote: (state, action) => {
			console.log(action);
			state[action.payload.taskIndex].note = action.payload.noteText;
		},

		addStep: (state, action) => {
			state[action.payload.taskIndex].steps.push(
				{
					stepDone: false,
					title: action.payload.newStepTitle,
				}
			)
		},

		stepStatusChange: (state, action) => {
			state[action.payload.taskIndex].steps[action.payload.stepIndex].stepDone = !state[action.payload.taskIndex].steps[action.payload.stepIndex].stepDone;
		},

		stepTitleChange: (state, action) => {
			console.log(action);
			state[action.payload.taskIndex].steps[action.payload.stepIndex].title = action.payload.newStepTitle;
		},

		removeStep: (state, action) => {
			state[action.payload.taskIndex].steps.splice(action.payload.stepIndex, 1);
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	refreshTasks,
	taskStatusChange,
	addTask,
	removeTask,
	taskTitleChange,
	taskStarStatusChange,
	saveNote,
	addStep,
	stepStatusChange,
	stepTitleChange,
	removeStep,
} = tasksSlice.actions;

export default tasksSlice.reducer;