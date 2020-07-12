CREATE TABLE userReview
(
 userComment varchar(1000),
 crsTitle varchar(100),
 crsNbr varchar(100),
 crsSubjCd varchar(100),
 profName varchar(100),
 easinessRating int,
 helpfulnessRating int,
 clarityRating int,
 workloadRating int,
 gradingRating int,
 totalStar float,
 datePosted varchar(100),
 PRIMARY KEY (userComment)
);