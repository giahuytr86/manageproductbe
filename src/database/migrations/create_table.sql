-- Xóa bảng cũ nếu tồn tại để tránh lỗi khi chạy lại script
DROP TABLE IF EXISTS OrderDetail CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS Customers CASCADE;
DROP TABLE IF EXISTS Shoes CASCADE;

-- Tạo bảng Shoes
CREATE TABLE Shoes (
    id SERIAL PRIMARY KEY,
    image VARCHAR(255),
    name VARCHAR(255),
    description TEXT,
    price NUMERIC(10, 2),
    color VARCHAR(7)
);

-- Tạo bảng Customers
CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(250),
    city VARCHAR(50),
    country VARCHAR(50)
);

-- Tạo bảng Orders
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES Customers(customer_id) ON DELETE CASCADE,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount NUMERIC(10, 2)
);

-- Tạo bảng OrderDetail
CREATE TABLE OrderDetail (
    order_detail_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES Orders(order_id) ON DELETE CASCADE,
    shoe_id INT REFERENCES Shoes(id) ON DELETE CASCADE,
    quantity INT,
    price NUMERIC(10, 2)
);

-- Thêm dữ liệu mẫu cho Shoes
INSERT INTO Shoes (image, name, description, price, color)
VALUES
('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png',
 'Nike Air Max 1',
 'Classic Air Max cushioning with premium materials.',
 129.99,
 '#FFFFFF'),

('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png',
 'Nike Air Force 1',
 'Timeless streetwear sneaker with iconic design.',
 119.99,
 '#000000'),

('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png',
 'Air Jordan 1 Retro High',
 'Legendary basketball silhouette from the 80s.',
 179.99,
 '#FF0000');
