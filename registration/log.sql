CREATE TABLE `users` (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON    UPDATE CURRENT_TIMESTAMP
) 
