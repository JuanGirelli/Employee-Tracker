-- Insert departments
INSERT INTO department (name) VALUES 
('Sales'), 
('Engineering'), 
('Human Resources');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 60000, 1),
('Engineer', 80000, 2),
('HR Manager', 50000, 3),
('Sales Associate', 45000, 1),
('Software Developer', 70000, 2);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Sam', 'Brown', 3, NULL),
('Lisa', 'Adams', 4, 1),
('Mike', 'Johnson', 5, 2);