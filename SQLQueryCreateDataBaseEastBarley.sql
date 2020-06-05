-- Create tables

create table ProductTypes (
	ProductTypesTableId int not null Identity(1,1) Primary Key,
	ProductTypeName varchar(100) not null,
	ProductTypeId int not null
)

create table Products (
	ProductId int not null Identity(1,1) Primary Key,
	ProductTypesTableId int not null,
	Category varchar(100) not null,
	Price decimal not null,
	Title varchar(100) not null,
	[Description] varchar(500) not null,
	Quantity int not null
)

create table BookDetails (
	BookDetailsId int not null Identity(1,1) Primary Key,
	Author varchar(100) not null,
	ISBN varchar(50) not null,
	Publisher varchar(100) not null,
	[PageCount] int not null,
	ProductId int not null
)

create table LineItems (
	LineItemId int not null Identity(1,1) Primary Key,
	ProductId int not null,
	InvoiceId int not null,
	Price decimal not null,
	Quantity int not null
)

create table Employees (
	SalesRepId int not null Identity(1,1) Primary Key,
	LastName varchar(100) not null,
	FirstName varchar(100) not null,
	Title varchar(100) not null,
	HireDate date not null,
	Email varchar(100) not null,
)

create table Invoice (
	InvoiceId int not null Identity(1,1) Primary Key,
	[UserId] int not null,
	TotalCost decimal not null,
	PaymentId int,
	InvoiceDate datetime,
	BillingAddress varchar(100),
	BillingCity varchar(100),
	BillingZip int,
	BillingState varchar(10),
	StatusId int not null, 
	SalesRepId int 
)

create table Payments (
	PaymentId int not null Identity(1,1) Primary Key,
	[UserId] int not null,
	PaymentType varchar(100) not null,
	AccountNumber int not null,
	ExpirationDate varchar(30) not null,
	isActive bit not null
)

create table Users (
	[UserId] int not null Identity(1,1) Primary Key,
	LastName varchar(100) not null,
	FirstName varchar(100) not null,
	DateOfBirth date not null,
	Email varchar(100) not null,
	DateAccountCreated date not null,
	isOver21 bit not null,
	isAcctActive bit not null
)

create table OrderStatus (
	StatusId int not null Identity(1,1) Primary Key,
	[Status] varchar(50) not null
)

-- link Foreign Keys to tables

alter table Products add foreign key (ProductTypesTableId) references ProductTypes(ProductTypesTableId)

alter table BookDetails add foreign key (ProductId) references Products(ProductId)

alter table LineItems add foreign key (ProductId) references Products(ProductId)

alter table LineItems add foreign key (InvoiceId) references Invoice(InvoiceId)
alter table Invoice add foreign key (SalesRepId) references Employees(SalesRepId)

alter table Invoice add foreign key (UserId) references Users(UserId)

alter table Invoice add foreign key (PaymentId) references Payments(PaymentId)

alter table Payments add foreign key (UserId) references Users(UserId)

alter table Invoice add foreign key (StatusId) references OrderStatus(StatusId)

-- insert seed data

Insert into ProductTypes(ProductTypeName, ProductTypeId)
Values('Book', 1),
	  ('Beer', 2),
	  ('Whiskey', 3)

SELECT * FROM ProductTypes

Insert into Products(ProductTypesTableId, Category, Price, Title, [Description], Quantity)
Values(1, 'Fiction', 15, 'Moby Dick', 'One man''s quest for a whale.', 15),
      (1, 'Non-Fiction', 15, 'On the Road', 'A road. A man. A car. Adventures.', 15),
      (1, 'Poetry', 15, 'The Waste Land', 'I will show you fear in a handful of dust.', 15),
      (2, 'Wheated Ale', 15, 'Honey Sweet Barley', 'so buzzed you''ll think you''re licking the hive directly.', 15),
      (3, 'Bourbon', 30, 'Whiskey Tango Foxtrot', 'It''ll have you waking up in the morning like WTF?', 15)

