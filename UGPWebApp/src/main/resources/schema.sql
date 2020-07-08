CREATE TABLE userReviews
(
 userName varchar(100) NOT NULL,
 userComment varchar(100) DEFAULT NULL,
 crsTitle varchar(100) DEFAULT NULL,
 crsNbr varchar(100) DEFAULT NULL,
 crsSubjCd varchar(100) DEFAULT NULL,
 profName varchar(100) DEFAULT NULL,
 PRIMARY KEY (userName)
);