package service;

import entities.Driver;
import javax.ejb.Stateless;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;

@Stateless
public class DriverDao {

    @PersistenceContext(unitName = "Depot")
    private EntityManager em;

    public int getCountsDrivers(int number, String licenseNumber)throws NumberFormatException{
        Query query = em.createNativeQuery("{call spGetCountsDrivers(?,?) }")
                .setParameter(1, number)
                .setParameter(2, licenseNumber)
                ;
        return (Integer)query.getResultList().get(0);
    }

    public int saveDriver(Driver driver)throws SQLException {
        Query query = em.createNativeQuery("{call spSaveDriver(?,?,?,?,?,?,?)}",
                Driver.class)
                .setParameter(1, driver.getLastName())
                .setParameter(2, driver.getFirstName())
                .setParameter(3, driver.getPatronymic())
                .setParameter(4, driver.getBirthDate())
                .setParameter(5, driver.getAddress())
                .setParameter(6, driver.getTelephone())
                .setParameter(7, driver.getLicenseNumber())
                ;
        return query.executeUpdate();
    }

    public int updateDriver(Driver driver)throws SQLException {
        Query query = em.createNativeQuery("{call spUpdateDriver(?,?,?,?,?)}",
                Driver.class)
                .setParameter(1, driver.getId())
                .setParameter(2, driver.getLastName())
                .setParameter(3, driver.getFirstName())
                .setParameter(4, driver.getPatronymic())
                .setParameter(5, driver.getLicenseNumber())
                ;

        return query.executeUpdate();
    }

    public ArrayList<Driver> findAll()throws SQLException, NamingException {
        Query query = em.createNativeQuery("{call spGetAllDrivers()}", Driver.class);
        return new ArrayList<Driver>(query.getResultList());
    }

    public ArrayList<Driver> findToday(Date date, int shift)throws SQLException, NamingException {
        Query query = em.createNativeQuery("{call spFindToday(?,?)}", Driver.class)
                .setParameter(1, date)
                .setParameter(2, shift)
                ;
        return new ArrayList<Driver>(query.getResultList());
    }

    public ArrayList<Driver> findByNumber (int number) throws SQLException, NamingException {
        Query query = em.createNativeQuery("{call spFindById(?)}",
                Driver.class)
                .setParameter(1, number);
        return new ArrayList<Driver>(query.getResultList());
    }

    public ArrayList<Driver> findByLastName (String lastName) throws SQLException, NamingException {
        Query query = em.createNativeQuery("{call spFindByLastName(?)}",
                Driver.class)
                .setParameter(1, lastName);
        return new ArrayList<Driver>(query.getResultList());
    }

    public int delete(int index)throws SQLException{
        Query query = em.createNativeQuery("{call spDeleteDriver(?)}",
                Driver.class)
                .setParameter(1, index);
        return query.executeUpdate();
    }

}
