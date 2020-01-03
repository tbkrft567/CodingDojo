-- ********
-- Select  
--   concat(users.first_name, ' ', users.last_name) as 'User_Name'
-- , concat(friendlies.first_name, ' ',friendlies.last_name) as 'Friend_Name'
-- from friends.users
-- inner join friends.friendships on friendships.user_id = users.id
-- inner join friends.users as Friendlies on friendlies.id = friendships.friend_id;

-- 1.
-- Select  
--   concat(users.first_name, ' ', users.last_name) as 'User_Name'
-- , concat(friendlies.first_name, ' ',friendlies.last_name) as 'Friend_Name'
-- from friends.users
-- inner join friends.friendships on friendships.user_id = users.id
-- inner join friends.users as Friendlies on friendlies.id = friendships.friend_id
-- Where concat(friendlies.first_name, ' ',friendlies.last_name) = 'Kermit The Frog';

-- 2.
-- Select  
-- count(*)
-- from friends.users
-- inner join friends.friendships on friendships.user_id = users.id
-- inner join friends.users as Friendlies on friendlies.id = friendships.friend_id;

-- 3.
-- Select  
-- concat(users.first_name, ' ', users.last_name) as 'User_Name'
-- , count(*)
-- from friends.users
-- inner join friends.friendships on friendships.user_id = users.id
-- inner join friends.users as Friendlies on friendlies.id = friendships.friend_id
-- order by 2
-- limit 1;

-- 4.
-- insert into friends.users values ('7','Zach','Kraft','2019-10-25 14:30:00', '2019-10-25 14:30:00')
-- update friends.friendships set friend_id = 5 where id =-- 
-- insert into friends.friendships values ('7','6', '2','2019-10-25 14:30:00', '2019-10-25 14:30:00');
-- insert into friends.friendships values ('8','6', '4','2019-10-25 14:30:00', '2019-10-25 14:30:00');
-- insert into friends.friendships values ('9','6', '6','2019-10-25 14:30:00', '2019-10-25 14:30:00');

-- Select  
--   concat(users.first_name, ' ', users.last_name) as 'User_Name'
-- , concat(friendlies.first_name, ' ',friendlies.last_name) as 'Friend_Name'
-- from friends.users
-- inner join friends.friendships on friendships.user_id = users.id
-- inner join friends.users as Friendlies on friendlies.id = friendships.friend_id;

-- 5.
-- Select  
--   concat(users.first_name, ' ', users.last_name) as 'User_Name'
-- , concat(friendlies.first_name, ' ',friendlies.last_name) as 'Friend_Name'
-- from friends.users
-- inner join friends.friendships on friendships.user_id = users.id
-- inner join friends.users as Friendlies on friendlies.id = friendships.friend_id
-- Where concat(users.first_name, ' ', users.last_name) like '%eli%'
-- order by concat(friendlies.first_name, ' ',friendlies.last_name);

-- 6.
-- Select *
-- from friends.friendships;
-- delete from friends.friendships 
-- where 
-- 	friend_id = '5' 
-- and user_id = '2';

-- 7.
-- Select  
--   concat(users.first_name, ' ', users.last_name) as 'User_Name'
-- , concat(friendlies.first_name, ' ',friendlies.last_name) as 'Friend_Name'
-- from friends.users
-- left join friends.friendships on friendships.user_id = users.id
-- left join friends.users as Friendlies on friendlies.id = friendships.friend_id;
