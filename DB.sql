-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 27, 2021 at 02:31 AM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greymert_nodemysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `calls`
--

CREATE TABLE `calls` (
  `callname` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `calls`
--

INSERT INTO `calls` (`callname`) VALUES
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('DELETE'),
('DELETE'),
('DELETE'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET'),
('GET');

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `quote` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`id`, `quote`) VALUES
(2, 'gg2'),
(3, 'gg3');

-- --------------------------------------------------------

--
-- Table structure for table `Quotes`
--

CREATE TABLE `Quotes` (
  `id` int(11) NOT NULL,
  `quote` varchar(1000) CHARACTER SET ascii COLLATE ascii_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Quotes`
--

INSERT INTO `Quotes` (`id`, `quote`) VALUES
(1, 'This is a test -German R.'),
(2, 'Trial and error is the way -German R.'),
(3, 'Do never give up, I belive at you! -German R');

-- --------------------------------------------------------

--
-- Table structure for table `UserGrade`
--

CREATE TABLE `UserGrade` (
  `Name` text NOT NULL,
  `Grade` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userGrade`
--

CREATE TABLE `userGrade` (
  `name` text NOT NULL,
  `grade` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userGrade`
--

INSERT INTO `userGrade` (`name`, `grade`) VALUES
('german', 100),
('german', 100),
('german', 100),
('german', 300),
('test', 100),
('Andrew', 500),
('german', 300),
('andrew', 50),
('German', 3000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Quotes`
--
ALTER TABLE `Quotes`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
