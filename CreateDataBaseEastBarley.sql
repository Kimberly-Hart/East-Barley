USE [master]
GO
/****** Object:  Database [East&Barley]    Script Date: 6/27/2020 1:49:42 PM ******/
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
/****** Object:  Table [dbo].[BookDetails]    Script Date: 6/27/2020 1:49:42 PM ******/
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
/****** Object:  Table [dbo].[Employees]    Script Date: 6/27/2020 1:49:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[SalesRepId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](100) NOT NULL,
	[HireDate] [date] NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[UserId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[SalesRepId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoice]    Script Date: 6/27/2020 1:49:42 PM ******/
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
/****** Object:  Table [dbo].[LineItems]    Script Date: 6/27/2020 1:49:42 PM ******/
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
/****** Object:  Table [dbo].[OrderStatus]    Script Date: 6/27/2020 1:49:42 PM ******/
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
/****** Object:  Table [dbo].[Payments]    Script Date: 6/27/2020 1:49:42 PM ******/
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
/****** Object:  Table [dbo].[Products]    Script Date: 6/27/2020 1:49:42 PM ******/
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
	[ImageUrl] [nvarchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductTypes]    Script Date: 6/27/2020 1:49:42 PM ******/
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
/****** Object:  Table [dbo].[Users]    Script Date: 6/27/2020 1:49:42 PM ******/
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
	[FirebaseUID] [varchar](255) NULL,
	[ImageUrl] [nvarchar](500) NULL,
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
INSERT [dbo].[BookDetails] ([BookDetailsId], [Author], [ISBN], [Publisher], [PageCount], [ProductId]) VALUES (4, N'George Orwell', N'978-0451524935', N'Signet Classic', 328, 6)
INSERT [dbo].[BookDetails] ([BookDetailsId], [Author], [ISBN], [Publisher], [PageCount], [ProductId]) VALUES (5, N'Mary Roach', N'978-0393334791', N'W. W. Norton & Company', 319, 7)
INSERT [dbo].[BookDetails] ([BookDetailsId], [Author], [ISBN], [Publisher], [PageCount], [ProductId]) VALUES (6, N'Mark Obmascik', N'978-0743245463', N'Atria Books', 268, 8)
SET IDENTITY_INSERT [dbo].[BookDetails] OFF
SET IDENTITY_INSERT [dbo].[Employees] ON 

INSERT [dbo].[Employees] ([SalesRepId], [Title], [HireDate], [Email], [UserId]) VALUES (4, N'OnlineBot', CAST(N'2019-01-01' AS Date), N'East&Barley@eastbarley.com', 8)
INSERT [dbo].[Employees] ([SalesRepId], [Title], [HireDate], [Email], [UserId]) VALUES (5, N'BookKeeper', CAST(N'2020-04-10' AS Date), N'nick.wiles@email.com', 1)
INSERT [dbo].[Employees] ([SalesRepId], [Title], [HireDate], [Email], [UserId]) VALUES (6, N'Asst. Manager', CAST(N'2020-03-15' AS Date), N'morgan.miller@email.com', 2)
INSERT [dbo].[Employees] ([SalesRepId], [Title], [HireDate], [Email], [UserId]) VALUES (7, N'Manager', CAST(N'2020-02-20' AS Date), N'tyson.jenkins@email.com', 3)
INSERT [dbo].[Employees] ([SalesRepId], [Title], [HireDate], [Email], [UserId]) VALUES (8, N'Brewmaster', CAST(N'2019-01-01' AS Date), N'defNotBatman@email.com', 4)
SET IDENTITY_INSERT [dbo].[Employees] OFF
SET IDENTITY_INSERT [dbo].[Invoice] ON 

INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (1, 1, CAST(30 AS Decimal(18, 0)), 1, CAST(N'2020-06-14T00:00:00.000' AS DateTime), N'123 Main St', N'Atlanta', 30303, N'GA', 2, 4)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (2, 3, CAST(16 AS Decimal(18, 0)), 5, CAST(N'2020-07-20T00:00:00.000' AS DateTime), N'800 Talking Avenue', N'Portland', 97035, N'OR', 3, 6)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (3, 1, CAST(45 AS Decimal(18, 0)), 2, CAST(N'2020-08-05T00:00:00.000' AS DateTime), N'707 Tailwind Drive', N'Detroit', 48127, N'MI', 4, 8)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (4, 2, CAST(45 AS Decimal(18, 0)), 3, CAST(N'2020-09-27T00:00:00.000' AS DateTime), N'883 Rockjaw Boulevard', N'Hamburg', 51640, N'NE', 1, 5)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (5, 2, CAST(15 AS Decimal(18, 0)), 3, CAST(N'2020-06-15T00:00:00.000' AS DateTime), N'939 Bridge Way', N'Johnson City', 37601, N'TN', 2, 8)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [TotalCost], [PaymentId], [InvoiceDate], [BillingAddress], [BillingCity], [BillingZip], [BillingState], [StatusId], [SalesRepId]) VALUES (6, 4, CAST(45 AS Decimal(18, 0)), 6, CAST(N'2020-06-13T00:00:00.000' AS DateTime), N'123 Main St', N'Atlanta', 30303, N'GA', 2, 5)
SET IDENTITY_INSERT [dbo].[Invoice] OFF
SET IDENTITY_INSERT [dbo].[LineItems] ON 

INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (1, 5, 1, CAST(30 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (2, 4, 2, CAST(15 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (3, 1, 3, CAST(15 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (4, 5, 3, CAST(30 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (5, 2, 4, CAST(15 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (6, 3, 5, CAST(15 AS Decimal(18, 0)), 1)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (7, 4, 6, CAST(15 AS Decimal(18, 0)), 3)
INSERT [dbo].[LineItems] ([LineItemId], [ProductId], [InvoiceId], [Price], [Quantity]) VALUES (8, 1, 4, CAST(15 AS Decimal(18, 0)), 2)
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
INSERT [dbo].[Payments] ([PaymentId], [UserId], [PaymentType], [AccountNumber], [ExpirationYear], [ExpirationMonth], [isActive]) VALUES (6, 4, N'American Expresss', 289039029, 2029, 2, 1)
SET IDENTITY_INSERT [dbo].[Payments] OFF
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (1, 1, N'Fiction', CAST(15 AS Decimal(18, 0)), N'Moby Dick', N'Ishmael narrates the monomaniacal quest of Ahab, captain of the whaler Pequod, for revenge on the albino sperm whale Moby Dick, which on a previous voyage destroyed Ahab''s ship and severed his leg at the knee.', 15, N'https://i.ebayimg.com/images/g/h~MAAOSwBahVNZdD/s-l400.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (2, 1, N'Non-Fiction', CAST(15 AS Decimal(18, 0)), N'On the Road', N'Based on the travels of Kerouac and his friends. A defining work of the postwar Beat and Counterculture generations, with its protagonists living life against a backdrop of jazz, poetry, and drug use.', 15, N'https://i.pinimg.com/originals/92/b6/c0/92b6c06203fedad753fdebefa2c62624.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (3, 1, N'Poetry', CAST(15 AS Decimal(18, 0)), N'The Waste Land', N'Widely regarded as one of the most important poems of the 20th century and a central work of modernist poetry. Famous phrases include "April is the cruelest month" and "I will show you fear in a handful of dust.', 15, N'https://images-na.ssl-images-amazon.com/images/I/5129VJwjZlL._SX307_BO1,204,203,200_.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (4, 2, N'Wheated Ale', CAST(15 AS Decimal(18, 0)), N'Honey Sweet Barley', N'so buzzed you''ll think you''re licking the hive directly.', 6, N'https://images.crateandbarrel.com/is/image/Crate/WheatBeer24ozSHS16/?$web_product_hero$&190411135549&wid=625&hei=625')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (5, 3, N'Bourbon', CAST(30 AS Decimal(18, 0)), N'Whiskey Tango Foxtrot', N'It''ll have you waking up in the morning like WTF?', 14, N'https://c0.wallpaperflare.com/preview/453/146/418/whisky-bourbon-booze-drink.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (6, 1, N'Fiction', CAST(16 AS Decimal(18, 0)), N'1984', N'1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever.', 15, N'https://i.pinimg.com/474x/48/39/dc/4839dcd56a8216781d20fab106813121.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (7, 1, N'Non-Fiction', CAST(20 AS Decimal(18, 0)), N'Bonk', N'It follows the winding history of science and its exploration of human sexuality, going back as far as Aristotle and finally ending with recent discoveries about the origination and anatomy of the female orgasm.', 15, N'https://prodimage.images-bn.com/pimages/9780393334791_p0_v2_s1200x630.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (8, 1, N'Non-Fiction', CAST(11 AS Decimal(18, 0)), N'The Big Year: A Tale of Man, Nature, and Fowl Obsession', N'Every January 1, a quirky crowd storms out across North America for a spectacularly competitive event called a Big Year—a grand, expensive, and occasionally vicious 365-day marathon of birdwatching.', 15, N'https://m.media-amazon.com/images/I/51KucBQZH9L.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (9, 2, N'IPA', CAST(15 AS Decimal(18, 0)), N'Beach Day IPA', N'Your perfect summer brew', 15, N'https://c0.wallpaperflare.com/preview/25/280/29/united-states-chattanooga-wood-ipa.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (10, 2, N'IPA', CAST(15 AS Decimal(18, 0)), N'Hop Scotch', N'Scotch Barrel IPA, it''s all the best things in life', 15, N'https://live.staticflickr.com/4029/5157987318_8318a5d1c6_b.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (11, 2, N'IPA', CAST(15 AS Decimal(18, 0)), N'Hops''n''Crafts', N'Get your glue sticks ready', 15, N'https://farm4.staticflickr.com/3434/3283409839_9da4ff1891_b.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (12, 2, N'Red Ale', CAST(15 AS Decimal(18, 0)), N'Hot Rod Red', N'This red will get you through your mid-life crisis', 15, N'https://images.crateandbarrel.com/is/image/Crate/BrugesBeer16ozSHS16/?$web_product_hero$&190411134845&wid=625&hei=625')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (13, 2, N'Stout', CAST(15 AS Decimal(18, 0)), N'Short''n''stout', N'Tip me over into your mouth', 15, N'https://live.staticflickr.com/5021/5819018576_84370b6b91_b.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (14, 2, N'Porter', CAST(15 AS Decimal(18, 0)), N'Morning Beer', N'Made with Crema coffee and hints of vanilla. ', 15, N'https://cdn.pixabay.com/photo/2015/09/05/19/46/dark-beer-924823_960_720.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (15, 2, N'Sour', CAST(15 AS Decimal(18, 0)), N'Pink Beer', N'Sweet, sour, and pretty!', 15, N'https://img.buffalonews.com/eyJidWNrZXQiOiJibmNvcmUiLCJrZXkiOiJ3cC1jb250ZW50XC91cGxvYWRzXC8yMDE4XC8xMVwvNzU4MzY1NTY5Nl9JTUdfMzM5My1lMTU0MjgyMDc3Njk0OC5wbmciLCJtYXgiOiIiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY2MCwiaGVpZ2h0Ijo0MjAsImZpdCI6ImNvdmVyIn19fQ==')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (16, 2, N'Lager', CAST(15 AS Decimal(18, 0)), N'Basic B Lager', N'The classic for those who keep it simple', 15, N'https://i0.pickpik.com/photos/837/681/147/beer-mug-refreshment-beer-mug-thumb.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (17, 2, N'Blonde Ale', CAST(15 AS Decimal(18, 0)), N'Smart Blonde', N'Don''t feed into stereotypes, this blonde is more than you expect', 15, N'https://c1.staticflickr.com/5/4429/35872303314_9460c52609_b.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (18, 3, N'Tennessee Whiskey', CAST(30 AS Decimal(18, 0)), N'Smooth As', N'Sit back, relax, and listen to some slow tunes', 15, N'https://upload.wikimedia.org/wikipedia/commons/4/44/A_Glass_of_Whiskey_on_the_Rocks.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (19, 3, N'Tennessee Whiskey', CAST(30 AS Decimal(18, 0)), N'Tian Na Xi', N'A Far East Nashville original', 15, N'https://www.publicdomainpictures.net/pictures/170000/velka/glass-with-whiskey-1462561242SL9.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (20, 3, N'Rye', CAST(30 AS Decimal(18, 0)), N'Airport Rye', N'It''ll take you places', 15, N'https://p1.pxfuel.com/preview/622/258/445/airport-lounge-asiana-whiskey-royalty-free-thumbnail.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (21, 3, N'Bourbon', CAST(30 AS Decimal(18, 0)), N'10/10 Would Recommend', N'Barrel Aged Perfction', 15, N'https://p0.pikist.com/photos/323/371/drink-glass-alcohol-bar-whisky-bottle-brandy-scotland-bourbon-thumbnail.jpg')
INSERT [dbo].[Products] ([ProductId], [ProductTypesTableId], [Category], [Price], [Title], [Description], [Quantity], [ImageUrl]) VALUES (22, 3, N'Scotch', CAST(30 AS Decimal(18, 0)), N'Burgundy', N'Ron approves this scotch', 15, N'https://p0.pxfuel.com/preview/672/785/171/alcohol-beverage-cocktail-drink-royalty-free-thumbnail.jpg')
SET IDENTITY_INSERT [dbo].[Products] OFF
SET IDENTITY_INSERT [dbo].[ProductTypes] ON 

INSERT [dbo].[ProductTypes] ([ProductTypesTableId], [ProductTypeName], [ProductTypeId]) VALUES (1, N'Book', 1)
INSERT [dbo].[ProductTypes] ([ProductTypesTableId], [ProductTypeName], [ProductTypeId]) VALUES (2, N'Beer', 2)
INSERT [dbo].[ProductTypes] ([ProductTypesTableId], [ProductTypeName], [ProductTypeId]) VALUES (3, N'Whiskey', 3)
SET IDENTITY_INSERT [dbo].[ProductTypes] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive], [FirebaseUID], [ImageUrl]) VALUES (1, N'Wiles', N'Nick', CAST(N'1988-05-10' AS Date), N'nick.wiles@email.com', CAST(N'2020-05-19' AS Date), 1, 1, N'VURfFMSZ6mWM1mRyjnwrf2Bb2eX2', N'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2nrmQaPSve_c2gdm8Wv7cVdXBZy5t7CEy8w&usqp=CAU')
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive], [FirebaseUID], [ImageUrl]) VALUES (2, N'Miller', N'Morgan', CAST(N'1990-04-14' AS Date), N'morgan.miller@email.com', CAST(N'2019-02-16' AS Date), 1, 1, N'ccm6RYBOWKSN8kVQLzwa1qHP0i83', N'https://i.imgur.com/yE9P3BA.jpg')
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive], [FirebaseUID], [ImageUrl]) VALUES (3, N'Jenkins', N'Tyson', CAST(N'1993-10-10' AS Date), N'tyson.jenkins@email.com', CAST(N'2018-09-05' AS Date), 1, 0, N'hv5XZyWGvzPv2K09KVdz9qHj0K73', N'https://i.imgur.com/cAFuCFq.jpg')
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive], [FirebaseUID], [ImageUrl]) VALUES (4, N'Wayne', N'Bruce', CAST(N'1968-05-10' AS Date), N'defNotBatman@email.com', CAST(N'2020-05-19' AS Date), 1, 1, N'PySgFvNPcmWaAnMY7NhE78xfnWr1', N'https://i.imgur.com/adUiTFR.jpg')
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive], [FirebaseUID], [ImageUrl]) VALUES (5, N'Parker', N'Peter', CAST(N'2000-04-14' AS Date), N'amazing@email.com', CAST(N'2019-02-16' AS Date), 0, 1, NULL, N'https://i.imgur.com/zzYSJz7_d.webp?maxwidth=640&shape=thumb&fidelity=medium')
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive], [FirebaseUID], [ImageUrl]) VALUES (6, N'Monroe', N'Aurora', CAST(N'1983-10-10' AS Date), N'storm@email.com', CAST(N'2018-09-05' AS Date), 1, 1, NULL, N'https://i.imgur.com/3abREpH.gif')
INSERT [dbo].[Users] ([UserId], [LastName], [FirstName], [DateOfBirth], [Email], [DateAccountCreated], [isOver21], [isAcctActive], [FirebaseUID], [ImageUrl]) VALUES (8, N'Sales', N'Online', CAST(N'1980-01-01' AS Date), N'East&Barley@eastbarley.com', CAST(N'2017-01-01' AS Date), 1, 1, NULL, N'https://i.imgur.com/xFgmkW0.jpg')
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[BookDetails]  WITH CHECK ADD FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Users]
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
