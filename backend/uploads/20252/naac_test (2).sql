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
-- Table structure for table `clg_departments`
--

CREATE TABLE `clg_departments` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clg_departments`
--

INSERT INTO `clg_departments` (`dept_id`, `dept_name`) VALUES
(1, 'Computer Science and Engineering'),
(2, 'Mechanical Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `faculty_details`
--

CREATE TABLE `faculty_details` (
  `faculty_id` int(11) NOT NULL,
  `faculty_name` varchar(255) NOT NULL,
  `faculty_department_id` int(11) NOT NULL,
  `faculty_email` varchar(255) NOT NULL,
  `faculty_contact` int(11) NOT NULL,
  `faculty_password` varchar(255) NOT NULL,
  `date_of_faculty_registration` datetime NOT NULL DEFAULT current_timestamp(),
  `qnm1_1_1` tinyint(1) NOT NULL DEFAULT 0,
  `qnm1_2_1` tinyint(1) NOT NULL DEFAULT 0,
  `qnm1_2_2` tinyint(1) NOT NULL DEFAULT 0,
  `qnm1_3_1` tinyint(1) NOT NULL DEFAULT 0,
  `qnm1_3_2` tinyint(1) NOT NULL DEFAULT 0,
  `qnm1_4_1` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculty_details`
--

INSERT INTO `faculty_details` (`faculty_id`, `faculty_name`, `faculty_department_id`, `faculty_email`, `faculty_contact`, `faculty_password`, `date_of_faculty_registration`, `qnm1_1_1`, `qnm1_2_1`, `qnm1_2_2`, `qnm1_3_1`, `qnm1_3_2`, `qnm1_4_1`) VALUES
(20241, 'Admin', 1, 'admin@gmail.com', 123456789, 'admin', '2024-03-18 12:04:49', 0, 0, 0, 0, 0, 0),
(20250, 'asdasd', 1, 'abcd@gaiasd', 123, '123', '2024-03-31 12:47:08', 0, 1, 0, 0, 0, 1),
(20251, 'asdasd', 2, 'abc@gmail.com', 123, '123', '2024-03-31 13:30:20', 0, 0, 0, 1, 0, 0),
(20252, 'test', 1, 'test@gmail.com', 123, '123', '2024-03-31 14:15:16', 1, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `faculty_notifications`
--

CREATE TABLE `faculty_notifications` (
  `notification_id` int(10) NOT NULL,
  `notification_msg` varchar(500) NOT NULL,
  `notification_date_time` datetime NOT NULL DEFAULT current_timestamp(),
  `faculty_id` int(11) NOT NULL,
  `viewed_status` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculty_notifications`
--

INSERT INTO `faculty_notifications` (`notification_id`, `notification_msg`, `notification_date_time`, `faculty_id`, `viewed_status`) VALUES
(1, 'Hello world', '2024-04-19 22:27:38', 20241, 0);

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

-- --------------------------------------------------------

--
-- Table structure for table `qnm1_2_1`
--

CREATE TABLE `qnm1_2_1` (
  `m_id` int(10) NOT NULL,
  `m_desc` text NOT NULL,
  `m_files` blob NOT NULL,
  `faculty_id` int(11) NOT NULL,
  `date_of_upload` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clg_departments`
--
ALTER TABLE `clg_departments`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `faculty_details`
--
ALTER TABLE `faculty_details`
  ADD PRIMARY KEY (`faculty_id`),
  ADD KEY `faculty_department_id` (`faculty_department_id`);

--
-- Indexes for table `faculty_notifications`
--
ALTER TABLE `faculty_notifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `faculty_id_k` (`faculty_id`);

--
-- Indexes for table `qnm1_1_1`
--
ALTER TABLE `qnm1_1_1`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `k_faculty_id` (`faculty_id`);

--
-- Indexes for table `qnm1_2_1`
--
ALTER TABLE `qnm1_2_1`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `faculty_id_qnm_1_2_1` (`faculty_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `faculty_details`
--
ALTER TABLE `faculty_details`
  MODIFY `faculty_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20253;

--
-- AUTO_INCREMENT for table `faculty_notifications`
--
ALTER TABLE `faculty_notifications`
  MODIFY `notification_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `qnm1_1_1`
--
ALTER TABLE `qnm1_1_1`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `qnm1_2_1`
--
ALTER TABLE `qnm1_2_1`
  MODIFY `m_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `faculty_details`
--
ALTER TABLE `faculty_details`
  ADD CONSTRAINT `faculty_details_ibfk_1` FOREIGN KEY (`faculty_department_id`) REFERENCES `clg_departments` (`dept_id`);

--
-- Constraints for table `faculty_notifications`
--
ALTER TABLE `faculty_notifications`
  ADD CONSTRAINT `faculty_id_k` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`);

--
-- Constraints for table `qnm1_1_1`
--
ALTER TABLE `qnm1_1_1`
  ADD CONSTRAINT `k_faculty_id` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`);

--
-- Constraints for table `qnm1_2_1`
--
ALTER TABLE `qnm1_2_1`
  ADD CONSTRAINT `faculty_id_qnm_1_2_1` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
