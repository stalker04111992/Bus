package entities;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.servlet.http.HttpServletRequest;

@Entity(name = "work")
@Table(name = "work")
public class Work {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "busId", nullable = false)
    private int busId;
    @Column(name = "graphId", nullable = false, unique = true)
    private int graphId;

    public Work(){}


    public static Work createWork(HttpServletRequest request) throws NullPointerException, NumberFormatException{
        int busId = new Integer(request.getParameter("budId"));
        int graphId = new Integer(request.getParameter("graphId"));
        return new Work(busId, graphId);
    }

    @JsonIgnore
    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="graphId", unique = true, insertable = false, updatable = false)
    public Graph graph;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="busId", insertable = false, updatable = false)
    private Bus bus;

    public Work(int busId, int graphId){
        this.setBusId(busId);
        this.setGraphId(graphId);
    }

    @Override
    public int hashCode(){
        return this.id;
    }

    @Override
    public boolean equals(Object object) {
        if (object instanceof Work) {
            Work work = (Work) object;
            return work.getId() == this.id & work.getBusId() == this.getBusId()
                    & work.getGraphId() == this.getGraphId();
        }
        return false;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBusId() {
        return busId;
    }

    public void setBusId(int busId) {
        this.busId = busId;
    }

    public int getGraphId() {
        return graphId;
    }

    public void setGraphId(int graphId) {
        this.graphId = graphId;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }
}
