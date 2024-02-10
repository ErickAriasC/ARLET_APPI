use node_mysql_ts;
create database node_mysql_ts;
create table posts(
    id int (11) not null auto_increment primary key,
    title varchar(200) not null,
    description text not null,
    created_at timestamp default current_timestamp
);

describe  posts;
select * from posts