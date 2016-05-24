package entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Entity(name = "graph")
@Table(name = "graph")
public class Graph {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;
    @Column(name = "driverId", nullable = false)
    private int driverId;
    @Column(name = "date", nullable = false)
    private Date date;
    @Column(name = "shift", nullable = false)
    private Integer shift;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Column(name = "busId")
    private Integer busId;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="driverId", insertable = false, updatable = false)
    private Driver driver;

    @PreRemove
    private void removeAssociationsWithChilds() {
        this.setBusId(null);
    }
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="busId", insertable = false, updatable = false)
    private Bus bus;

    public static Graph createGraph(HttpServletRequest request) throws NullPointerException, NumberFormatException, ParseException {
        String date = request.getParameter("date");
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date parsed = format.parse(date);
        Date sqlDate = new  Date(parsed.getTime());
        Integer shift = new Integer(request.getParameter("shift"));
        Integer bus = new Integer(request.getParameter("bus"));
        int driverId = new Integer(request.getParameter("number"));
        return new Graph(driverId, sqlDate, shift, bus);
    }

    public Graph(){}

    public Graph(int driverId, Date date, Integer shift, Integer bus){
        this.setDriverId(driverId);
        this.setDate(date);
        this.setShift(shift);
        this.setBusId(bus);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getDriverId() {
        return driverId;
    }

    public void setDriverId(int driverId) {
        this.driverId = driverId;
    }

    public Integer getShift() {
        return shift;
    }

    public void setShift(Integer shift) {
        this.shift = shift;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    @Override
    public int hashCode(){
        return this.id;
    }

    @Override
    public boolean equals(Object object) {
        if (object instanceof Graph) {
            Graph graph = (Graph) object;
            return graph.getId() == this.id & graph.getDriverId() == this.driverId
                    & graph.getDate().equals(this.date) & graph.getShift() == this.shift;
        }
        return false;
    }

    public Integer getBusId() {
        return busId;
    }

    public void setBusId(Integer busId) {
        this.busId = busId;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }
}
