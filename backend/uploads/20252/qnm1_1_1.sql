-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2024 at 08:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `naac_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `qnm1_1_1`
--

CREATE TABLE `qnm1_1_1` (
  `m_id` int(11) NOT NULL,
  `m_desc` text NOT NULL,
  `m_files` varchar(500) NOT NULL,
  `faculty_id` int(11) DEFAULT NULL,
  `date_of_upload` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `qnm1_1_1`
--

INSERT INTO `qnm1_1_1` (`m_id`, `m_desc`, `m_files`, `faculty_id`, `date_of_upload`) VALUES
(1, 'Sample text', 'asdasdasd', NULL, '2024-03-31 22:50:16'),
(2, '<h1><strong>sadasd</strong></h1><p>this is something to be noted </p><ol><li>and since this is little hevay</li></ol>', 'C:\\fakepath\\e1d312ce-4930-478d-be6a-d41424777f85.pdf', NULL, '2024-03-31 22:50:16'),
(18, '<p>asdasd</p><p>something</p>', '[{\"sr_no\":1,\"file_name\":\"PORTFOLIO_WEBSITE-min.jpg\",\"file_desc\":\"asd\"},{\"sr_no\":2,\"file_name\":\"one dance - drake ft. wizkid [edit audio].mp3\",\"file_desc\":\"asd\"}]', NULL, '2024-03-31 22:50:16'),
(19, '<p>asd</p>', '[{\"sr_no\":1,\"file_name\":\"Anurag Choudhari (1).pdf\",\"file_desc\":\"asd\"},{\"sr_no\":2,\"file_name\":\"casey-olsen-NlFyPKxXORo-unsplash.jpg\",\"file_desc\":\"asdasd\"},{\"sr_no\":3,\"file_name\":\"AcmePadm_App_Punjabi.sql-20240324T053123Z-001.zip\",\"file_desc\":\"asd\"}]', 20241, '2024-03-31 22:50:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `qnm1_1_1`
--
ALTER TABLE `qnm1_1_1`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `k_faculty_id` (`faculty_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `qnm1_1_1`
--
ALTER TABLE `qnm1_1_1`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `qnm1_1_1`
--
ALTER TABLE `qnm1_1_1`
  ADD CONSTRAINT `k_faculty_id` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
