USE [master]
GO
/****** Object:  Database [East&Barley]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[BookDetails]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[Employees]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[Invoice]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[LineItems]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[OrderStatus]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[Payments]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[Products]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[ProductTypes]    Script Date: 6/27/2020 2:13:06 AM ******/
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
/****** Object:  Table [dbo].[Users]    Script Date: 6/27/2020 2:13:06 AM ******/
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
