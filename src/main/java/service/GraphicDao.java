package service;

import entities.Graph;

import javax.ejb.Stateless;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;

@Stateless
public class GraphicDao {

    @PersistenceContext(unitName = "Depot")
    private EntityManager em;

    public ArrayList<Graph> findGraphToday(Date date, int shift)throws SQLException, NamingException {
        Query query = em.createNativeQuery("{call spFindGraphToday(?,?)}", Graph.class)
                .setParameter(1, date)
                .setParameter(2, shift)
                ;
        return new ArrayList<Graph>(query.getResultList());
    }

    public ArrayList<Graph> selectMonth (int driverId) throws SQLException, NamingException {
        Query query = em.createNativeQuery("{call spSelectGraph(?)}",
                Graph.class)
                .setParameter(1, driverId)
                ;
        return (ArrayList<Graph>)query.getResultList();
    }

    public ArrayList<Graph> selectMonthFull (int driverId) throws SQLException, NamingException {
        Query query = em.createNativeQuery("{call spSelectGraphFull(?)}",
                Graph.class)
                .setParameter(1, driverId)
                ;
        return (ArrayList<Graph>)query.getResultList();
    }

    public int addShift(int id, Date startDate, int shift)throws SQLException {
        Query query = em.createNativeQuery("{call spAddShift(?,?,?)}",
                Graph.class)
                .setParameter(1, id)
                .setParameter(2, startDate)
                .setParameter(3, shift)
                ;
        return query.executeUpdate();
    }

    public int delete(int id)throws SQLException {
        Query query = em.createNativeQuery("{call spDeleteGraphic(?)}",
                Graph.class)
                .setParameter(1, id)
                ;
        return query.executeUpdate();
    }

    public int setBus(int graph, int bus)throws SQLException {
        Query query = em.createNativeQuery("{call spSetBus(?,?)}",
                Graph.class)
                .setParameter(1, graph)
                .setParameter(2, bus)
                ;
        return query.executeUpdate();
    }

    public int setBusNull(int graph)throws SQLException {
        Query query = em.createNativeQuery("{call spSetBusNull(?)}",
                Graph.class)
                .setParameter(1, graph)
                ;
        return query.executeUpdate();
    }

    public int deleteGraph(int id)throws SQLException {
        Query query = em.createNativeQuery("{call spDeleteGraph(?)}",
                Graph.class)
                .setParameter(1, id)
                ;
        return query.executeUpdate();
    }
}
