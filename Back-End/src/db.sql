use tempDB;

CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(30) UNIQUE NOT NULL, password VARCHAR(30) NOT NULL, regTime DATE NOT NULL);

INSERT INTO users (email, password, regTime) VALUES ('potat@noob.lt', 'testPassword', '2010-02-22');

SELECT * FROM users;
 
 
 