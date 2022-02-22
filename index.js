let employees = [
	{
		id: '1645555957234',
		firstName: 'Akash',
		lastName: 'Doppalapudi',
		preferredName: 'Akash Doppalapudi',
		email: 'akashdoppalapudi@gmail.com',
		jobTitle: '.Net Development Lead',
		office: 'India',
		department: 'IT',
		phoneNumber: '6303321486',
		skypeId: '123456',
		photo: 'akash.jpg',
	},
];

let displayEmployees = employees;

const filters = [
	{
		type: 'department',
		names: [
			{
				name: 'IT',
				tagSelector: '#itNo',
			},
			{
				name: 'Human Resources',
				tagSelector: '#hrNo',
			},
			{
				name: 'MD',
				tagSelector: '#mdNo',
			},
			{
				name: 'Sales',
				tagSelector: '#sNo',
			},
		],
	},
	{
		type: 'office',
		names: [
			{
				name: 'Seattle',
				tagSelector: '#stNo',
			},
			{
				name: 'India',
				tagSelector: '#inNo',
			},
		],
	},
	{
		type: 'jobTitle',
		names: [
			{
				name: 'SharePoint Practice Head',
				tagSelector: '#sphNo',
			},
			{
				name: '.Net Development Lead',
				tagSelector: '#netNo',
			},
			{
				name: 'Recruiting Expert',
				tagSelector: '#recNo',
			},
			{
				name: 'BI Developer',
				tagSelector: '#biNo',
			},
			{
				name: 'Business Analyst',
				tagSelector: '#baNo',
			},
		],
	},
];

const getHtmlForEmployeeList = () => {
	var finalHtml = '';
	for (idx in displayEmployees) {
		var emp = displayEmployees[idx];
		var employee = `<div class="employee" id="${emp.id}" onclick="openEmployeeDetails(this)">
			<img src="./images/users/${emp.photo}" alt="Employee Image" />
			<div class="employee-details">
				<h3>${emp.preferredName}</h3>
				<p>${emp.jobTitle}</p>
				<p>${emp.department} Department</p>
				<div class="icons">
					<ion-icon name="call"></ion-icon>
					<ion-icon name="mail"></ion-icon>
					<ion-icon name="text"></ion-icon>
					<ion-icon name="star"></ion-icon>
					<ion-icon name="heart"></ion-icon>
				</div>
			</div>
			</div>`;
		finalHtml += employee;
	}
	return finalHtml;
};

const getHtmlForEmployeeDetails = (employee) => {
	let finalHtml = `
	<img src="./images/users/${employee.photo}" alt="User Image" />
	<h1>${employee.preferredName}</h1>
	<div class="detail">
		<h3>First Name :</h3>
		<p>${employee.firstName}</p>
	</div>
	<div class="detail">
		<h3>Last Name :</h3>
		<p>${employee.lastName}</p>
	</div>
	<div class="detail">
		<h3>Email :</h3>
		<p>${employee.email}</p>
	</div>
	<div class="detail">
		<h3>Job Title :</h3>
		<p>${employee.jobTitle}</p>
	</div>
	<div class="detail">
		<h3>Office :</h3>
		<p>${employee.office}</p>
	</div>
	<div class="detail">
		<h3>Department :</h3>
		<p>${employee.department}</p>
	</div>
	<div class="detail">
		<h3>Phone Number :</h3>
		<p>${employee.phoneNumber}</p>
	</div>
	<div class="detail">
		<h3>Skype ID :</h3>
		<p>${employee.skypeId}</p>
	</div>
	<div class="details-button-group">
		<button class="edit" id="${employee.id}" onclick="newEmployeeClickHandler('edit', this.id)">Edit</button>
		<button class="delete" id="${employee.id}" onclick="deleteEmployee(this.id)">Delete</delete>
	</div>
	`;

	return finalHtml;
};

const renderEmployeeList = () => {
	employeeList = document.querySelector('.employee-list');
	employeeList.innerHTML = getHtmlForEmployeeList();
};

const clearSearch = () => {
	let search = document.querySelector('#search-field');
	search.value = '';
};

const getNoOfEmp = (type, name) => {
	let total = 0;
	if (type == 'department') {
		for (let idx in employees) {
			if (employees[idx].department === name) {
				total++;
			}
		}
	} else if (type == 'office') {
		for (let idx in employees) {
			if (employees[idx].office === name) {
				total++;
			}
		}
	} else if (type == 'jobTitle') {
		for (let idx in employees) {
			if (employees[idx].jobTitle === name) {
				total++;
			}
		}
	}
	return total;
};

const updateNoOfEmp = () => {
	for (let idx1 in filters) {
		for (let idx2 in filters[idx1].names) {
			obj = document.querySelector(filters[idx1].names[idx2].tagSelector);
			obj.innerHTML = getNoOfEmp(
				filters[idx1].type,
				filters[idx1].names[idx2].name
			);
		}
	}
};

const filterEmployeesByAttr = (attr, val) => {
	if (attr == 'department') {
		displayEmployees = employees.filter((emp) => emp.department === val);
	} else if (attr == 'office') {
		displayEmployees = employees.filter((emp) => emp.office === val);
	} else if (attr == 'jobTitle') {
		displayEmployees = employees.filter((emp) => emp.jobTitle === val);
	}
	renderEmployeeList();
};

