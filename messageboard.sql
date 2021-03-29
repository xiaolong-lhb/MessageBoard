/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : messageboard

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-03-29 20:04:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_message`
-- ----------------------------
DROP TABLE IF EXISTS `t_message`;
CREATE TABLE `t_message` (
  `username` varchar(20) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  `createtime` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_message
-- ----------------------------
INSERT INTO `t_message` VALUES ('beidou', '我叫北斗', '2021/3/25 17:11', '我是一名海盗船长');
INSERT INTO `t_message` VALUES ('shatang', '我叫砂糖', '2021/3/25   21:52:40', '我是一名炼金术师');
INSERT INTO `t_message` VALUES ('xingqiu', '我叫行秋', '2021/3/25   19:18:00', '我是一名古华派弟子');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('beidou', '123', '北斗');
INSERT INTO `t_user` VALUES ('shatang', '345', '砂糖');
INSERT INTO `t_user` VALUES ('xingqiu', '234', '行秋');
