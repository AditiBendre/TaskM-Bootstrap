const taskContainer = document.querySelector(".task__container");
const globalStore = [];

const newCard = (taskdata) => `
    <div class="col-sm-12 col-md-6 col-lg-4 id=${taskdata.id}">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-end">
        <div>
          <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      <div class="card-body">
        <img src=${taskdata.imageUrl} class="card-img-top" alt="bao">
        <h5 class="card-title mt-3">${taskdata.taskTitle}</h5>
        <p class="card-text">${taskdata.taskDesription}</p>
        <a href="#" class="btn btn-primary">${taskdata.taskType}</a>
      </div>
    </div>
  </div>
    `;

const loadInitialCardData = () => {
  const getData = localStorage.getItem("taskm");

  const {cards} = JSON.parse(getData);
  cards.map((Cobj) => {
    taskContainer.insertAdjacentHTML("beforeend", newCard(Cobj));
    globalStore.push(Cobj);
  })
}

const saveChanges = () => {
    const taskdata = {
        id: `${Date.now()}`,
        imageUrl:document.getElementById("imageurl").value ,
        taskTitle:document.getElementById("tasktitle").value  ,
        taskType:document.getElementById("tasktype").value  ,
        taskDesription:document.getElementById("taskdescription").value  
    };
    
    taskContainer.insertAdjacentHTML("beforeend", newCard(taskdata));
    //newCard(taskdata);
    globalStore.push(taskdata);
    localStorage.setItem("taskm", JSON.stringify({cards:globalStore}));
};