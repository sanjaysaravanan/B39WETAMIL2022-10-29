
// READ --> GET ( Get all jobs )

const API_URL = 'https://635cfdd2cb6cf98e56aa3f34.mockapi.io/jobs';

const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
})

function openJobForm() {
  overlay.style.display = 'block';
}

const tBody = document.querySelector('tbody');

// Delete ---> DELETE ( delete a data )
const deleteJob = async (jobId) => {
  const response = await fetch(
    `${API_URL}/${jobId}`,
    {
      method: 'DELETE'
    }
  );
  await response.json();

  const jobRow = document.getElementById(`${jobId}`);

  tBody.removeChild(jobRow);

}

const getAllJobs = async () => {
  const response = await fetch(API_URL);
  const jobs = await response.json();

  jobs.forEach((job) => {
    const jobRow = document.createElement('tr');

    jobRow.id = job.id;

    const idTd = document.createElement('td');
    idTd.innerText = job.id;
    const titleTd = document.createElement('td');
    titleTd.innerText = job.title;
    const postedTd = document.createElement('td');
    postedTd.innerText = job.postedAt;

    const actionsTd = document.createElement('td');

    // Action Buttons
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'btn btn-warning m-1');
    editButton.innerText = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-danger m-1');
    deleteButton.innerText = 'Delete';

    actionsTd.append(editButton, deleteButton);

    jobRow.append(idTd, titleTd, postedTd, actionsTd);

    tBody.appendChild(jobRow);

    deleteButton.addEventListener('click', () => {
      deleteJob(job.id);
    });
  });
}

// READ ---> Get One ( get one job detail )
const getIndividualJob = async (jobId) => {
  const response = await fetch(`${API_URL}/${jobId}`);
  const job = await response.json();
  console.log(job);
}

// Create --> POST ( Create a new Job )
const createJob = async (newJobInfo) => {
  const response = await fetch(
    API_URL,
    {
      method: 'POST',
      body: JSON.stringify(newJobInfo),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  );
  const createdJobResponse = await response.json();
  console.log(createdJobResponse);
}

// Update ---> PUT ( Edit a data )
const editJob = async (newJobInfo, jobId) => {
  const response = await fetch(
    `${API_URL}/${jobId}`,
    {
      method: 'PUT',
      body: JSON.stringify(newJobInfo),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  );
  const editedJobResponse = await response.json();
  console.log(editedJobResponse);
}

window.addEventListener('DOMContentLoaded', () => {
  getAllJobs();
})
