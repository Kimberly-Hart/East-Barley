USE [master]
GO
/****** Object:  Database [East&Barley]    Script Date: 6/8/2020 7:39:52 PM ******/
CREATE DATABASE [East&Barley]
ALTER DATABASE [East&Barley] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [East&Barley].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [East&Barley] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [East&Barley] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [East&Barley] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [East&Barley] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [East&Barley] SET ARITHABORT OFF 
GO
ALTER DATABASE [East&Barley] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [East&Barley] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [East&Barley] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [East&Barley] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [East&Barley] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [East&Barley] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [East&Barley] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [East&Barley] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [East&Barley] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [East&Barley] SET  DISABLE_BROKER 
GO
ALTER DATABASE [East&Barley] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [East&Barley] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [East&Barley] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [East&Barley] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [East&Barley] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [East&Barley] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [East&Barley] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [East&Barley] SET RECOVERY FULL 
GO
ALTER DATABASE [East&Barley] SET  MULTI_USER 
GO
ALTER DATABASE [East&Barley] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [East&Barley] SET DB_CHAINING OFF 
GO
ALTER DATABASE [East&Barley] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [East&Barley] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [East&Barley] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'East&Barley', N'ON'
GO
ALTER DATABASE [East&Barley] SET QUERY_STORE = OFF
GO
USE [East&Barley]
GO
/****** Object:  Table [dbo].[BookDetails]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookDetails](
	[BookDetailsId] [int] IDENTITY(1,1) NOT NULL,
	[Author] [varchar](100) NOT NULL,
	[ISBN] [varchar](50) NOT NULL,
	[Publisher] [varchar](100) NOT NULL,
	[PageCount] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[BookDetailsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[SalesRepId] [int] IDENTITY(1,1) NOT NULL,
	[LastName] [varchar](100) NOT NULL,
	[FirstName] [varchar](100) NOT NULL,
	[Title] [varchar](100) NOT NULL,
	[HireDate] [date] NOT NULL,
	[Email] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[SalesRepId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoice]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoice](
	[InvoiceId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[TotalCost] [decimal](18, 0) NOT NULL,
	[PaymentId] [int] NULL,
	[InvoiceDate] [datetime] NULL,
	[BillingAddress] [varchar](100) NULL,
	[BillingCity] [varchar](100) NULL,
	[BillingZip] [int] NULL,
	[BillingState] [varchar](10) NULL,
	[StatusId] [int] NOT NULL,
	[SalesRepId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[InvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LineItems]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LineItems](
	[LineItemId] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[InvoiceId] [int] NOT NULL,
	[Price] [decimal](18, 0) NOT NULL,
	[Quantity] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[LineItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderStatus]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderStatus](
	[StatusId] [int] IDENTITY(1,1) NOT NULL,
	[Status] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[StatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payments]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payments](
	[PaymentId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PaymentType] [varchar](100) NOT NULL,
	[AccountNumber] [bigint] NOT NULL,
	[ExpirationYear] [smallint] NOT NULL,
	[ExpirationMonth] [smallint] NOT NULL,
	[isActive] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[PaymentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductTypesTableId] [int] NOT NULL,
	[Category] [varchar](100) NOT NULL,
	[Price] [decimal](18, 0) NOT NULL,
	[Title] [varchar](100) NOT NULL,
	[Description] [varchar](500) NOT NULL,
	[Quantity] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductTypes]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductTypes](
	[ProductTypesTableId] [int] IDENTITY(1,1) NOT NULL,
	[ProductTypeName] [varchar](100) NOT NULL,
	[ProductTypeId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ProductTypesTableId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 6/8/2020 7:39:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[LastName] [varchar](100) NOT NULL,
	[FirstName] [varchar](100) NOT NULL,
	[DateOfBirth] [date] NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[DateAccountCreated] [date] NOT NULL,
	[isOver21] [bit] NOT NULL,
	[isAcctActive] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[BookDetails] ON 

INSERT [dbo].[BookDetails] ([BookDetailsId], [Author], [ISBN], [Publisher], [PageCount], [ProductId]) VALUES (1, N'Herman Melville', N'978-1503280786', N'CreateSpace Independent Publishing Platform', 378, 1)
INSERT [dbo].[BookDetails] ([BookDetailsId], [Author], [ISBN], [Publisher], [PageCount], [ProductId]) VALUES (2, N'Jack Kerouac', N'978-0140283297', N'Penguin Classics', 293, 2)
INSERT [dbo].[BookDetails] ([BookDetailsId], [Author], [ISBN], [Publisher], [PageCount], [ProductId]) VALUES (3, N'T. S. Eliot', N'978-0393974997', N'W. W. Norton & Company', 320, 3)
SET IDENTITY_INSERT [dbo].[BookDetails] OFF
SET IDENTITY_INSERT [dbo].[Employees] ON 

INSERT [dbo].[Employees] ([SalesRepId], [LastName], [FirstName], [Title], [HireDate], [Email]) VALUES (1, N'Smith', N'Jay', N'BookKeeper', CAST(N'2020-04-10' AS Date), N'jay.smith@eastbarley.com')
INSERT [dbo].[Employees] ([SalesRepId], [LastName], [FirstName], [Title], [HireDate], [Email]) VALUES (2, N'Delk', N'Ryan', N'Asst. Manager', CAST(N'2020-03-15' AS Date), N'ryan.delk@eastbarley.com')
INSERT [dbo].[Employees] ([SalesRepId], [LastName], [FirstName], [Title], [HireDate], [Email]) VALUES (3, N'Jones', N'Megan', N'Manager', CAST(N'2020-02-20' AS Date), N'megan.jones@eastbarley.com')
INSERT [dbo].[Employees] ([SalesRepId], [LastName], [FirstName], [Title], [HireDate], [Email]) VALUES (4, N'Bot', N'Online', N'OnlineBot', CAST(N'2019-01-01' AS Date), N'East&Barley@eastbarley.com')
SET IDENTITY_INSERT [dbo].[Employees] OFF
SET IDENTITY_INSERT [dbo].[Invoice] ON 

INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (1, 1, CAST(30 AS Decimal(18, 0)), 1, CAST(N'2020-06-19T00:00:00.000' AS DateTime), N'159 Snake Street', N'Cleveland', 44101, N'OH', 1, 2)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (2, 3, CAST(15 AS Decimal(18, 0)), 5, CAST(N'2020-07-20T00:00:00.000' AS DateTime), N'800 Talking Avenue', N'Portland', 97035, N'OR', 3, 2)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (3, 1, CAST(45 AS Decimal(18, 0)), 2, CAST(N'2020-08-05T00:00:00.000' AS DateTime), N'707 Tailwind Drive', N'Detroit', 48127, N'MI', 4, 3)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (4, 2, CAST(15 AS Decimal(18, 0)), 3, CAST(N'2020-09-27T00:00:00.000' AS DateTime), N'883 Rockjaw Boulevard', N'Hamburg', 51640, N'NE', 1, 3)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (5, 2, CAST(15 AS Decimal(18, 0)), 3, CAST(N'2020-06-15T00:00:00.000' AS DateTime), N'939 Bridge Way', N'Johnson City', 37601, N'TN', 2, 1)
SET IDENTITY_INSERT [dbo].[Invoice] OFF
SET IDENTITY_INSERT [dbo].[LineItems] ON 

INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (1, 5, 1, CAST(30 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (2, 4, 2, CAST(15 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (3, 1, 3, CAST(15 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (4, 5, 3, CAST(30 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (5, 2, 4, CAST(15 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (6, 3, 5, CAST(15 AS Decimal(18, 0)), 1)
SET IDENTITY_INSERT [dbo].[LineItems] OFF
SET IDENTITY_INSERT [dbo].[OrderStatus] ON 

INSERT [dbo].[OrderStatus] ([StatusId], [Status]) VALUES (1, N'Open Cart')
INSERT [dbo].[OrderStatus] ([StatusId], [Status]) VALUES (2, N'Received')
INSERT [dbo].[OrderStatus] ([StatusId], [Status]) VALUES (3, N'Complete')
INSERT [dbo].[OrderStatus] ([StatusId], [Status]) VALUES (4, N'Shipped')
SET IDENTITY_INSERT [dbo].[OrderStatus] OFF
SET IDENTITY_INSERT [dbo].[Payments] ON 

INSERT [dbo].[Payments] ([PaymentId], [UserId], [PaymentType], [AccountNumber], [ExpirationYear], [ExpirationMonth], [isActive]) VALUES (1, 1, N'PayPal', 193295189, 2022, 2, 0)
INSERT [dbo].[Payments] ([PaymentId], [UserId], [PaymentType], [AccountNumber], [ExpirationYear], [ExpirationMonth], [isActive]) VALUES (2, 1, N'MasterCard', 283882910, 2023, 3, 1)
INSERT [dbo].[Payments] ([PaymentId], [UserId], [PaymentType], [AccountNumber], [ExpirationYear], [ExpirationMonth], [isActive]) VALUES (3, 2, N'Visa', 283882910, 2026, 4, 1)
INSERT [dbo].[Payments] ([PaymentId], [UserId], [PaymentType], [AccountNumber], [ExpirationYear], [ExpirationMonth], [isActive]) VALUES (4, 2, N'Discover', 283882910, 2023, 7, 1)
INSERT [dbo].[Payments] ([PaymentId], [UserId], [PaymentType], [AccountNumber], [ExpirationYear], [ExpirationMonth], [isActive]) VALUES (5, 3, N'Apple Pay', 828191029, 2025, 5, 1)
INSERT [dbo].[Payments] ([PaymentId], [UserId], [PaymentType], [AccountNumber], [ExpirationYear], [ExpirationMonth], [isActive]) VALUES (6, 3, N'American Expresss', 289039029, 2029, 2, 1)
SET IDENTITY_INSERT [dbo].[Payments] OFF
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity]) VALUES (1, 1, N'Fiction', CAST(15 AS Decimal(18, 0)), N'Moby Dick', N'One man''s quest for a whale.', 15)
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity]) VALUES (2, 1, N'Non-Fiction', CAST(15 AS Decimal(18, 0)), N'On the Road', N'A road. A man. A car. Adventures.', 15)
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity]) VALUES (3, 1, N'Poetry', CAST(15 AS Decimal(18, 0)), N'The Waste Land', N'I will show you fear in a handful of dust.', 15)
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity]) VALUES (4, 2, N'Wheated Ale', CAST(15 AS Decimal(18, 0)), N'Honey Sweet Barley', N'so buzzed you''ll think you''re licking the hive directly.', 15)
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity]) VALUES (5, 3, N'Bourbon', CAST(30 AS Decimal(18, 0)), N'Whiskey Tango Foxtrot', N'It''ll have you waking up in the morning like WTF?', 15)
SET IDENTITY_INSERT [dbo].[Products] OFF
SET IDENTITY_INSERT [dbo].[ProductTypes] ON 

INSERT [dbo].[ProductTypes] ([ProductTypesTableId], [ProductTypeName], [ProductTypeId]) VALUES (1, N'Book', 1)
INSERT [dbo].[ProductTypes] ([ProductTypesTableId], [ProductTypeName], [ProductTypeId]) VALUES (2, N'Beer', 2)
INSERT [dbo].[ProductTypes] ([ProductTypesTableId], [ProductTypeName], [ProductTypeId]) VALUES (3, N'Whiskey', 3)
SET IDENTITY_INSERT [dbo].[ProductTypes] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive]) VALUES (1, N'Wiles', N'Nick', CAST(N'1988-05-10' AS Date), N'nick.wiles@email.com', CAST(N'2020-05-19' AS Date), 1, 1)
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive]) VALUES (2, N'Miller', N'Morgan', CAST(N'1990-04-14' AS Date), N'morgan.miller@email.com', CAST(N'2019-02-16' AS Date), 1, 1)
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive]) VALUES (3, N'Jenkins', N'Tyson', CAST(N'1993-10-10' AS Date), N'tyson.jenkins@email.com', CAST(N'2018-09-05' AS Date), 1, 1)
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive]) VALUES (4, N'Wayne', N'Bruce', CAST(N'1968-05-10' AS Date), N'defNotBatman@email.com', CAST(N'2020-05-19' AS Date), 1, 1)
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive]) VALUES (5, N'Parker', N'Peter', CAST(N'2000-04-14' AS Date), N'amazing@email.com', CAST(N'2019-02-16' AS Date), 0, 1)
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive]) VALUES (6, N'Monroe', N'Aurora', CAST(N'1983-10-10' AS Date), N'storm@email.com', CAST(N'2018-09-05' AS Date), 1, 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[BookDetails]  WITH CHECK ADD FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD FOREIGN KEY([PaymentId])
REFERENCES [dbo].[Payments] ([PaymentId])
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD FOREIGN KEY([SalesRepId])
REFERENCES [dbo].[Employees] ([SalesRepId])
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD FOREIGN KEY([StatusId])
REFERENCES [dbo].[OrderStatus] ([StatusId])
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[LineItems]  WITH CHECK ADD FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[Invoice] ([InvoiceId])
GO
ALTER TABLE [dbo].[LineItems]  WITH CHECK ADD FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
GO
ALTER TABLE [dbo].[Payments]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD FOREIGN KEY([ProductTypesTableId])
REFERENCES [dbo].[ProductTypes] ([ProductTypesTableId])
GO
USE [master]
GO
ALTER DATABASE [East&Barley] SET  READ_WRITE 
GO