SELECT * FROM Products

Insert into BookDetails(Author, ISBN, Publisher, [PageCount], ProductId)
Values('Herman Melville', '978-1503280786', 'CreateSpace Independent Publishing Platform', 378, 1),
      ('Jack Kerouac', '978-0140283297', 'Penguin Classics', 293, 2),
      ('T. S. Eliot', '978-0393974997', 'W. W. Norton & Company', 320, 3)

SELECT *
FROM BookDetails
JOIN Products ON Products.ProductId = BookDetails.ProductId

Insert into Employees(LastName, FirstName, Title, HireDate, Email)
Values('Smith','Jay', 'BookKeeper', '2020-04-10', 'jay.smith@eastbarley.com'),
      ('Delk', 'Ryan', 'Asst. Manager', '2020-03-15', 'ryan.delk@eastbarley.com'),
      ('Jones', 'Megan', 'Manager', '2020-02-20', 'megan.jones@eastbarley.com')

SELECT * FROM Employees

Insert into [Users](LastName, FirstName, DateOfBirth, Email, DateAccountCreated, isOver21, isAcctActive)
Values('Wiles','Nick', '1988-05-10', 'nick.wiles@email.com', '2020-05-19', 1, 1),
      ('Miller', 'Morgan', '1990-04-14', 'morgan.miller@email.com', '2019-02-16', 1, 1),
      ('Jenkins', 'Tyson', '1993-10-10', 'tyson.jenkins@email.com', '2018-09-05', 1, 1)

SELECT * FROM [Users]

Insert into Payments([UserId], PaymentType, AccountNumber, ExpirationDate, isActive)
Values(1,'PayPal', 193295189, '08/2022', 1),
      (1,'MasterCard', 283882910, '03/2023', 1),
      (2,'Visa', 283882910, '04/2026', 1),
      (2,'Discover',283882910, '07/2023', 1),
      (3, 'Apple Pay', 828191029, '06/2025', 1),
      (3, 'American Expresss', 289039029, '02/2029', 1)

SELECT * FROM Payments

Insert into OrderStatus([Status])
Values('Received'),
      ('Processing'),
      ('Complete'),
	  ('Shipped')

SELECT * FROM OrderStatus

Insert into Invoice([UserId], TotalCost, PaymentId, InvoiceDate, BillingAddress, BillingCity, BillingZip, BillingState, StatusId, SalesRepId)
Values(1, 30, 1, '2020-06-19', '159 Snake Street', 'Cleveland', 44101, 'OH', 1, 2), -- whiskey
      (3, 15, 5, '2020-07-20', '800 Talking Avenue', 'Portland', 97035, 'OR', 3, 2), -- beer
      (1, 45, 2, '2020-08-05', '707 Tailwind Drive', 'Detroit', 48127, 'MI', 4, 3), --book and whiskey
	  (2, 15, 3, '2020-09-27', '883 Rockjaw Boulevard', 'Hamburg', 51640, 'NE', 1, 3), -- book
      (2, 15, 3, '2020-06-15', '939 Bridge Way', 'Johnson City', 37601, 'TN', 2, 1) -- book

SELECT * FROM Invoice

Insert into LineItems(ProductId, InvoiceId, Price, Quantity)
Values(5, 1, 30, 1),
      (4, 2, 15, 1),
      (1, 3, 15, 1),
      (5, 3, 30, 1),
      (2, 4, 15, 1),
      (3, 5, 15, 1)

SELECT * FROM LineItems​​

SELECT *
FROM Invoice
JOIN LineItems ON LineItems.InvoiceId = Invoice.InvoiceId
JOIN Payments ON Payments.PaymentId = Invoice.PaymentId
JOIN [Users] ON [Users].UserId = Invoice.UserId
JOIN Employees ON Employees.SalesRepId = Invoice.SalesRepId
JOIN OrderStatus ON OrderStatus.StatusId = Invoice.StatusId