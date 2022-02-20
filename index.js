let employees = [
	{
		firstName: 'Akash',
		lastName: 'Doppalapudi',
		preferredName: 'Akash Doppalapudi',
		email: 'akashdoppalapudi@gmail.com',
		jobTitle: '.NET Development Lead',
		office: 'India',
		department: 'IT',
		phoneNumber: '6303321486',
		skypeId: '123456',
		photo: './images/akash.jpg',
	},
	{
		firstName: 'Benny',
		lastName: 'Ganupu',
		preferredName: 'Benny Ganupu',
		email: 'benson@gmail.com',
		jobTitle: 'BI Developer',
		office: 'India',
		department: 'IT',
		phoneNumber: '0123456789',
		skypeId: '654321',
	},
	{
		firstName: 'Vinny',
		lastName: 'Ganupu',
		preferredName: 'Vinny Ganupu',
		email: 'vinnyganupu@gmail.com',
		jobTitle: 'Business Analyst',
		office: 'Seattle',
		department: 'Sales',
		phoneNumber: '9876543210',
		skypeId: '135246',
	},
];

let displayEmployees;

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
				name: 'Bi Developer',
				tagSelector: '#biNo',
			},
			{
				name: 'Business Analyst',
				tagSelector: '#baNo',
			},
		],
	},
];

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

const filterEmployeeByAttr = (e, attr, val) => {
	if (attr == 'department') {
		displayEmployees = employees.filter((emp) => emp.department === val);
		console.log(displayEmployees);
	} else if (attr == 'office') {
		displayEmployees = employees.filter(
			(emp) => emp.office === displayEmployees
		);
		console.log(displayEmployees);
	} else if (attr == 'jobTitle') {
		displayEmployees = employees.filter(
			(emp) => emp.jobTitle === displayEmployees
		);
		console.log(displayEmployees);
	}
};

for (let idx1 in filters) {
	for (let idx2 in filters[idx1].names) {
		obj = document.querySelector(filters[idx1].names[idx2].tagSelector);
		obj.innerHTML = getNoOfEmp(
			filters[idx1].type,
			filters[idx1].names[idx2].name
		);
	}
}

it = document.querySelector('#it');
hr = document.querySelector('#hr');
md = document.querySelector('#md');
sales = document.querySelector('#sales');
seattle = document.querySelector('#seattle');
india = document.querySelector('#india');
sharePoint = document.querySelector('#sharePoint');
dotnet = document.querySelector('#dotnet');
recruit = document.querySelector('#recruit');
bidev = document.querySelector('#bidev');
business = document.querySelector('#business');

it.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'department', 'IT')
);
hr.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'department', 'Human Resources')
);
md.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'department', 'MD')
);
sales.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'department', 'Sales')
);
seattle.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'office', 'Seattle')
);
india.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'office', 'India')
);
sharePoint.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'jobTitle', 'SharePoint Practice Head')
);
dotnet.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'jobTitle', '.Net Development Lead')
);
recruit.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'jobTitle', 'Recruiting Expert')
);
bidev.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'jobTitle', 'Bi Developer')
);
business.addEventListener('click', (e) =>
	filterEmployeeByAttr(e, 'jobTitle', 'Business Analyst')
);

console.log(displayEmployees);
