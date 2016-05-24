package service;

import entities.Work;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.sql.SQLException;

@Stateless
public class WorkDao {

    @PersistenceContext(unitName = "Depot")
    private EntityManager em;

    public int addWork(int bus, int graph)throws SQLException {
        Query query = em.createNativeQuery("{call addWork(?,?)}",
                Work.class)
                .setParameter(1, bus)
                .setParameter(2, graph)
                ;
        return query.executeUpdate();
    }

    public int delete(int id)throws SQLException {
        Query query = em.createNativeQuery("{call deleteWork(?)}",
                Work.class)
                .setParameter(1, id)
                ;
        return query.executeUpdate();
    }
}
