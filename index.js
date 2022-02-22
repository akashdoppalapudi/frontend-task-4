let employees = [
	{
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
		var employee = `<div class="employee">
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
	</div>`;

	return finalHtml;
};

const renderEmployeeList = () => {
	employeeList = document.querySelector('.employee-list');
	employeeList.innerHTML = getHtmlForEmployeeList();
};

const clearSearch = (e) => {
	e.preventDefault();
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

const filterEmployeesByAttr = (e, attr, val) => {
	if (attr == 'department') {
		displayEmployees = employees.filter((emp) => emp.department === val);
	} else if (attr == 'office') {
		displayEmployees = employees.filter((emp) => emp.office === val);
	} else if (attr == 'jobTitle') {
		displayEmployees = employees.filter((emp) => emp.jobTitle === val);
	}
	renderEmployeeList();
};

const searchEmployeesByAttr = (e, attr, val) => {
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

const displayAllEmployees = (e) => {
	displayEmployees = employees;
	renderEmployeeList();
};

const newEmployeeClickHandler = (e) => {
	let backdrop = document.querySelector('.backdrop');
	backdrop.classList.remove('hidden');
	backdrop.classList.add('visible');
};

const closeNewEmployeeForm = (e) => {
	e.preventDefault();
	let backdrop = document.querySelector('.backdrop');
	backdrop.classList.remove('visible');
	backdrop.classList.add('hidden');
};

const newEmployeeSubmitHandler = (e) => {
	e.preventDefault();
	let newEmployee = {
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
	let backdrop = document.querySelector('.backdrop');
	backdrop.classList.remove('visible');
	backdrop.classList.add('hidden');
	updateNoOfEmp();
	displayAllEmployees();
};

const openEmployeeDetails = (e) => {
	let preferredName = e.target.children[1].children[0].textContent;
	let employee = employees.find((emp) => emp.preferredName === preferredName);
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

let it = document.querySelector('#it');
let hr = document.querySelector('#hr');
let md = document.querySelector('#md');
let sales = document.querySelector('#sales');
let seattle = document.querySelector('#seattle');
let india = document.querySelector('#india');
let sharePoint = document.querySelector('#sharePoint');
let dotnet = document.querySelector('#dotnet');
let recruit = document.querySelector('#recruit');
let bidev = document.querySelector('#bidev');
let business = document.querySelector('#business');
let clear = document.querySelector('.clear');
let filterOptions = document.querySelector('#filters');
let search = document.querySelector('#search-field');
let all = document.querySelector('#all');
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let e = document.querySelector('#e');
let f = document.querySelector('#f');
let g = document.querySelector('#g');
let h = document.querySelector('#h');
let i = document.querySelector('#i');
let j = document.querySelector('#j');
let k = document.querySelector('#k');
let l = document.querySelector('#l');
let m = document.querySelector('#m');
let n = document.querySelector('#n');
let o = document.querySelector('#o');
let p = document.querySelector('#p');
let q = document.querySelector('#q');
let r = document.querySelector('#r');
let s = document.querySelector('#s');
let t = document.querySelector('#t');
let u = document.querySelector('#u');
let v = document.querySelector('#v');
let w = document.querySelector('#w');
let x = document.querySelector('#x');
let y = document.querySelector('#y');
let z = document.querySelector('#z');
let newEmployeeBtn = document.querySelector('.add-employee-btn');
let cancel = document.querySelector('.cancel');
let newEmployeeForm = document.querySelector('#newEmployee');
let employee = document.querySelector('.employee');
let detailBackdrop = document.querySelector('#detailBackdrop');

it.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'department', 'IT')
);
hr.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'department', 'Human Resources')
);
md.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'department', 'MD')
);
sales.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'department', 'Sales')
);
seattle.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'office', 'Seattle')
);
india.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'office', 'India')
);
sharePoint.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'jobTitle', 'SharePoint Practice Head')
);
dotnet.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'jobTitle', '.Net Development Lead')
);
recruit.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'jobTitle', 'Recruiting Expert')
);
bidev.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'jobTitle', 'BI Developer')
);
business.addEventListener('click', (e) =>
	filterEmployeesByAttr(e, 'jobTitle', 'Business Analyst')
);

clear.addEventListener('click', (e) => clearSearch(e));

all.addEventListener('click', (e) => displayAllEmployees(e));
a.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'a')
);
b.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'b')
);
c.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'c')
);
d.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'd')
);
e.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'e')
);
f.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'f')
);
g.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'g')
);
h.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'h')
);
i.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'i')
);
j.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'j')
);
k.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'k')
);
l.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'l')
);
m.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'm')
);
n.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'n')
);
o.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'o')
);
p.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'p')
);
q.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'q')
);
r.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'r')
);
s.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 's')
);
t.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 't')
);
u.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'u')
);
v.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'v')
);
w.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'w')
);
x.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'x')
);
y.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'y')
);
z.addEventListener('click', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, 'z')
);

search.addEventListener('input', (e) =>
	searchEmployeesByAttr(e, filterOptions.value, e.target.value)
);

newEmployeeBtn.addEventListener('click', (e) => newEmployeeClickHandler(e));

cancel.addEventListener('click', (e) => closeNewEmployeeForm(e));

newEmployeeForm.addEventListener('submit', (e) => newEmployeeSubmitHandler(e));

employee.addEventListener('click', (e) => {
	if (employee.isSameNode(e.target)) {
		openEmployeeDetails(e);
	} else {
		employee.click();
	}
});

detailBackdrop.addEventListener('click', (e) => closeEmployeeDetails(e));
