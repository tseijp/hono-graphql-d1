/* app/schemas/dump.sql */
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `post`;

CREATE TABLE `user` (
  `userId` TEXT,
  `username` TEXT DEFAULT NULL,
  `createdAt` TEXT DEFAULT (datetime('now')),
  `updatedAt` TEXT DEFAULT (datetime('now'))
);

CREATE TABLE `post` (
  `postId` TEXT,
  `userId` TEXT,
  `parent` TEXT DEFAULT NULL,
  `content` TEXT DEFAULT NULL,
  `createdAt` TEXT DEFAULT (datetime('now')),
  `updatedAt` TEXT DEFAULT (datetime('now'))
);

INSERT INTO `user` (userId, username) VALUES ('a', 'alice');
INSERT INTO `user` (userId, username) VALUES ('b', 'bob');
INSERT INTO `user` (userId, username) VALUES ('c', 'charlie');

INSERT INTO `post` (postId, userId, content) VALUES ('A', 'a', 'Hello, world!');
INSERT INTO `post` (postId, userId, content) VALUES ('B', 'b', 'Hi, there!');
INSERT INTO `post` (postId, userId, content) VALUES ('C', 'c', 'Hey, guys!');