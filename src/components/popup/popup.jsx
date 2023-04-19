import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../../store/tasksSlice.js';

export default function DeleteTaskPopup() {
	const dispatch = useDispatch();
	const currentTask = useSelector((state) => state.tasks[currentTaskIndex]);
	const currentTaskIndex = useSelector((state) => state.taskIndex.value);

	const popupWrapper = document.querySelector('.popup');

	function hidePopup() {
		popupWrapper.classList.remove('active');
	}

	function outBodyClickHandler(e) {
		if (!e.target.closest('.popup__body')) hidePopup();
	}

	function deleteBtnClickHandler() {
		popupWrapper.classList.remove('active');

		document.querySelector('.wrapper').classList.remove('active');
		document.querySelectorAll('.task').forEach((task) => {
			task.classList.remove('active');
		});

		dispatch(removeTask(currentTaskIndex));
	}

	return (
		<div className='popup' onClick={outBodyClickHandler}>
			<div className="popup__body">
				<div className='popup__question'>
					You want to delete the '{currentTask ? currentTask.title : ''}'a, right?
				</div>
				<button onClick={hidePopup} className='popup__cancel-btn'>Cancel</button>
				<button onClick={deleteBtnClickHandler} className='popup__right-btn'>Delete</button>
			</div>
		</div>)
}
