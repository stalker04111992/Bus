use BusDepot;
go


create procedure getCountsDrivers @number int, @licenseNumber varchar(10)
as
begin	
	(select count(*) from driver where licenseNumber = @licenseNumber and @number != id);
end
drop procedure getCountsDrivers
---------------------------------------------------
--выбрать сотрудника по id
create procedure findById
@id int
as
	select D.* from driver D where D.id = @id;
	select G.* from graph G where G.driverId = @id and G.date >= GETDATE();

--удалить процедуру
drop procedure findById

---------------------------------------------------
go

--выбрать свободного сотрудника по id
create procedure findFreeById
@id int
as
	select D.* from driver D where D.id = @id and not exists(select G.driverId from graph G where D.id = G.driverId);
--удалить процедуру
drop procedure findFreeById

---------------------------------------------------

go
--поиск по фамилии
create procedure findByLastName
@lastName varchar(50)
as 
	select D.* from driver D where D.lastName = @lastName;
	
go
--удалить процедуру
drop procedure findByLastName
---------------------------------------------------
go
--поиск по фамилии
create procedure findFreeByLastName
@lastName varchar(50)
as 
	select D.* from driver D where D.lastName = @lastName and not exists(select G.driverId from graph G where D.id = G.driverId); 
	
go
--удалить процедуру
drop procedure findFreeByLastName
---------------------------------------------------

go
--удаление сотрудника из базы
create procedure deleteDriver
@id int
as 
	delete driver 
		where id = @id;
	return 0
--удалить процедуру
drop procedure deleteDriver

--------------------------------------------------------

go
--добавить автобус в базу
create procedure saveDriver
@lastName varchar(50), @firstName varchar(50), @patronymic varchar(50), @birthDate Date, @address varchar(256), @telephone varchar(16), @licenseNumber varchar(10)
as 
	insert into driver(lastName, firstName, patronymic, birthDate, address, telephone, licenseNumber) VALUES (@lastName, @firstName, @patronymic, @birthDate, @address, @telephone, @licenseNumber)
	return 0
--удалить процедуру
drop procedure saveDriver

---------------------------------------------------------

go
--изменить данные об автобусе
create procedure updateDriver
@id int, @lastName varchar(50), @firstName varchar(50), @patronymic varchar(50), @licenseNumber varchar(10)
as 
	update driver
	set lastName = @lastName, firstName = @firstName, patronymic = @patronymic, licenseNumber = @licenseNumber where id = @id
	return 0
--drop procedure
drop procedure updateDriver

----------------------------------------------------------

go
--выбрать все автобусы
create procedure getAllDrivers
as
	select * from driver;

--удалить процедуру
drop procedure getAllDrivers

----------------------------------------------------------

go
--выбрать всех водителей
create procedure getFreeAllDrivers
as
	select D.* from driver D where not exists(select G.driverId from graph G where G.driverId = D.id);
--удалить процедуру
drop procedure getFreeAllDrivers

----------------------------------------------------------

go

drop procedure graphic

create procedure findToday
@date Date, @shift int
as
	select D.* from driver D join graph G on D.id = G.driverId and G.[date] = @date and G.[shift] = @shift;
--удалить процедуру
drop procedure findToday


create procedure findGraphToday
@date Date, @shift int
as
	select G.* from graph G where G.[date] = @date and DATEDIFF(day, GETDATE(),@date) >= 0 and G.[shift] = @shift;
--удалить процедуру
drop procedure findGraphToday

create procedure addShift
@driverId int, @startDate Date, @shift int
as begin

	if ((select count(*) from graph where @driverId = driverId and @startDate = [date]) = 0 and DATEDIFF(day, GETDATE(), @startDate) > 0 and DATEDIFF(day, GETDATE(), @startDate)  < 30)
	begin
		insert into graph(driverId, [date], [shift]) values(@driverId, @startDate, @shift);
	end
end

drop procedure addShift

create procedure deleteGraphic
@id int 
as begin
	delete graph
		where driverId = @id;
end

create procedure selectGraph
@driverId int
as begin
	select G.* from graph G where G.driverId = @driverId and abs(DATEDIFF(day, GETDATE(),[date])) >= 0 order by G.[date];
end

drop procedure selectGraph

create procedure selectMonth
@driverId int, @month int
as begin
	select G.* from graph G where G.driverId = @driverId and @month = MONTH(G.[date]) and abs(DATEDIFF(day, GETDATE(),G.[date])) >= 0 order by [date];
end

drop procedure selectMonth
go

create procedure selectGraphFull
@driverId int
as begin
	select G.* from graph G where G.driverId = @driverId and Month(G.[date]) = MONTH(G.[date]) order by [date];
end

drop procedure selectGraphFull

go

create procedure selectMonth
@driverId int, @month int
as begin
	select G.* from graph G where G.driverId = @driverId and @month = MONTH(G.[date]) and abs(DATEDIFF(day, GETDATE(),G.[date])) >= 0 order by [date];
end

drop procedure selectMonth

go

create procedure findGraphByNumber
@number int
as begin
	select G.* from graph G where G.id = @number;
end

go

create procedure deleteGraph
@number int
as begin
	delete graph
		where id = @number and datediff(day, GETDATE(), [date]) >= 0;
end

drop procedure deleteGraph


create procedure addWork
@busId int, @graphId int
as begin
	insert into work(busId, graphId) values(@busId, @graphId);
end

drop procedure addWork

create procedure deleteWork
@number int
as begin
	delete work
		where id = @number;
end

drop procedure deleteWork