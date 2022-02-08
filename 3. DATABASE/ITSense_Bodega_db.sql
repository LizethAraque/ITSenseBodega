BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [ProductTypes] (
    [Id] int NOT NULL IDENTITY,
    [ProductName] nvarchar(20) NOT NULL,
    CONSTRAINT [PK_ProductTypes] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Statuses] (
    [Id] int NOT NULL IDENTITY,
    [StatusOption] nvarchar(20) NOT NULL,
    CONSTRAINT [PK_Statuses] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Products] (
    [Id] int NOT NULL IDENTITY,
    [Status] nvarchar(100) NOT NULL,
    [Stock] int NOT NULL,
    [ProductTypeId] int NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Products_ProductTypes_ProductTypeId] FOREIGN KEY ([ProductTypeId]) REFERENCES [ProductTypes] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [ProductSalida] (
    [Id] int NOT NULL IDENTITY,
    [ProductTypeId] int NOT NULL,
    [Cantidad] int NOT NULL,
    CONSTRAINT [PK_ProductSalida] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProductSalida_ProductTypes_ProductTypeId] FOREIGN KEY ([ProductTypeId]) REFERENCES [ProductTypes] ([Id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_Products_ProductTypeId] ON [Products] ([ProductTypeId]);
GO

CREATE INDEX [IX_ProductSalida_ProductTypeId] ON [ProductSalida] ([ProductTypeId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220207165759_InitialCreate', N'6.0.1');
GO

COMMIT;
GO
