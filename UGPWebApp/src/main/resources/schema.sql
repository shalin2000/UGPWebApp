CREATE TABLE userReview
(
--  userName varchar(100) NOT NULL,
 userComment varchar(100),
 crsTitle varchar(100),
 crsNbr varchar(100),
 crsSubjCd varchar(100),
 profName varchar(100),
 easinessRating int,
 helpfulnessRating int,
 clarityRating int,
 workloadRating int,
 gradingRating int,
 totalStar int,
 totalStarAllUser integer[],
 PRIMARY KEY (userComment)
);