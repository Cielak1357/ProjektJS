CREATE table Users (
   id INTEGER Primary Key AUTOINCREMENT,
   login TEXT,
   pass TEXT,
   email TEXT,
   favPage TEXT
);

INSERT INTO Users (login, pass, email, favPage) values ('TED', 'qwer', 'TED123456789101112@gmail.com', 'nba');
INSERT INTO Users (login, pass, email, favPage) values ('Cielak', 'qwer', 'Cielak1357@gmail.com', 'nba');
