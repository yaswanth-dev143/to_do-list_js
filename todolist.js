let submit = document.querySelector("#submit_form");
submit.addEventListener("submit", () => {
  add();
  display();
});

let add = () => {
  let inputEl = document.querySelector("#input");
  let task = inputEl.value.trim();

  //get tasks from local storage
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  taskList.unshift(task);
  //set to local storage
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

let display = () => {
  let taskCont = document.querySelector("#task_cont");
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  if (taskList.length !== 0) {
    let eachtask = ``;
    for (let task of taskList) {
      eachtask += `<li
      class="bg-cyan-500 mt-[20px] h-[40px] rounded-xl flex justify-between content-center"
    >
      <p class="mt-2 ml-3 w-[30%] overflow-hidden">${task}</p>
      <button class="mr-[12px] text-white butt" id="close">clear</button>
    </li>`;
    }
    taskCont.innerHTML = eachtask;
  }
};
display();

//remove task
let taskCont = document.querySelector("#task_cont");
taskCont.addEventListener("click", (event) => {
  let targetElement = event.target;
  if (targetElement.classList.contains("butt")) {
  }
});
