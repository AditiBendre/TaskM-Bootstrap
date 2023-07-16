const taskContainer = document.querySelector(".task__container");
const saveChanges = () => {
    const taskdata = {
        id: `${Date.now()}`,
        imageUrl:document.getElementById("imageurl").value ,
        taskTitle:document.getElementById("tasktitle").value  ,
        taskType:document.getElementById("tasktype").value  ,
        taskDesription:document.getElementById("taskdescription").value  
    };
    const newCard = `
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
    taskContainer.insertAdjacentHTML("beforeend", newCard);
};