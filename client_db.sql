-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: client_db
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(32) NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'セブンイレブン'),(2,'ローソン'),(3,'ファミリーマート'),(4,'am/pm'),(5,'サークルKサンクス'),(6,'ミニストップ'),(7,'ナチュラルローソン'),(8,'ピアゴ'),(9,'マルエツ'),(10,'ダイエー');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(32) NOT NULL,
  `user_kana` varchar(32) NOT NULL,
  `user_mail` varchar(50) DEFAULT NULL,
  `user_phone` varchar(15) DEFAULT NULL,
  `user_born` varchar(10) NOT NULL,
  `user_sex` varchar(10) NOT NULL,
  `company_id` int(11) NOT NULL,
  `insert_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_id` (`company_id`),
  CONSTRAINT `fk_id` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (18,'nagaiyusei','ユウセイ','yyyyyyyyy@gmail.com','0000000000','2000-10-13','man',1,'2024-04-22 09:06:46','2024-05-02 12:58:16'),(19,'田中将司','タナカマサシ','masashi.tanaka1013@gmail.com','09033334444','2000-10-13','man',1,'2024-04-22 09:18:35','2024-05-02 12:05:39'),(68,'中村和樹','ナカムラカズキ','xxxxxxxxxx@xxxxxxx','0011112222','2024-04-26','woman',3,'2024-04-26 07:20:25','2024-04-26 18:28:56'),(70,'松田清司','マツキヨ','xxxxxxxxxx@xxxxxxx','0011112222','1994-05-16','man',4,'2024-04-26 07:37:51','2024-04-30 12:26:40'),(71,'田中将司','タナカマサシ','masashi.tanaka1013@gmail.com','0901119999','2000-10-13','woman',4,'2024-04-26 08:17:21','2024-04-26 18:28:25'),(98,'山本剛','ヤマモトツヨシ','yyyyyyyyy@gmail.com','0000000000','2000-01-01','man',5,'2024-04-30 06:46:53','2024-04-30 15:46:53'),(99,'山本剛','ヤマモトツヨシ','yyyyyyyyy@gmail.com','0000000000','2000-01-01','man',1,'2024-04-30 06:47:02','2024-05-02 12:05:50'),(102,'nagaiyusei','ユウセイ','yyyyyyyyy@gmail.com','0000000000','2000-01-01','man',5,'2024-05-01 05:04:06','2024-05-01 14:04:06'),(105,'太郎五郎','タロウジロウ','yyyyyyyyy@gmail.com','0000000000','2000-01-01','woman',10,'2024-05-01 08:20:27','2024-05-01 17:20:27'),(110,'satou','satou','xxxxxx@xxxx.xxx','44444444444','2000-10-13','man',1,'2024-05-02 03:44:02','2024-05-02 12:44:02'),(117,'太郎五郎','タロウジロウ','xxxxxxxxxx@xxxxxxx','0011112222','2024-05-02','man',7,'2024-05-02 03:52:50','2024-05-02 12:52:50'),(118,'太郎五郎','タロウジロウ','xxxxxxxxxx@xxxxxxx','0011112222','2024-05-02','man',7,'2024-05-02 03:53:02','2024-05-02 12:53:02'),(119,'太郎五郎','タロウジロウ','xxxxxxxxxx@xxxxxxx','0011112222','2000-01-01','man',3,'2024-05-02 03:53:11','2024-05-02 12:53:11'),(120,'田中聡','タロウゴロウ','xxxxxxxxxx@xxxxxxx','0011112222','2000-01-01','woman',1,'2024-05-02 05:01:53','2024-05-02 14:01:53'),(136,'太郎五郎','ユウセイ','xxxxxxxxxx@xxxxxxx','0011112222','2000-01-01','man',2,'2024-05-02 05:34:19','2024-05-02 14:34:19'),(138,'太郎五郎','タナカマサシ','xxxxxxxxxx@xxxxxxx','0011112222','2000-01-01','man',8,'2024-05-02 05:37:48','2024-05-02 14:37:48');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-08 12:28:36