const searchEmployeesByAttr = (val) => {
	let filterOptions = document.querySelector('#filters');
	let attr = filterOptions.value;
	if (attr == 'firstName') {
		displayEmployees = employees.filter((emp) =>
			emp.firstName.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'lastName') {
		displayEmployees = employees.filter((emp) =>
			emp.lastName.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'preferredName') {
		displayEmployees = employees.filter((emp) =>
			emp.preferredName.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'email') {
		displayEmployees = employees.filter((emp) =>
			emp.email.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'jobTitle') {
		displayEmployees = employees.filter((emp) =>
			emp.jobTitle.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'office') {
		displayEmployees = employees.filter((emp) =>
			emp.office.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'department') {
		displayEmployees = employees.filter((emp) =>
			emp.department.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'phoneNumber') {
		displayEmployees = employees.filter((emp) =>
			emp.phoneNumber.toLowerCase().startsWith(val.toLowerCase())
		);
	} else if (attr == 'skypeId') {
		displayEmployees = employees.filter((emp) =>
			emp.skypeId.toLowerCase().startsWith(val.toLowerCase())
		);
	}
	renderEmployeeList();
};

const displayAllEmployees = () => {
	displayEmployees = employees;
	renderEmployeeList();
};

const newEmployeeClickHandler = (addOrEdit, empId) => {
	let backdrop = document.querySelector('.backdrop');
	backdrop.classList.remove('hidden');
	backdrop.classList.add('visible');
	let heading = document.querySelector('.formHeading');
	let form = document.querySelector('.new-employee');
	if (addOrEdit == 'add') {
		heading.innerHTML = 'Add new employee';
		form.id = 'add';
	} else if (addOrEdit == 'edit') {
		heading.innerHTML = 'Edit Employee Details';
		let detailsBackdrop = document.querySelector('#detailBackdrop');
		detailsBackdrop.classList.remove('visible');
		detailsBackdrop.classList.add('hidden');
		let employee = employees.find((emp) => emp.id === empId);
		form.id = empId;
		form[0].value = employee.firstName;
		form[1].value = employee.lastName;
		form[2].value = employee.preferredName;
		form[3].value = employee.email;
		form[4].value = employee.jobTitle;
		form[5].value = employee.office;
		form[6].value = employee.department;
		form[7].value = employee.phoneNumber;
		form[8].value = employee.skypeId;
	}
};

const deleteEmployee = (empId) => {
	employees = employees.filter((emp) => emp.id !== empId);
	console.log(empId);
	console.log(employees);
	let detailsBackdrop = document.querySelector('#detailBackdrop');
	detailsBackdrop.classList.remove('visible');
	detailsBackdrop.classList.add('hidden');
	updateNoOfEmp();
	displayAllEmployees();
};

const closeNewEmployeeForm = () => {
	let backdrop = document.querySelector('.backdrop');
	backdrop.classList.remove('visible');
	backdrop.classList.add('hidden');
};

const newEmployeeSubmitHandler = (e) => {
	e.preventDefault();
	if (e.target.id === 'add') {
		let newEmployee = {
			id: new Date().getTime().toString(),
			firstName: e.target[0].value,
			lastName: e.target[1].value,
			preferredName: e.target[2].value,
			email: e.target[3].value,
			jobTitle: e.target[4].value,
			office: e.target[5].value,
			department: e.target[6].value,
			phoneNumber: e.target[7].value,
			skypeId: e.target[8].value,
			photo: 'akash.jpg',
		};
		if (newEmployee.preferredName === '') {
			newEmployee.preferredName = `${newEmployee.firstName} ${newEmployee.lastName}`;
		}
		employees = [...employees, newEmployee];
	} else {
		idx = employees.findIndex((emp) => emp.id == e.target.id);
		employees[idx].firstName = e.target[0].value;
		employees[idx].lastName = e.target[1].value;
		if (e.target[2].value === '' || e.target[2].value == null) {
			employees[idx].preferredName =
				e.target[0].value + ' ' + e.target[1].value;
		} else {
			employees[idx].preferredName = e.target[2].value;
		}
		employees[idx].email = e.target[3].value;
		employees[idx].jobTitle = e.target[4].value;
		employees[idx].office = e.target[5].value;
		employees[idx].department = e.target[6].value;
		employees[idx].phoneNumber = e.target[7].value;
		employees[idx].skypeId = e.target[8].value;
	}
	e.target[0].value = '';
	e.target[1].value = '';
	e.target[2].value = '';
	e.target[3].value = '';
	e.target[7].value = '';
	e.target[8].value = '';
	let backdrop = document.querySelector('.backdrop');
	backdrop.classList.remove('visible');
	backdrop.classList.add('hidden');
	updateNoOfEmp();
	displayAllEmployees();
};

const openEmployeeDetails = (ele) => {
	let employee = employees.find((emp) => emp.id === ele.id);
	let employeeDetailsHtml = getHtmlForEmployeeDetails(employee);
	let backdrop = document.querySelector('#detailBackdrop');
	let details = document.querySelector('.details');
	backdrop.classList.remove('hidden');
	backdrop.classList.add('visible');
	details.innerHTML = employeeDetailsHtml;
};

const closeEmployeeDetails = (e) => {
	let backdrop = document.querySelector('#detailBackdrop');
	if (backdrop.isSameNode(e.target)) {
		backdrop.classList.remove('visible');
		backdrop.classList.add('hidden');
	}
};

updateNoOfEmp();
renderEmployeeList();

let newEmployeeForm = document.querySelector('.new-employee');
let employee = document.querySelector('.employee');
let detailBackdrop = document.querySelector('#detailBackdrop');

newEmployeeForm.addEventListener('submit', (e) => newEmployeeSubmitHandler(e));

detailBackdrop.addEventListener('click', (e) => closeEmployeeDetails(e));
