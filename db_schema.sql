CREATE DATABASE hackathon;
USE hackathon;

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(20),
    Passkey VARCHAR(20)
);
INSERT INTO User VALUES(1,"USER","user123");
INSERT INTO User VALUES(2,"user1","user123");

CREATE TABLE Subscribers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    Subscription_type VARCHAR(20),
    start_data DATE,
    end_date DATE,
    p_status VARCHAR(20),
    last_p_date DATE)
);

INSERT INTO Subscribers Values(1,"Yearly","2004-01-20","2005-01-20","Active","2004-01-20");
INSERT INTO Subscribers Values(2,"Monthly","2004-01-20","2005-01-20","Active","2004-01-20");