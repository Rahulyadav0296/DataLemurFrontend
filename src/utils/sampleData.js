export const sqlProblems = [
  {
    id: 1,
    company: "Google",
    difficulty: "Medium",
    title: "Find Employees by Department",
    description:
      "Write a query to find all employees in the 'Engineering' department.",
    expected_output: [
      { first_name: "John", last_name: "Doe", salary: 60000 },
      { first_name: "Sam", last_name: "Brown", salary: 80000 },
    ],
    dataset: "employees",
    test_cases: [
      {
        input:
          "SELECT first_name, last_name, salary FROM employees JOIN departments ON employees.department_id = departments.id WHERE departments.department_name = 'Engineering';",
        output: [
          { first_name: "John", last_name: "Doe", salary: 60000 },
          { first_name: "Sam", last_name: "Brown", salary: 80000 },
        ],
      },
    ],
    category: "SQL",
  },
  {
    id: 2,
    company: "Facebook",
    difficulty: "Hard",
    category: "Statics",
    title: "Find Employees Working on a Specific Project",
    description:
      "Write a query to find all employees working on 'Project Alpha'.",
    expected_output: [
      { first_name: "John", last_name: "Doe" },
      { first_name: "Jane", last_name: "Smith" },
    ],
    dataset: "employee_projects",
    test_cases: [
      {
        input:
          "SELECT e.first_name, e.last_name FROM employees e JOIN employee_projects ep ON e.id = ep.employee_id JOIN projects p ON ep.project_id = p.id WHERE p.project_name = 'Project Alpha';",
        output: [
          { first_name: "John", last_name: "Doe" },
          { first_name: "Jane", last_name: "Smith" },
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Amazon",
    difficulty: "Easy",
    category: "SQL",
    title: "Count Employees by Department",
    description:
      "Write a query to count the number of employees in each department.",
    expected_output: [
      { department_name: "Engineering", employee_count: 2 },
      { department_name: "Sales", employee_count: 1 },
      { department_name: "HR", employee_count: 2 },
    ],
    dataset: "employees",
    test_cases: [
      {
        input:
          "SELECT d.department_name, COUNT(e.id) AS employee_count FROM employees e JOIN departments d ON e.department_id = d.id GROUP BY d.department_name;",
        output: [
          { department_name: "Engineering", employee_count: 2 },
          { department_name: "Sales", employee_count: 1 },
          { department_name: "HR", employee_count: 2 },
        ],
      },
    ],
  },
  {
    id: 4,
    company: "Microsoft",
    difficulty: "Medium",
    category: "Machine Learning",
    title: "Find Employees with the Highest Salary in Each Department",
    description:
      "Write a query to find the employee with the highest salary in each department.",
    expected_output: [
      {
        first_name: "Sam",
        last_name: "Brown",
        department_name: "Engineering",
        salary: 80000,
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        department_name: "Sales",
        salary: 75000,
      },
      {
        first_name: "Peter",
        last_name: "White",
        department_name: "HR",
        salary: 120000,
      },
    ],
    dataset: "employees",
    test_cases: [
      {
        input:
          "SELECT e.first_name, e.last_name, d.department_name, e.salary FROM employees e JOIN departments d ON e.department_id = d.id WHERE e.salary = (SELECT MAX(salary) FROM employees WHERE department_id = e.department_id);",
        output: [
          {
            first_name: "Sam",
            last_name: "Brown",
            department_name: "Engineering",
            salary: 80000,
          },
          {
            first_name: "Jane",
            last_name: "Smith",
            department_name: "Sales",
            salary: 75000,
          },
          {
            first_name: "Peter",
            last_name: "White",
            department_name: "HR",
            salary: 120000,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    company: "Netflix",
    difficulty: "Hard",
    category: "Machine Learning",
    title: "Find Employees Who Work on Multiple Projects",
    description:
      "Write a query to find employees who are working on more than one project.",
    expected_output: [
      { first_name: "John", last_name: "Doe" },
      { first_name: "Sam", last_name: "Brown" },
    ],
    dataset: "employee_projects",
    test_cases: [
      {
        input:
          "SELECT e.first_name, e.last_name FROM employees e JOIN employee_projects ep ON e.id = ep.employee_id GROUP BY e.id HAVING COUNT(ep.project_id) > 1;",
        output: [
          { first_name: "John", last_name: "Doe" },
          { first_name: "Sam", last_name: "Brown" },
        ],
      },
    ],
  },
];
